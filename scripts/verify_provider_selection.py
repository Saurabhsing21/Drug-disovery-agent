import asyncio
import os
import unittest
from unittest.mock import patch
from agents.provider_select import select_provider_once, reset_provider_selection

class TestProviderSelection(unittest.TestCase):
    def setUp(self):
        reset_provider_selection()
        if "A4T_LLM_PROVIDER" in os.environ:
            del os.environ["A4T_LLM_PROVIDER"]
        if "A4T_LLM_CALLS_ENABLED" in os.environ:
            del os.environ["A4T_LLM_CALLS_ENABLED"]

    @patch("agents.provider_select._probe_openai")
    def test_openai_working_selects_openai(self, mock_openai):
        mock_openai.return_value = (True, None)
        
        loop = asyncio.get_event_loop()
        selection = loop.run_until_complete(select_provider_once())
        
        self.assertEqual(selection.provider, "openai")
        self.assertEqual(os.environ["A4T_LLM_PROVIDER"], "openai")
        self.assertEqual(os.environ["A4T_LLM_CALLS_ENABLED"], "1")

    @patch("agents.provider_select._probe_openai")
    def test_openai_probe_failure_disables_llm(self, mock_openai):
        mock_openai.return_value = (False, "Error")
        
        loop = asyncio.get_event_loop()
        selection = loop.run_until_complete(select_provider_once())
        
        self.assertEqual(selection.provider, "none")
        self.assertEqual(os.environ["A4T_LLM_CALLS_ENABLED"], "0")

if __name__ == "__main__":
    unittest.main()
