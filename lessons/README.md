# Lessons Overview

This directory will contain step-by-step guides and code samples for each week of your AI/ML integration journey.

---

## Week 1: Foundations & API Integration

**Objectives:**
- Understand project structure (frontend, backend, Docker)
- Set up Python virtual environments and install dependencies
- Learn about environment variables and API key management
- Make your first call to a real AI API (OpenAI, Anthropic, or Gemini)
- Connect the React frontend to trigger the backend AI call and display the result

**Tasks:**
1. Explore the codebase and understand the entry points (`main.py`, `App.tsx`)
2. Register for an OpenAI (or Anthropic/Gemini) API key
3. Store your API key securely using environment variables (`.env` file)
4. Update `/api/ai` endpoint in `main.py` to call the real AI API
5. Update the frontend to display the real AI response
6. Test the full flow: frontend → backend → AI API → frontend
7. Document your learning and any issues in this folder

**Recommended Learning:**
- Basics of REST APIs
- How to use `requests` or `httpx` in Python
- How to use `axios` in React
- How to use `.env` files and `python-dotenv`

---

## Week 2: Retrieval-Augmented Generation (RAG)

**Objectives:**
- Understand the concept and value of RAG
- Learn about vector databases (ChromaDB, Faiss)
- Implement a basic RAG pipeline using LangChain or LlamaIndex
- Store and retrieve document embeddings
- Connect RAG pipeline to your AI API

**Tasks:**
1. Read about RAG and vector search
2. Set up ChromaDB or Faiss in your backend
3. Use LangChain/LlamaIndex to create and store embeddings for sample documents
4. Update `/api/rag` endpoint to retrieve relevant context and pass it to the LLM
5. Test RAG via the frontend
6. Document your learning and experiments

**Recommended Learning:**
- What is RAG? ([RAG paper](https://arxiv.org/abs/2005.11401))
- How vector search works
- Basics of LangChain or LlamaIndex
- How to chunk and embed documents

---

## Week 3: Document Parsing & NLP Workflows

**Objectives:**
- Parse and preprocess documents (PDF, DOCX, TXT)
- Use document loaders from LangChain/LlamaIndex
- Clean, chunk, and embed documents for RAG
- Feed parsed data into your RAG pipeline

**Tasks:**
1. Learn to parse PDFs with `pypdf` and DOCX with `docx2txt`
2. Use LangChain/LlamaIndex document loaders for various formats
3. Preprocess and chunk documents for better retrieval
4. Update `/api/parse-doc` to accept and process file uploads
5. Store processed documents in your vector database
6. Test document upload and retrieval via the frontend
7. Document your workflow and findings

**Recommended Learning:**
- Basics of NLP preprocessing (tokenization, chunking)
- How to handle file uploads in FastAPI
- How to use document loaders in LangChain/LlamaIndex

---

## Week 4: Open-Source LLMs & Deployment

**Objectives:**
- Run open-source LLMs locally (vLLM, Ollama, llama.cpp)
- Switch backend to use local LLMs instead of cloud APIs
- Dockerize backend, frontend, and LLMs for local deployment
- Test and benchmark your full stack

**Tasks:**
1. Install and run an open-source LLM (Ollama, llama.cpp, or vLLM)
2. Update `/api/llm` endpoint to use the local LLM
3. Compare results between cloud and local LLMs
4. Write Dockerfiles for backend and frontend (already scaffolded)
5. Use `docker-compose` to run the full stack
6. Test everything end-to-end
7. Document your deployment process and lessons learned

**Recommended Learning:**
- How to run LLMs locally (Ollama, llama.cpp, vLLM)
- Docker basics and docker-compose
- How to expose and consume REST APIs from containers
- Benchmarking and evaluating LLM responses

---

## Week 5: Agentic AI (Agents, Tools, and Memory)

**Objectives:**
- Learn about agentic AI (multi-step reasoning, tool use, memory, planning)
- Implement an agent using LangChain Agents or similar frameworks
- Integrate tools (search, calculator, code execution, etc.)
- Add memory to your agent (conversation history, context retention)
- Expose agent endpoints in the backend and connect to frontend

**Tasks:**
1. Study agentic AI concepts and frameworks (LangChain Agents, CrewAI, AutoGen, etc.)
2. Implement a simple agent in Python that can use tools and maintain memory
3. Add endpoints for agent interaction in FastAPI
4. Build a frontend UI for agent chat/interactions
5. Test agent with multi-step tasks and tool use
6. Document your agent design and experiments

**Recommended Learning:**
- LangChain Agents documentation
- Tool integration patterns
- Memory management in conversational AI
- Prompt engineering for agents

---

## Week 6: MVC Architecture & Advanced Frontend Patterns

**Objectives:**
- Understand and implement MVC (Model-View-Controller) in both backend and frontend
- Refactor backend endpoints and logic into MVC structure
- Apply MVC and atomic design in React (model: state/data, view: components, controller: logic/hooks)
- Learn about advanced frontend patterns (state management, hooks, context, microfrontends)

**Tasks:**
1. Refactor backend code into models, views (routes), and controllers (logic/services)
2. Organize frontend code into models (state/data), views (UI components), and controllers (hooks/logic)
3. Use React Context or Redux for state management
4. Explore microfrontend implementation (Module Federation, dynamic imports)
5. Document your architecture and design decisions

**Recommended Learning:**
- MVC pattern in web development
- React state management (Context, Redux, Zustand, etc.)
- Microfrontend architecture
- Clean code and separation of concerns

---

## Week 7: Real-World Integrations & Capstone Project

**Objectives:**
- Integrate external APIs (search, weather, code execution, etc.)
- Build a capstone project combining RAG, agentic AI, document parsing, and LLMs
- Deploy your project to the cloud (Vercel, AWS, GCP, etc.)
- Add authentication and user management
- Polish UI/UX and add documentation

**Tasks:**
1. Choose a real-world use case (e.g., document Q&A, AI assistant, workflow automation)
2. Integrate at least one external API/tool
3. Build a full-stack demo with all learned features
4. Deploy to a cloud platform
5. Add authentication (JWT, OAuth, etc.)
6. Write user and developer documentation
7. Present your project and reflect on your learning

**Recommended Learning:**
- API integration best practices
- Cloud deployment (Vercel, AWS, GCP)
- Authentication and security basics
- UI/UX best practices

---

## Bonus/Optional Topics
- Add advanced agentic features (multi-agent collaboration, planning, tool chaining)
- Build a chat UI in React with streaming responses
- Add support for more file types (images, CSV, etc.)
- Integrate more advanced NLP features (summarization, Q&A, etc.)
- Explore LLM fine-tuning and custom embeddings
- Contribute to open-source AI projects

---

Each week, add your notes, code snippets, and learning reflections here! 