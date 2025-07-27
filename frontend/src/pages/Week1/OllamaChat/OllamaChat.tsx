import React, { useState } from 'react';
import './OllamaChat.scss';

const OllamaChat: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setResponse("");
    
    try {
      const res = await fetch("http://localhost:8000/ask-ollama/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      
      if (data.error) {
        setResponse(`Error: ${data.error}`);
      } else {
        setResponse(data.response);
      }
    } catch (error) {
      setResponse(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="ollama-chat-container">
      <div className="ollama-chat-header">
        <h2>🤖 Ollama Chat Interface</h2>
        <p>Test your local Llama 3 model integration</p>
      </div>
      
      <div className="ollama-chat-input-container">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          className="ollama-chat-textarea"
          disabled={isLoading}
        />
        <button 
          onClick={handleAsk} 
          disabled={isLoading || !prompt.trim()}
          className="ollama-chat-ask-button"
        >
          {isLoading ? "Thinking..." : "Ask"}
        </button>
      </div>
      
      {isLoading && (
        <div className="ollama-chat-loading">
          <div className="ollama-chat-spinner"></div>
          <p>Generating response...</p>
        </div>
      )}
      
      {response && (
        <div className="ollama-chat-response-container">
          <h3>Response:</h3>
          <div className="ollama-chat-response">{response}</div>
        </div>
      )}
    </div>
  );
};

export default OllamaChat; 