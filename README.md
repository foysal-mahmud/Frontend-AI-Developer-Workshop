# AI Integration Playground

Welcome! This project is designed for frontend developers looking to dive into practical AI/ML integration, focusing on real-world applications and hands-on learning.

## 🚀 Project Overview

| Component | Technology Stack |
|-----------|-----------------|
| **Backend** | Python (FastAPI), LangChain/LlamaIndex, document parsing, RAG, LLM deployment (vLLM/Ollama), OpenAI/Anthropic API integration |
| **Frontend** | React app with atomic design pattern for interacting with AI features |
| **Deployment** | Docker & Docker Compose for local and scalable deployment |

---

## 📚 7-Week Learning Plan

| Week | Topic | Key Learning Objectives | Status |
|------|-------|------------------------|--------|
| **Week 1** | Foundations & API Integration | Set up Python backend, integrate AI APIs, build React frontend, Ollama chat | 🟢 Available |
| **Week 2** | Retrieval-Augmented Generation (RAG) | Learn RAG concepts, implement vector database, LangChain/LlamaIndex | ⚪ Coming Soon |
| **Week 3** | Document Parsing & NLP Workflows | Parse PDFs/DOCX, preprocessing, chunking documents | ⚪ Coming Soon |
| **Week 4** | Open-Source LLMs & Deployment | Run local LLMs, Dockerize full stack, deployment | ⚪ Coming Soon |
| **Week 5** | Agentic AI (Agents, Tools, and Memory) | Multi-step reasoning, tool use, memory, planning | ⚪ Coming Soon |
| **Week 6** | MVC Architecture & Advanced Frontend Patterns | MVC implementation, atomic design, microfrontends | ⚪ Coming Soon |
| **Week 7** | Real-World Integrations & Capstone Project | External APIs, authentication, cloud deployment | ⚪ Coming Soon |

### 📋 Weekly Breakdown

<details>
<summary><strong>Week 1: Foundations & API Integration</strong></summary>

- Set up Python backend (FastAPI)
- Integrate OpenAI/Anthropic/Gemini APIs
- Build a simple React frontend to call backend endpoints
- Local Ollama chat integration
- Environment variable management

