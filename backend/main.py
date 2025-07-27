from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv
from openai import OpenAI
import requests

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def root():
    return {"message": "AI/ML Backend is running!"}

@app.post("/api/ai")
def ai_api():
    # Placeholder for OpenAI/Anthropic API integration
    return {"result": "AI API integration coming soon"}

@app.post("/api/rag")
def rag_api():
    # Placeholder for RAG pipeline
    return {"result": "RAG integration coming soon"}

@app.post("/api/parse-doc")
def parse_doc(file: UploadFile = File(...)):
    # Placeholder for document parsing
    return {"result": f"Received file: {file.filename}"}

@app.post("/api/llm")
def llm_api():
    # Placeholder for local LLM (vLLM/Ollama)
    return {"result": "Local LLM integration coming soon"}

client = OpenAI()

@app.post("/ask-openai/")
async def ask_openai(request: PromptRequest):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": request.prompt}]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        return {"error": str(e)}

@app.post("/ask-ollama/")
async def ask_ollama(request: PromptRequest):
    try:
        response = requests.post(
            "http://localhost:11434/api/chat",
            json={
                "model": "llama3",
                "messages": [{"role": "user", "content": request.prompt}],
                "stream": False  # Disable streaming to get a single JSON response
            }
        )
        
        # Check if the request was successful
        if response.status_code != 200:
            return {"error": f"Ollama API error: {response.status_code} - {response.text}"}
        
        # Print the raw response for debugging
        print(f"Raw response: {response.text}")
        
        data = response.json()
        return {"response": data["message"]["content"]}
    except requests.exceptions.RequestException as e:
        return {"error": f"Request error: {str(e)}"}
    except ValueError as e:
        return {"error": f"JSON parsing error: {str(e)}. Response: {response.text}"}
    except Exception as e:
        return {"error": f"Unexpected error: {str(e)}"} 