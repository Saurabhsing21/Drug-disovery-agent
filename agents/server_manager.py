from __future__ import annotations

import asyncio
import os
import subprocess
import time
from typing import Any

from .schema import SourceName


class ExternalServerContext:
    """Manages the lifecycle of external MCP background processes during execution."""

    def __init__(self, sources: list[SourceName]) -> None:
        self.sources = sources
        self._pharos_proc: subprocess.Popen[Any] | None = None

    async def __aenter__(self) -> "ExternalServerContext":
        if SourceName.PHAROS in self.sources:
            await self._start_pharos()
        return self

    async def __aexit__(self, exc_type: Any, exc_val: Any, exc_tb: Any) -> None:
        if self._pharos_proc:
            self._stop_pharos()

    async def _is_port_in_use(self, port: int) -> bool:
        # Simple check using netstat or lsof, here we just blindly try to connect
        try:
            reader, writer = await asyncio.open_connection("127.0.0.1", port)
            writer.close()
            await writer.wait_closed()
            return True
        except OSError:
            return False

    async def _start_pharos(self) -> None:
        # Avoid starting if something is already on 8787 (like a manually started server)
        in_use = await self._is_port_in_use(8787)
        if in_use:
            print("[\033[93mExternalServerContext\033[0m] Port 8787 in use, assuming Pharos is running.")
            return

        print("[\033[94mExternalServerContext\033[0m] Spinning up Pharos background server (wrangler dev)...")
        script_path = os.path.abspath(os.path.join(
            os.path.dirname(__file__), "..", "external_mcps", "run_pharos_mcp.sh"
        ))

        self._log_file = open("pharos_server.log", "w")
        self._pharos_proc = subprocess.Popen(
            [script_path],
            stdout=self._log_file,
            stderr=subprocess.STDOUT,
            preexec_fn=os.setsid,  # Run in distinct process group
        )

        # Poll the health endpoint until it responds
        import urllib.request
        from urllib.error import URLError

        start = time.time()
        ready = False
        while time.time() - start < 30:  # 30s timeout
            try:
                # The SSE path itself will 400 or 404 without correct headers, but we just want to know it connects
                response = urllib.request.urlopen("http://127.0.0.1:8787/")
                ready = True
                break
            except URLError as e:
                # If it's an HTTPError (e.g. 404), the server is alive
                if hasattr(e, 'code'):
                    ready = True
                    break
                # If it's a connection refused, sleep and retry
                time.sleep(0.5)

        if ready:
            print("[\033[92mExternalServerContext\033[0m] Pharos server is ready.")
        else:
            print("[\033[91mExternalServerContext\033[0m] Pharos server failed to report ready within timeout.")

    def _stop_pharos(self) -> None:
        if self._pharos_proc:
            import signal
            print("[\033[90mExternalServerContext\033[0m] Shutting down Pharos background server...")
            try:
                os.killpg(os.getpgid(self._pharos_proc.pid), signal.SIGTERM)
            except ProcessLookupError:
                pass
            self._pharos_proc = None
            if hasattr(self, "_log_file") and self._log_file:
                self._log_file.close()
