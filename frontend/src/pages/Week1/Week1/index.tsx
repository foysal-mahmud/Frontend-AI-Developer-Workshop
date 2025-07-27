import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import OllamaChat from '../OllamaChat/index';
import SetupGuide from '../SetupGuide/index';
import APIIntegration from '../APIIntegration/index';
import './Week1.scss';

const Week1: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/week-1', label: 'Overview', icon: '📋' },
    { path: '/week-1/setup', label: 'Setup Guide', icon: '⚙️' },
    { path: '/week-1/api-integration', label: 'API Integration', icon: '🔌' },
    { path: '/week-1/chat', label: 'Ollama Chat', icon: '🤖' },
  ];

  return (
    <div className="week1-container">
      <div className="week1-header">
        <h1 className="week1-title">Week 1: Foundations & API Integration</h1>
        <p className="week1-subtitle">
          Set up Python backend, integrate AI APIs, and build a React frontend
        </p>
      </div>

      <div className="week1-navigation">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`week1-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="week1-nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="week1-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/setup" element={<SetupGuide />} />
          <Route path="/api-integration" element={<APIIntegration />} />
          <Route path="/chat" element={<OllamaChat />} />
        </Routes>
      </div>
    </div>
  );
};

const Overview: React.FC = () => (
  <div className="week1-section">
    <h2>Week 1 Overview</h2>
    <div className="week1-card-grid">
      <div className="week1-card">
        <h3>🎯 Learning Objectives</h3>
        <ul>
          <li>Set up Python backend (FastAPI)</li>
          <li>Integrate OpenAI/Anthropic/Gemini APIs</li>
          <li>Build a simple React frontend</li>
          <li>Make your first AI API call</li>
        </ul>
      </div>
      
      <div className="week1-card">
        <h3>🛠️ What You'll Build</h3>
        <ul>
          <li>FastAPI server with AI endpoints</li>
          <li>React app to call backend endpoints</li>
          <li>Local Ollama integration</li>
          <li>Secure environment variable setup</li>
        </ul>
      </div>
      
      <div className="week1-card">
        <h3>📚 Key Concepts</h3>
        <ul>
          <li>REST API design</li>
          <li>Environment variables & security</li>
          <li>Frontend-backend communication</li>
          <li>Local vs cloud AI models</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Week1; 