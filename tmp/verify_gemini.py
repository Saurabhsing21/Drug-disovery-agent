import os
import asyncio
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()

async def main():
    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        print("Error: No GEMINI_API_KEY or GOOGLE_API_KEY found.")
        return

    print(f"Using API Key: {api_key[:10]}...")
    keys = [
        "AIzaSyDHQMPO-KdbOA6DQwkMa9AP5Wl6b45e_ZU", # GEMINI_API_KEY from deploy/.env
        "AIzaSyDRCt-7aAGqXUddqgXF_jbktLkL8UICcPY"  # GOOGLE_API_KEY from deploy/.env
    ]
    models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"]
    
    api_key = "AIzaSyDHQMPO-KdbOA6DQwkMa9AP5Wl6b45e_ZU"
    models = [
        "gemini-2.5-flash",
        "gemini-2.5-pro",
        "gemini-2.0-flash",
        "gemini-3-flash-preview",
        "gemini-flash-latest",
        "gemini-pro-latest",
    ]
    
    for model in models:
        print(f"Probing {model}...")
        try:
            llm = ChatGoogleGenerativeAI(
                model=model,
                temperature=0,
                google_api_key=api_key
            )
            response = await llm.ainvoke("ping")
            print(f"Success with {model}: {response.content.strip()}")
            return
        except Exception as e:
            print(f"Error with {model}: {e}")

if __name__ == "__main__":
    asyncio.run(main())
