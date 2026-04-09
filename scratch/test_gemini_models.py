import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-2.0-flash-exp", "gemini-flash-latest"]
key = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")

for model in models:
    print(f"Testing {model}...")
    try:
        llm = ChatGoogleGenerativeAI(model=model, google_api_key=key)
        res = llm.invoke("Hi")
        print(f"  Result: {res.content[:20]}...")
    except Exception as e:
        print(f"  Error: {e}")
