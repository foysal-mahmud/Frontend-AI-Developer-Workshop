import React from 'react';
import './SetupGuide.scss';

const SetupGuide: React.FC = () => {
  return (
    <div className="setup-guide-container">
      <h2>⚙️ Week 1 Setup Guide</h2>
      
      <div className="setup-guide-section">
        <h3>📋 Prerequisites</h3>
        <ul className="setup-guide-list">
          <li>Python 3.8+ installed</li>
          <li>Node.js 16+ installed</li>
          <li>Git installed</li>
          <li>Code editor (VS Code recommended)</li>
        </ul>
      </div>

      <div className="setup-guide-section">
        <h3>🔧 Backend Setup</h3>
        <div className="setup-guide-step">
          <h4>Step 1: Navigate to Backend</h4>
          <pre className="setup-guide-code">cd backend</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 2: Create Virtual Environment</h4>
          <pre className="setup-guide-code">python3 -m venv venv</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 3: Activate Virtual Environment</h4>
          <pre className="setup-guide-code">source venv/bin/activate  # macOS/Linux</pre>
          <pre className="setup-guide-code">venv\Scripts\activate     # Windows</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 4: Install Dependencies</h4>
          <pre className="setup-guide-code">pip install -r requirements.txt</pre>
          <pre className="setup-guide-code">pip install python-dotenv openai requests</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 5: Set Up Environment Variables</h4>
          <p>Create a <code>.env</code> file in the backend folder:</p>
          <pre className="setup-guide-code">OPENAI_API_KEY=your_api_key_here</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 6: Start Backend Server</h4>
          <pre className="setup-guide-code">uvicorn main:app --reload</pre>
        </div>
      </div>

      <div className="setup-guide-section">
        <h3>🤖 Ollama Setup (Optional - for local AI)</h3>
        <div className="setup-guide-step">
          <h4>Step 1: Install Ollama</h4>
          <p>Download from <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">https://ollama.com/download</a></p>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 2: Start Ollama</h4>
          <pre className="setup-guide-code">ollama run llama3</pre>
        </div>
      </div>

      <div className="setup-guide-section">
        <h3>⚛️ Frontend Setup</h3>
        <div className="setup-guide-step">
          <h4>Step 1: Navigate to Frontend</h4>
          <pre className="setup-guide-code">cd frontend</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 2: Install Dependencies</h4>
          <pre className="setup-guide-code">npm install</pre>
        </div>
        
        <div className="setup-guide-step">
          <h4>Step 3: Start Development Server</h4>
          <pre className="setup-guide-code">npm start</pre>
        </div>
      </div>

      <div className="setup-guide-section">
        <h3>✅ Verification</h3>
        <ul className="setup-guide-list">
          <li>Backend running at: <a href="http://localhost:8000" target="_blank" rel="noopener noreferrer">http://localhost:8000</a></li>
          <li>API docs at: <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer">http://localhost:8000/docs</a></li>
          <li>Frontend running at: <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a></li>
          <li>Ollama API at: <a href="http://localhost:11434" target="_blank" rel="noopener noreferrer">http://localhost:11434</a></li>
        </ul>
      </div>

      <div className="setup-guide-section">
        <h3>🚨 Troubleshooting</h3>
        <div className="setup-guide-troubleshoot">
          <h4>Common Issues:</h4>
          <ul className="setup-guide-list">
            <li><strong>Port already in use:</strong> Kill the process or use different ports</li>
            <li><strong>Module not found:</strong> Check if virtual environment is activated</li>
            <li><strong>Ollama not found:</strong> Reinstall or restart terminal</li>
            <li><strong>CORS errors:</strong> Backend CORS is already configured</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetupGuide; 