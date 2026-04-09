import os
import asyncio
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

async def main():
    keys = [
        "AIzaSyDHQMPO-KdbOA6DQwkMa9AP5Wl6b45e_ZU", # GEMINI_API_KEY from deploy/.env
        "AIzaSyDRCt-7aAGqXUddqgXF_jbktLkL8UICcPY"  # GOOGLE_API_KEY from deploy/.env
    ]
    
    for api_key in keys:
        print(f"\nListing models for KEY: {api_key[:10]}...")
        try:
            genai.configure(api_key=api_key)
            models = genai.list_models()
            for model in models:
                print(f"  {model.name} (Methods: {model.supported_generation_methods})")
        except Exception as e:
            print(f"  Error: {e}")

if __name__ == "__main__":
    asyncio.run(main())
