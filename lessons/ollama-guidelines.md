# Ollama Guidelines

## What is Ollama?
Ollama is a local, open-source tool that allows you to run large language models (LLMs) on your own computer without needing API keys or internet connectivity for inference.

## Installation

### macOS
1. Download from [https://ollama.com/download](https://ollama.com/download)
2. Open the downloaded `.dmg` file and follow the installation instructions
3. Verify installation: `ollama --version`

### Windows
1. Download from [https://ollama.com/download](https://ollama.com/download)
2. Run the installer and follow the prompts
3. Verify installation: `ollama --version`

### Linux
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## Getting Started

### 1. Start Ollama
```bash
ollama run llama3
```
- This downloads and starts the Llama 3 model (4.7GB)
- You'll see a `>>>` prompt when ready

### 2. Test in Terminal
Type messages directly in the terminal where Ollama is running:
```
>>> What is artificial intelligence?
```

### 3. Stop Ollama
Press `Ctrl+C` to stop the model

## Available Models

### Popular Models
- `llama3` - Meta's Llama 3 (4.7GB)
- `llama3.2` - Llama 3.2 (smaller, faster)
- `mistral` - Mistral AI's model
- `codellama` - Code-focused model
- `llama2` - Older Llama 2 model

### List Available Models
```bash
ollama list
```

### Download a Different Model
```bash
ollama run mistral
```

## API Usage

### Local API Endpoint
Ollama provides a REST API at `http://localhost:11434`

### Basic Chat Request
```bash
curl -X POST http://localhost:11434/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

### Python Integration
```python
import requests

response = requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": "llama3",
        "messages": [{"role": "user", "content": "Your question here"}],
        "stream": False  # Important: disable streaming for single response
    }
)
data = response.json()
print(data["message"]["content"])
```

## Troubleshooting

### Common Issues

1. **"command not found: ollama"**
   - Reinstall Ollama
   - Restart your terminal
   - Check if it's in your PATH

2. **"could not connect to a running Ollama instance"**
   - Start Ollama first: `ollama run llama3`
   - Check if Ollama is running in the background

3. **"Extra data" JSON error**
   - Add `"stream": False` to your API requests
   - This prevents streaming responses that cause JSON parsing issues

4. **Model not found**
   - Download the model: `ollama run modelname`
   - Check available models: `ollama list`

### Performance Tips

1. **Use smaller models for faster responses**
   - `llama3.2` instead of `llama3`
   - `mistral` for general use

2. **Close other applications** to free up RAM

3. **Use SSD storage** for faster model loading

## Integration with This Project

### Backend Setup
1. Ensure Ollama is running: `ollama run llama3`
2. The backend will call `http://localhost:11434/api/chat`
3. Use the `/ask-ollama/` endpoint instead of `/ask-openai/`

### Frontend Changes
Update your frontend to call the Ollama endpoint:
```javascript
const response = await fetch("http://localhost:8000/ask-ollama/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: userInput })
});
```

## Advantages of Ollama

✅ **Free** - No API costs or usage limits  
✅ **Private** - Data stays on your computer  
✅ **Offline** - Works without internet (after download)  
✅ **Customizable** - Can fine-tune or use custom models  
✅ **Fast** - No network latency  

## Disadvantages

❌ **Resource intensive** - Requires significant RAM and CPU  
❌ **Limited models** - Fewer options than cloud APIs  
❌ **Setup required** - Need to download and manage models  
❌ **Quality** - May be lower quality than latest cloud models  

## Next Steps

1. **Try different models** to find what works best for your use case
2. **Experiment with parameters** like temperature, top_p, etc.
3. **Consider model fine-tuning** for specific tasks
4. **Explore the Ollama community** for custom models and tips 