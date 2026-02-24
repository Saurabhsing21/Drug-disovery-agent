# Agent4Target Architecture and Execution Flow

This document provides a visual representation of how the `Agent4Target` evidence collector application is architected and how its requests flow through the system.

## 1. High-Level Architecture Overview

The project provides two primary interfaces to interact with the underlying evidence connectors (DepMap, PHAROS, Open Targets, and Literature):

1. **Standalone CLI (`main.py`)**: A local command-line tool that orchestrates data collection sequentially using **LangGraph**.
2. **MCP Server (`mcp_server/server.py`)**: A Model Context Protocol server that exposes these connectors as standalone tools or as a bundled concurrent executor using **Asyncio**.

```mermaid
graph TD
    User([User / LLM Client])

    User -- "Run CLI" --> CLI[main.py CLI entrypoint]
    User -- "MCP Tool Call" --> MCPServer[mcp_server/server.py]

    subgraph "Core Agent Logic"
        direction TB
        CLI --> Graph["agent.graph.py (LangGraph)"]
        MCPServer --> Service["agent.collector_service.py (Async Service)"]

        Graph -- "Sequential Execution" --> Connectors
        Service -- "Concurrent execution" --> Connectors
    end

    subgraph "Connectors (mcp_server/connectors/)"
        Connectors[Connectors Interface]
        Connectors --> DepMap[DepMap Connector]
        Connectors --> PHAROS[PHAROS Connector]
        Connectors --> OT[Open Targets Connector]
        Connectors --> Lit[Literature Connector]
    end

    Graph --> Normalize["agent.normalize.py (Dedupe & Normalize)"]
    Service --> Normalize

    DepMap -.-> Data1[(Depmap Source)]
    PHAROS -.-> Data2[(Pharos Source)]
    OT -.-> Data3[(Open Targets)]
    Lit -.-> Data4[(Literature PMC)]
```

---

## 2. CLI Execution Flow (LangGraph)

When executing via `main.py`, the flow uses **LangGraph** where the connectors are orchestrated sequentially as graph nodes. The state is accumulated as it flows through the graph.

```mermaid
sequenceDiagram
    actor User
    participant Main as main.py
    participant Graph as agent.graph.py (LangGraph)
    participant Normalize as agent.normalize.py

    User->>Main: Provide gene_symbol, disease_id, sources
    Main->>Graph: dispatch CollectorRequest
    
    activate Graph
    Graph->>Graph: validate_input node
    Graph->>Graph: collect_depmap node
    Graph->>Graph: collect_pharos node
    Graph->>Graph: collect_opentargets node
    Graph->>Graph: collect_literature node
    Graph->>Normalize: merge node runs dedupe & normalize
    Normalize-->>Graph: Unified Evidence Record
    deactivate Graph
    
    Graph-->>Main: Return CollectorResult JSON
    Main-->>User: Prints Result
```

---

## 3. MCP Server Execution Flow

When acting as an MCP server, the flow changes. LLMs can either call an individual tool (e.g., `collect_depmap_evidence`) or they can call the `collect_evidence_bundle` tool which runs everything natively in parallel via `asyncio.gather`.

```mermaid
sequenceDiagram
    actor LLM Client
    participant Server as mcp_server/server.py
    participant Service as agent.collector_service.py
    participant Connectors as mcp_server/connectors/
    participant Normalize as agent.normalize.py

    LLM Client->>Server: call_tool("collect_evidence_bundle", args)
    
    Server->>Service: collect_evidence_bundle(request)
    activate Service
    
    par Concurrent collection tasks
        Service->>Connectors: DepMap.collect()
        Service->>Connectors: PHAROS.collect()
        Service->>Connectors: OpenTargets.collect()
        Service->>Connectors: Literature.collect()
    end
    Connectors-->>Service: Return Items, Status, Errors
    
    Service->>Normalize: dedupe_evidence(items)
    Service->>Normalize: normalize_evidence(items)
    Normalize-->>Service: Machine-readable bundles
    
    Service-->>Server: Return CollectorResult
    deactivate Service
    
    Server-->>LLM Client: Return TextContent(JSON)
```

## Details on Data Structures (`agent/schema.py`)

Regardless of the execution path, the standard inputs and outputs remain the same:
* **Input**: `CollectorRequest` which must contain a `gene_symbol` (e.g., "EGFR"), and optionally `disease_id` and specific `sources`.
* **Output**: `CollectorResult` aggregating individual `EvidenceRecord`s, execution state, and deterministic run metrics.