[📖 Detailed Guide](./lessons/week1-foundations.md) | [🚀 Try It Now](http://localhost:3000/week-1)
</details>

<details>
<summary><strong>Week 2: Retrieval-Augmented Generation (RAG)</strong></summary>

- Learn RAG concepts and vector databases
- Implement basic RAG pipeline using LangChain or LlamaIndex
- Connect vector database (ChromaDB/Faiss)
- Query and retrieve relevant context for LLMs

[📖 Detailed Guide](./lessons/week2-rag.md)
</details>

<details>
<summary><strong>Week 3: Document Parsing & NLP Workflows</strong></summary>

- Parse PDFs, DOCX, and text files in Python
- Use LangChain/LlamaIndex document loaders
- Preprocessing and chunking documents
- Feed parsed data into RAG pipeline

[📖 Detailed Guide](./lessons/week3-document-parsing.md)
</details>

<details>
<summary><strong>Week 4: Open-Source LLMs & Deployment</strong></summary>

- Run open-source LLMs locally (vLLM/Ollama)
- Switch backend to use local LLMs
- Dockerize backend, frontend, and LLMs
- Deploy and test the full stack locally

[📖 Detailed Guide](./lessons/week4-deployment.md)
</details>

<details>
<summary><strong>Week 5: Agentic AI (Agents, Tools, and Memory)</strong></summary>

- Learn about agentic AI (multi-step reasoning, tool use, memory, planning)
- Implement an agent using LangChain Agents or similar frameworks
- Integrate tools, add memory, and build a frontend UI for agent chat/interactions

[📖 Detailed Guide](./lessons/week5-agentic-ai.md)
</details>

<details>
<summary><strong>Week 6: MVC Architecture & Advanced Frontend Patterns</strong></summary>

- Understand and implement MVC (Model-View-Controller) in both backend and frontend
- Refactor backend endpoints and logic into MVC structure
- Apply MVC and atomic design in React
- Explore microfrontends and advanced state management

[📖 Detailed Guide](./lessons/week6-mvc-architecture.md)
</details>

<details>
<summary><strong>Week 7: Real-World Integrations & Capstone Project</strong></summary>

- Integrate external APIs
- Build a capstone project combining RAG, agentic AI, document parsing, and LLMs
- Deploy to the cloud, add authentication, polish UI/UX
- Document your work and contribute to open source

[📖 Detailed Guide](./lessons/week7-capstone.md)
</details>

---

## 🛠️ Getting Started

### Prerequisites

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Python | 3.8+ | [Download Python](https://www.python.org/downloads/) |
| Node.js | 16+ | [Download Node.js](https://nodejs.org/) |
| Docker | Latest | [Download Docker](https://www.docker.com/products/docker-desktop/) |
| Ollama | Latest | [Download Ollama](https://ollama.com/) |

### Quick Setup

| Step | Command | Description |
|------|---------|-------------|
| **1. Clone** | `git clone <your-repo-url>` | Clone the repository |
| **2. Backend** | `cd backend && python3 -m venv venv` | Create virtual environment |
| **3. Install** | `source venv/bin/activate && pip install -r requirements.txt` | Install dependencies |
| **4. Run Backend** | `uvicorn main:app --reload` | Start backend server |
| **5. Frontend** | `cd frontend && npm install && npm start` | Start React app |
| **6. Docker** | `docker-compose up --build` | Run with Docker |

### 🚀 Quick Start Commands

```bash
# Backend setup
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
pip install python-multipart
uvicorn main:app --reload

# Frontend setup
cd frontend
npm install
npm start

# Docker setup
docker-compose up --build
```

### 🌐 Access Points

| Service | URL | Description |
|---------|-----|-------------|
| Backend API | http://localhost:8000 | FastAPI backend server |
| Frontend App | http://localhost:3000 | React frontend application |
| Week 1 Demo | http://localhost:3000/week-1 | Interactive Week 1 lessons |
| API Docs | http://localhost:8000/docs | Interactive API documentation |

---

## 📁 Project Structure

```
AI frontend/
├── backend/                 # Python FastAPI backend
│   ├── main.py             # Main application entry point
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment
├── frontend/               # React frontend application
│   ├── src/               # Source code
│   │   ├── atoms/         # Atomic components (Button, etc.)
│   │   ├── molecules/     # Molecular components (LessonCard, etc.)
│   │   ├── organisms/     # Organism components (Footer, LessonsSection, etc.)
│   │   └── pages/         # Page components (Week1 with sub-pages)
│   │       └── Week1/     # Week 1 lessons
│   │           ├── APIIntegration/    # API integration demo
│   │           ├── OllamaChat/        # Local Ollama chat
│   │           ├── SetupGuide/        # Setup instructions
│   │           └── Week1/             # Week 1 overview
│   ├── package.json       # Node.js dependencies
│   └── Dockerfile         # Frontend Docker configuration
├── lessons/               # Learning materials and guides
├── docker-compose.yml     # Docker orchestration
└── README.md             # This file
```

---

## 📖 Lessons & Documentation

| Resource | Description | Link |
|----------|-------------|------|
| **Week 1 Guide** | Foundations & API Integration | [📖 Week 1](./lessons/week1-foundations.md) |
| **Week 2 Guide** | RAG Implementation | [📖 Week 2](./lessons/week2-rag.md) |
| **Week 3 Guide** | Document Parsing | [📖 Week 3](./lessons/week3-document-parsing.md) |
| **Week 4 Guide** | Deployment & Local LLMs | [📖 Week 4](./lessons/week4-deployment.md) |
| **Week 5 Guide** | Agentic AI | [📖 Week 5](./lessons/week5-agentic-ai.md) |
| **Week 6 Guide** | MVC Architecture | [📖 Week 6](./lessons/week6-mvc-architecture.md) |
| **Week 7 Guide** | Capstone Project | [📖 Week 7](./lessons/week7-capstone.md) |
| **API Reference** | Backend API documentation | [📖 API Docs](./lessons/api-reference.md) |
| **Troubleshooting** | Common issues and solutions | [📖 Troubleshooting](./lessons/troubleshooting.md) |

---

## 🔗 Resources & References

| Category | Resource | Description |
|----------|----------|-------------|
| **Frameworks** | [LangChain](https://python.langchain.com/) | LLM application framework |
| **Frameworks** | [LlamaIndex](https://www.llamaindex.ai/) | Data framework for LLMs |
| **APIs** | [OpenAI API](https://platform.openai.com/docs/) | OpenAI API documentation |
| **Local LLMs** | [Ollama](https://ollama.com/) | Local LLM deployment |
| **Local LLMs** | [vLLM](https://vllm.ai/) | High-performance LLM serving |
| **Vector DBs** | [ChromaDB](https://www.trychroma.com/) | Vector database |
| **Vector DBs** | [Faiss](https://github.com/facebookresearch/faiss) | Facebook AI Similarity Search |
| **Design Patterns** | [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) | Component design methodology |

---

## 🎯 Learning Objectives

| Skill Level | What You'll Learn |
|-------------|-------------------|
| **Beginner** | REST APIs, environment variables, basic AI integration, React fundamentals |
| **Intermediate** | RAG systems, vector databases, document processing, atomic design |
| **Advanced** | Local LLM deployment, Docker orchestration, agentic AI, MVC architecture |

---

## 🚀 Current Features

| Feature | Status | Description |
|---------|--------|-------------|
| **Week 1 Lessons** | ✅ Available | Complete Week 1 with interactive demos |
| **Ollama Chat** | ✅ Available | Local LLM chat interface |
| **API Integration** | ✅ Available | OpenAI/Anthropic API integration demo |
| **Setup Guide** | ✅ Available | Step-by-step setup instructions |
| **Atomic Design** | ✅ Available | React components using atomic design pattern |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy learning! 🚀

*Ready to start your AI/ML integration journey? Begin with [Week 1: Foundations](./lessons/week1-foundations.md) or [try the interactive demo](http://localhost:3000/week-1)* 