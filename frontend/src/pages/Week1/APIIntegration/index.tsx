import React from 'react';
import './APIIntegration.scss';

const APIIntegration: React.FC = () => {
  return (
    <div className="api-integration-container">
      <h2>🔌 API Integration Guide</h2>
      
      <div className="api-integration-section">
        <h3>🎯 What We Built</h3>
        <p>
          In Week 1, we created a complete AI integration system with:
        </p>
        <ul className="api-integration-list">
          <li><strong>FastAPI Backend:</strong> RESTful API server with AI endpoints</li>
          <li><strong>React Frontend:</strong> User interface for interacting with AI</li>
          <li><strong>Ollama Integration:</strong> Local LLM for free, private AI</li>
          <li><strong>Environment Security:</strong> Secure API key management</li>
        </ul>
      </div>

      <div className="api-integration-section">
        <h3>🏗️ Architecture Overview</h3>
        <div className="api-integration-architecture">
          <div className="api-integration-arch-item">
            <h4>Frontend (React)</h4>
            <p>User Interface → HTTP Request → Backend</p>
          </div>
          <div className="api-integration-arch-item">
            <h4>Backend (FastAPI)</h4>
            <p>Receive Request → Process → Call AI API → Return Response</p>
          </div>
          <div className="api-integration-arch-item">
            <h4>AI Provider (Ollama/OpenAI)</h4>
            <p>Generate AI Response → Return to Backend</p>
          </div>
        </div>
      </div>

      <div className="api-integration-section">
        <h3>📝 Backend Code Examples</h3>
        
        <div className="api-integration-code-example">
          <h4>1. Basic FastAPI Setup</h4>
          <pre className="api-integration-code">
{`from fastapi import FastAPI
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str`}
          </pre>
        </div>

        <div className="api-integration-code-example">
          <h4>2. OpenAI Integration</h4>
          <pre className="api-integration-code">
{`from openai import OpenAI

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
        return {"error": str(e)}`}
          </pre>
        </div>

        <div className="api-integration-code-example">
          <h4>3. Ollama Integration</h4>
          <pre className="api-integration-code">
{`import requests

@app.post("/ask-ollama/")
async def ask_ollama(request: PromptRequest):
    try:
        response = requests.post(
            "http://localhost:11434/api/chat",
            json={
                "model": "llama3",
                "messages": [{"role": "user", "content": request.prompt}],
                "stream": False
            }
        )
        data = response.json()
        return {"response": data["message"]["content"]}
    except Exception as e:
        return {"error": str(e)}`}
          </pre>
        </div>
      </div>

      <div className="api-integration-section">
        <h3>⚛️ Frontend Code Examples</h3>
        
        <div className="api-integration-code-example">
          <h4>1. React Hook for API Calls</h4>
          <pre className="api-integration-code">
{`const [prompt, setPrompt] = useState("");
const [response, setResponse] = useState("");
const [isLoading, setIsLoading] = useState(false);

const handleAsk = async () => {
  setIsLoading(true);
  try {
    const res = await fetch("http://localhost:8000/ask-ollama/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.response);
  } catch (error) {
    setResponse(\`Error: \${error}\`);
  } finally {
    setIsLoading(false);
  }
};`}
          </pre>
        </div>
      </div>

      <div className="api-integration-section">
        <h3>🔐 Security Best Practices</h3>
        <ul className="api-integration-list">
          <li><strong>Environment Variables:</strong> Never hardcode API keys</li>
          <li><strong>.env Files:</strong> Keep secrets out of version control</li>
          <li><strong>CORS Configuration:</strong> Control which domains can access your API</li>
          <li><strong>Error Handling:</strong> Don't expose sensitive information in errors</li>
          <li><strong>Input Validation:</strong> Validate all user inputs</li>
        </ul>
      </div>

      <div className="api-integration-section">
        <h3>🚀 Next Steps</h3>
        <div className="api-integration-next-steps">
          <div className="api-integration-step">
            <h4>Week 2: RAG (Retrieval-Augmented Generation)</h4>
            <p>Add vector databases and document retrieval to your AI system</p>
          </div>
          <div className="api-integration-step">
            <h4>Week 3: Document Processing</h4>
            <p>Parse PDFs, DOCX files, and integrate with your RAG pipeline</p>
          </div>
          <div className="api-integration-step">
            <h4>Week 4: Deployment</h4>
            <p>Dockerize your application and deploy it to production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntegration; 