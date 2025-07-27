# Week 1: Foundations & API Integration

Welcome to Week 1 of the AI Integration Playground! This week focuses on setting up the foundational infrastructure and making your first AI API calls.

## 🎯 Learning Objectives

By the end of this week, you will be able to:

- ✅ Understand the project structure (frontend, backend, Docker)
- ✅ Set up Python virtual environments and install dependencies
- ✅ Learn about environment variables and API key management
- ✅ Make your first call to a real AI API (OpenAI, Anthropic, or Gemini)
- ✅ Connect the React frontend to trigger backend AI calls
- ✅ Use local Ollama for chat interactions
- ✅ Display real AI responses in the frontend

## 🛠️ What You'll Build

| Component | Description | Status |
|-----------|-------------|--------|
| **FastAPI Backend** | Python server with AI endpoints | ✅ Complete |
| **React Frontend** | Interactive UI with atomic design | ✅ Complete |
| **API Integration** | OpenAI/Anthropic API connections | ✅ Complete |
| **Ollama Chat** | Local LLM chat interface | ✅ Complete |
| **Setup Guide** | Step-by-step instructions | ✅ Complete |

## 📋 Prerequisites

| Requirement | Version | Installation Link |
|-------------|---------|-------------------|
| Python | 3.8+ | [Download Python](https://www.python.org/downloads/) |
| Node.js | 16+ | [Download Node.js](https://nodejs.org/) |
| Ollama | Latest | [Download Ollama](https://ollama.com/) |

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
pip install python-multipart

# Start the server
uvicorn main:app --reload
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

### 3. Access the Application

| Service | URL | Description |
|---------|-----|-------------|
| Frontend App | http://localhost:3000 | Main application |
| Week 1 Demo | http://localhost:3000/week-1 | Interactive lessons |
| Backend API | http://localhost:8000 | FastAPI server |
| API Docs | http://localhost:8000/docs | Interactive documentation |

## 📚 Week 1 Lessons

### Lesson 1: Project Overview
**Location:** http://localhost:3000/week-1

Learn about the project structure and what you'll be building throughout the 7-week journey.

**Key Concepts:**
- Project architecture (frontend/backend separation)
- Atomic design pattern in React
- Learning objectives for each week

### Lesson 2: Setup Guide
**Location:** http://localhost:3000/week-1/setup

Step-by-step instructions for setting up your development environment.

**What You'll Learn:**
- Environment setup (Python, Node.js, Ollama)
- Virtual environment management
- Dependency installation
- Troubleshooting common issues

### Lesson 3: API Integration
**Location:** http://localhost:3000/week-1/api-integration

Learn how to integrate external AI APIs and make your first AI calls.

**What You'll Learn:**
- REST API fundamentals
- Environment variable management
- API key security
- Frontend-backend communication
- Error handling

### Lesson 4: Ollama Chat
**Location:** http://localhost:3000/week-1/chat

Experience local LLM interactions with Ollama.

**What You'll Learn:**
- Local LLM setup and configuration
- Chat interface implementation
- Real-time communication
- Local vs cloud AI models

## 🔧 Technical Implementation

### Backend Structure

```python
# main.py - Main FastAPI application
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Integration Playground")

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# AI endpoints
@app.post("/api/ai")
async def ai_endpoint(request: dict):
    # AI API integration logic
    pass

@app.post("/api/ollama")
async def ollama_endpoint(request: dict):
    # Local Ollama integration
    pass
```

### Frontend Structure

```
frontend/src/
├── atoms/           # Atomic components (Button, etc.)
├── molecules/       # Molecular components (LessonCard, etc.)
├── organisms/       # Organism components (Footer, LessonsSection, etc.)
└── pages/          # Page components
    └── Week1/      # Week 1 lessons
        ├── APIIntegration/
        ├── OllamaChat/
        ├── SetupGuide/
        └── Week1/
```

### Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `OverviewSection` | Project introduction | `organisms/OverviewSection/` |
| `LessonsSection` | Lesson navigation | `organisms/LessonsSection/` |
| `LessonCard` | Individual lesson display | `molecules/LessonCard/` |
| `Button` | Reusable button component | `atoms/Button/` |

## 🔑 Environment Variables

Create a `.env` file in the backend directory:

```bash
# .env
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
OLLAMA_BASE_URL=http://localhost:11434
```

## 🧪 Testing Your Setup

### 1. Test Backend
```bash
# Check if backend is running
curl http://localhost:8000/health

# Test API documentation
open http://localhost:8000/docs
```

### 2. Test Frontend
```bash
# Check if frontend is running
open http://localhost:3000

# Navigate to Week 1
open http://localhost:3000/week-1
```

### 3. Test Ollama
```bash
# Install a model
ollama pull llama2

# Test the model
ollama run llama2 "Hello, world!"
```

## 📖 Key Concepts Explained

### REST APIs
REST (Representational State Transfer) is an architectural style for designing networked applications. In this project, we use REST APIs to communicate between the frontend and backend.

**Example:**
```javascript
// Frontend making a request to backend
const response = await fetch('http://localhost:8000/api/ai', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Hello AI!' })
});
```

### Environment Variables
Environment variables store configuration data outside of your code, making it more secure and flexible.

**Example:**
```python
# Backend using environment variables
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
```

### Atomic Design
Atomic design is a methodology for creating design systems with five distinct levels: atoms, molecules, organisms, templates, and pages.

**In this project:**
- **Atoms:** Basic components like buttons, inputs
- **Molecules:** Combinations of atoms like forms, cards
- **Organisms:** Complex UI sections like headers, navigation
- **Pages:** Complete page layouts

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Port already in use** | Change ports or kill existing processes |
| **Module not found** | Check virtual environment activation |
| **CORS errors** | Verify backend CORS configuration |
| **Ollama not responding** | Check if Ollama service is running |

### Debug Commands

```bash
# Check Python version
python3 --version

# Check Node.js version
node --version

# Check if ports are in use
lsof -i :3000  # Frontend
lsof -i :8000  # Backend
lsof -i :11434 # Ollama

# Check Ollama status
ollama list
```

## 📝 Next Steps

After completing Week 1, you'll be ready for:

- **Week 2:** Retrieval-Augmented Generation (RAG)
- **Week 3:** Document Parsing & NLP Workflows
- **Week 4:** Open-Source LLMs & Deployment

## 🔗 Additional Resources

| Resource | Description | Link |
|----------|-------------|------|
| **FastAPI Docs** | FastAPI official documentation | [FastAPI](https://fastapi.tiangolo.com/) |
| **React Docs** | React official documentation | [React](https://react.dev/) |
| **Ollama Docs** | Ollama official documentation | [Ollama](https://ollama.com/docs) |
| **Atomic Design** | Atomic design methodology | [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) |

---

**🎉 Congratulations!** You've completed Week 1. You now have a working AI integration playground with both cloud and local AI capabilities. Ready for Week 2? Let's dive into RAG systems! 