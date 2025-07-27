import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '@/molecules/LessonCard';
import './LessonsSection.scss';

const lessons = [
  {
    title: 'Week 1: Foundations & API Integration',
    description: `Understand the project structure, set up Python environments, manage API keys, make your first AI API call (OpenAI, Anthropic, or Gemini), and connect the React frontend to display real AI results. Learn REST basics, Python/JS HTTP libraries, and environment variable management.`,
    id: 'week1',
    link: '/week-1',
  },
  {
    title: 'Week 2: Retrieval-Augmented Generation (RAG)',
    description: `Learn RAG concepts, vector databases (ChromaDB, Faiss), implement a basic RAG pipeline with LangChain/LlamaIndex, and connect RAG to your AI API. Explore document embeddings and vector search.`,
    id: 'week2',
    link: null,
  },
  {
    title: 'Week 3: Document Parsing & NLP Workflows',
    description: `Parse and preprocess documents (PDF, DOCX, TXT), use document loaders, chunk and embed documents for RAG, and handle file uploads. Learn NLP preprocessing and integrate with your vector database.`,
    id: 'week3',
    link: null,
  },
  {
    title: 'Week 4: Open-Source LLMs & Deployment',
    description: `Run open-source LLMs locally (vLLM, Ollama, llama.cpp), switch backend to use local LLMs, dockerize the stack, and benchmark results. Learn Docker basics and full-stack deployment.`,
    id: 'week4',
    link: null,
  },
  {
    title: 'Week 5: Agentic AI (Agents, Tools, and Memory)',
    description: `Learn about agentic AI (multi-step reasoning, tool use, memory, planning). Implement an agent using LangChain Agents or similar frameworks. Integrate tools, add memory, and build a frontend UI for agent chat/interactions.`,
    id: 'week5',
    link: null,
  },
  {
    title: 'Week 6: MVC Architecture & Advanced Frontend Patterns',
    description: `Understand and implement MVC (Model-View-Controller) in both backend and frontend. Refactor backend endpoints and logic into MVC structure. Apply MVC and atomic design in React. Explore microfrontends and advanced state management.`,
    id: 'week6',
    link: null,
  },
  {
    title: 'Week 7: Real-World Integrations & Capstone Project',
    description: `Integrate external APIs, build a capstone project combining RAG, agentic AI, document parsing, and LLMs. Deploy to the cloud, add authentication, polish UI/UX, and document your work.`,
    id: 'week7',
    link: null,
  },
  {
    title: 'Bonus/Optional Topics',
    description: `Multi-agent collaboration, advanced chat UI, streaming, more file types, LLM fine-tuning, open-source contributions.`,
    id: 'bonus',
    link: null,
  },
];

const cardStyle = {
  borderRadius: '32px 32px 12px 12px',
  background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
};

const LessonsSection: React.FC = () => {
  const [visible, setVisible] = useState(Array(lessons.length).fill(false));
  useEffect(() => {
    lessons.forEach((_, i) => {
      setTimeout(() => {
        setVisible((v) => v.map((val, idx) => (idx === i ? true : val)));
      }, 200 + i * 180);
    });
  }, []);
  
  return (
    <section className="cards-section">
      {lessons.map((lesson, i) => (
        <div
          key={lesson.id}
          style={{
            opacity: visible[i] ? 1 : 0,
            transform: visible[i] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
            height: '100%',
            display: 'flex',
          }}
        >
          {lesson.link ? (
            <Link 
              to={lesson.link} 
            >
              <LessonCard
                title={lesson.title}
                description={lesson.description}
                borderRadius={cardStyle.borderRadius}
                background={cardStyle.background}
              />
            </Link>
          ) : (
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              borderRadius={cardStyle.borderRadius}
              background={cardStyle.background}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default LessonsSection; 