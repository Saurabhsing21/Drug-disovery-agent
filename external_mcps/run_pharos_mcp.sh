#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/apple/Projects/Agent4agent/external_mcps/pharos-mcp-server"
cd "$ROOT"
export HOME="$ROOT"

exec npx wrangler dev --ip 127.0.0.1 --port 8787 "$@"
