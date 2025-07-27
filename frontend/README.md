# AI/ML Integration Learning Project

Welcome! This project is designed for frontend developers looking to dive into practical AI/ML integration, focusing on real-world applications and hands-on learning.

## Project Overview
- **Backend:** Python (FastAPI), LangChain/LlamaIndex, document parsing, RAG, LLM deployment (vLLM/Ollama), OpenAI/Anthropic API integration
- **Frontend:** React app for interacting with AI features
- **Deployment:** Docker & Docker Compose for local and scalable deployment

---

## 4-Week Learning Plan

### **Week 1: Foundations & API Integration**
- Set up Python backend (FastAPI)
- Integrate OpenAI/Anthropic/Gemini APIs
- Build a simple React frontend to call backend endpoints
- Lesson: Making your first AI API call

### **Week 2: Retrieval-Augmented Generation (RAG)**
- Learn RAG concepts
- Implement basic RAG pipeline using LangChain or LlamaIndex
- Lesson: Connect a vector database (ChromaDB/Faiss)
- Lesson: Query and retrieve relevant context for LLMs

### **Week 3: Document Parsing & NLP Workflows**
- Parse PDFs, DOCX and text files in Python
- Feed parsed data into RAG pipeline
- Lesson: Use LangChain/LlamaIndex document loaders
- Lesson: Preprocessing and chunking documents

### **Week 4: Open-Source LLMs & Deployment**
- Run open-source LLMs locally (vLLM/Ollama)
- Switch backend to use local LLMs
- Dockerize backend, frontend and LLMs
- Lesson: Deploy and test the full stack locally

---

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. **Backend setup:**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   pip install python-multipart
   uvicorn main:app --reload
   # or if 'uvicorn' is not found:
   python3 -m uvicorn main:app --reload
   ```
   - Visit http://localhost:8000 to check backend status.
3. **Frontend setup:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   - Visit http://localhost:3000 to use the React app.
4. **Dockerized setup:**
   ```bash
   docker-compose up --build
   ```

---

## Lessons & Customization
- Each week’s folder will contain code samples and explanations.
- Customize endpoints, document loaders and LLM providers as you progress.
- See the `/lessons` directory for step-by-step guides (to be created).

---

## Resources
- [LangChain](https://python.langchain.com/)
- [LlamaIndex](https://www.llamaindex.ai/)
- [OpenAI API](https://platform.openai.com/docs/)
- [Ollama](https://ollama.com/)
- [vLLM](https://vllm.ai/)

Happy learning! 🚀 