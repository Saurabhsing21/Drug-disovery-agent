from __future__ import annotations

import asyncio

from langgraph.graph import END, StateGraph

from agents.mcp_runtime import collect_source_via_mcp_with_raw
from agents.summary_agent import SummaryAgent
from agents.server_manager import ExternalServerContext

from .schema import CollectorRequest, CollectorResult, SourceName
from .state import CollectorState


def _source_requested(query: CollectorRequest, source: SourceName) -> bool:
    requested = {item.value if hasattr(item, "value") else str(item) for item in query.sources}
    return source.value in requested


def create_collector_graph():
    async def validate_input_node(state: CollectorState):
        query = state.get("query")
        if query is None:
            raise ValueError("CollectorState missing 'query'")
        if isinstance(query, dict):
            query = CollectorRequest.model_validate(query)
        return {"query": query}

    async def collect_mcp_sources_node(state: CollectorState):
        query = state["query"]

        selected_sources = [
            source
            for source in [
                SourceName.DEPMAP,
                SourceName.PHAROS,
                SourceName.OPENTARGETS,
                SourceName.LITERATURE,
            ]
            if _source_requested(query, source)
        ]

        if not selected_sources:
            return {"evidence_items": [], "source_status": [], "errors": []}

        tasks = [collect_source_via_mcp_with_raw(source, query) for source in selected_sources]
        results = await asyncio.gather(*tasks)

        all_items = []
        all_status = []
        all_errors = []
        all_raw_payloads = []
        for items, status, errors, raw_payload in results:
            all_items.extend(items)
            all_status.append(status)
            all_errors.extend(errors)
            all_raw_payloads.append(raw_payload)

        return {
            "evidence_items": all_items,
            "source_status": all_status,
            "errors": all_errors,
            "raw_source_payloads": all_raw_payloads,
        }

    async def merge_node(state: CollectorState):
        query = state["query"]
        items = state.get("evidence_items", [])
        summary_agent = SummaryAgent(model=query.model_override)
        llm_summary = await summary_agent.run(
            request=query,
            items=items,
            source_status=state.get("source_status", []),
            raw_source_payloads=state.get("raw_source_payloads", []),
        )
        result = CollectorResult(
            run_id=query.run_id,
            query=query,
            items=items,
            source_status=state.get("source_status", []),
            errors=state.get("errors", []),
            llm_summary=llm_summary,
        )
        return {"final_result": result}

    graph_builder = StateGraph(CollectorState)
    graph_builder.add_node("validate_input", validate_input_node)
    graph_builder.add_node("collect_mcp_sources", collect_mcp_sources_node)
    graph_builder.add_node("merge", merge_node)

    graph_builder.set_entry_point("validate_input")
    graph_builder.add_edge("validate_input", "collect_mcp_sources")
    graph_builder.add_edge("collect_mcp_sources", "merge")
    graph_builder.add_edge("merge", END)

    return graph_builder.compile()


# Backward-compatible alias.
def create_agent_graph(*_args, **_kwargs):
    return create_collector_graph()


async def run_collection_graph(
    request: CollectorRequest,
    connectors=None,
) -> CollectorResult:
    _ = connectors  # kept for backward compatibility in callers.
    app = create_collector_graph()
    
    async with ExternalServerContext(sources=request.sources):
        result_state = await app.ainvoke({"query": request})
        
    return result_state["final_result"]
