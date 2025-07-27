# Week 2: Retrieval-Augmented Generation (RAG)

Welcome to Week 2! This week focuses on implementing Retrieval-Augmented Generation (RAG) systems, which combine the power of large language models with external knowledge retrieval.

## 🎯 Learning Objectives

By the end of this week, you will be able to:

- ✅ Understand RAG concepts and architecture
- ✅ Set up and configure vector databases (ChromaDB/Faiss)
- ✅ Implement document embedding and storage
- ✅ Build a RAG pipeline using LangChain or LlamaIndex
- ✅ Create semantic search capabilities
- ✅ Integrate RAG with your AI API endpoints
- ✅ Build a frontend interface for RAG interactions

## 🛠️ What You'll Build

| Component | Description | Status |
|-----------|-------------|--------|
| **Vector Database** | ChromaDB or Faiss setup | ⚪ Coming Soon |
| **RAG Pipeline** | Document processing and retrieval | ⚪ Coming Soon |
| **Embedding System** | Text-to-vector conversion | ⚪ Coming Soon |
| **Semantic Search** | Context-aware document retrieval | ⚪ Coming Soon |
| **RAG Frontend** | Interactive RAG interface | ⚪ Coming Soon |

## 📚 Understanding RAG

### What is RAG?

Retrieval-Augmented Generation (RAG) is a technique that enhances LLM responses by retrieving relevant information from external knowledge sources before generating answers.

### RAG Architecture

```
User Query → Embedding → Vector Search → Context Retrieval → LLM → Response
     ↓           ↓           ↓              ↓           ↓        ↓
  "What is..." → [0.1,0.2..] → Similar Docs → Relevant → GPT → Answer
```

### Why RAG Matters

| Problem | Traditional LLM | RAG Solution |
|---------|----------------|--------------|
| **Outdated Information** | Trained on old data | Real-time knowledge retrieval |
| **Hallucination** | Makes up facts | Grounded in retrieved documents |
| **Domain Knowledge** | Limited to training data | Access to specific documents |
| **Transparency** | Black box responses | Cites source documents |

## 🔧 Technical Implementation

### 1. Vector Database Setup

#### Option A: ChromaDB (Recommended for beginners)

```python
# requirements.txt additions
chromadb==0.4.15
sentence-transformers==2.2.2

# Backend implementation
import chromadb
from sentence_transformers import SentenceTransformer

# Initialize ChromaDB
client = chromadb.Client()
collection = client.create_collection("documents")

# Initialize embedding model
embedder = SentenceTransformer('all-MiniLM-L6-v2')
```

#### Option B: Faiss (For advanced users)

```python
# requirements.txt additions
faiss-cpu==1.7.4
numpy==1.24.3

# Backend implementation
import faiss
import numpy as np

# Initialize FAISS index
dimension = 384  # Embedding dimension
index = faiss.IndexFlatL2(dimension)
```

### 2. Document Processing Pipeline

```python
# document_processor.py
from typing import List, Dict
import re

class DocumentProcessor:
    def __init__(self, chunk_size: int = 1000, overlap: int = 200):
        self.chunk_size = chunk_size
        self.overlap = overlap
    
    def chunk_text(self, text: str) -> List[str]:
        """Split text into overlapping chunks"""
        chunks = []
        start = 0
        
        while start < len(text):
            end = start + self.chunk_size
            chunk = text[start:end]
            chunks.append(chunk)
            start = end - self.overlap
            
        return chunks
    
    def clean_text(self, text: str) -> str:
        """Clean and normalize text"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        # Remove special characters
        text = re.sub(r'[^\w\s\.\,\!\?\-]', '', text)
        return text.strip()
```

### 3. Embedding and Storage

```python
# rag_service.py
from sentence_transformers import SentenceTransformer
import chromadb
from typing import List, Dict

class RAGService:
    def __init__(self):
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.client = chromadb.Client()
        self.collection = self.client.get_or_create_collection("documents")
    
    def add_documents(self, documents: List[Dict[str, str]]):
        """Add documents to the vector database"""
        texts = [doc['content'] for doc in documents]
        embeddings = self.embedder.encode(texts)
        
        # Add to ChromaDB
        self.collection.add(
            embeddings=embeddings.tolist(),
            documents=texts,
            metadatas=[{'source': doc.get('source', 'unknown')} for doc in documents],
            ids=[f"doc_{i}" for i in range(len(documents))]
        )
    
    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """Search for relevant documents"""
        query_embedding = self.embedder.encode([query])
        
        results = self.collection.query(
            query_embeddings=query_embedding.tolist(),
            n_results=top_k
        )
        
        return [
            {
                'content': doc,
                'metadata': meta,
                'distance': dist
            }
            for doc, meta, dist in zip(
                results['documents'][0],
                results['metadatas'][0],
                results['distances'][0]
            )
        ]
```

### 4. RAG Endpoint Integration

```python
# main.py additions
from rag_service import RAGService
import openai

rag_service = RAGService()

@app.post("/api/rag")
async def rag_endpoint(request: dict):
    query = request.get('query', '')
    
    # Retrieve relevant documents
    relevant_docs = rag_service.search(query, top_k=3)
    
    # Build context
    context = "\n\n".join([doc['content'] for doc in relevant_docs])
    
    # Create prompt with context
    prompt = f"""Based on the following context, answer the question. If the context doesn't contain relevant information, say so.

Context:
{context}

Question: {query}

Answer:"""
    
    # Call OpenAI API
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that answers questions based on provided context."},
            {"role": "user", "content": prompt}
        ]
    )
    
    return {
        "answer": response.choices[0].message.content,
        "sources": [doc['metadata'] for doc in relevant_docs],
        "context": context
    }
```

## 🎨 Frontend Implementation

### RAG Interface Component

```typescript
// components/RAGInterface.tsx
import React, { useState } from 'react';

interface RAGResponse {
  answer: string;
  sources: any[];
  context: string;
}

const RAGInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<RAGResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('RAG request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rag-interface">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="rag-input"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Ask'}
        </button>
      </form>

      {response && (
        <div className="rag-response">
          <h3>Answer:</h3>
          <p>{response.answer}</p>
          
          <h4>Sources:</h4>
          <ul>
            {response.sources.map((source, i) => (
              <li key={i}>{source.source}</li>
            ))}
          </ul>
          
          <details>
            <summary>View Context</summary>
            <pre>{response.context}</pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default RAGInterface;
```

## 📊 Sample Data for Testing

### Sample Documents

```python
sample_documents = [
    {
        "content": "Python is a high-level, interpreted programming language. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability with its notable use of significant whitespace.",
        "source": "python_basics.txt"
    },
    {
        "content": "FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. It offers automatic API documentation, data validation, and high performance.",
        "source": "fastapi_guide.txt"
    },
    {
        "content": "React is a JavaScript library for building user interfaces. It was developed by Facebook and is used for creating single-page applications and mobile applications.",
        "source": "react_intro.txt"
    }
]
```

## 🧪 Testing Your RAG System

### 1. Test Document Ingestion

```python
# test_rag.py
from rag_service import RAGService

# Initialize RAG service
rag = RAGService()

# Add sample documents
rag.add_documents(sample_documents)

# Test search
results = rag.search("What is Python?")
print("Search results:", results)
```

### 2. Test API Endpoint

```bash
# Test RAG endpoint
curl -X POST http://localhost:8000/api/rag \
  -H "Content-Type: application/json" \
  -d '{"query": "What is Python?"}'
```

### 3. Test Frontend Integration

Navigate to your RAG interface and try asking questions about the documents you've ingested.

## 📈 Performance Optimization

### Embedding Optimization

| Technique | Description | Implementation |
|-----------|-------------|----------------|
| **Batch Processing** | Process multiple documents at once | Use `encode()` with lists |
| **Caching** | Cache embeddings to avoid recomputation | Store in Redis or file |
| **Model Selection** | Choose appropriate embedding model | `all-MiniLM-L6-v2` for speed, `all-mpnet-base-v2` for quality |

### Search Optimization

| Technique | Description | Implementation |
|-----------|-------------|----------------|
| **Index Tuning** | Optimize vector index parameters | Adjust `nlist` in FAISS |
| **Query Expansion** | Expand queries for better retrieval | Use synonyms or related terms |
| **Reranking** | Improve results with secondary ranking | Use cross-encoder models |

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Slow embedding generation** | Use smaller models or batch processing |
| **Poor search results** | Check document chunking and embedding quality |
| **Memory issues** | Use FAISS with memory mapping or ChromaDB persistence |
| **API timeouts** | Implement async processing and caching |

### Debug Commands

```python
# Check embedding dimensions
print(f"Embedding dimension: {embedder.get_sentence_embedding_dimension()}")

# Check collection size
print(f"Documents in collection: {collection.count()}")

# Test embedding quality
test_embeddings = embedder.encode(["test sentence"])
print(f"Embedding shape: {test_embeddings.shape}")
```

## 📝 Next Steps

After completing Week 2, you'll be ready for:

- **Week 3:** Document Parsing & NLP Workflows
- **Week 4:** Open-Source LLMs & Deployment
- **Week 5:** Agentic AI (Agents, Tools, and Memory)

## 🔗 Additional Resources

| Resource | Description | Link |
|----------|-------------|------|
| **RAG Paper** | Original RAG research paper | [RAG Paper](https://arxiv.org/abs/2005.11401) |
| **ChromaDB Docs** | ChromaDB documentation | [ChromaDB](https://docs.trychroma.com/) |
| **FAISS Docs** | FAISS documentation | [FAISS](https://github.com/facebookresearch/faiss) |
| **Sentence Transformers** | Hugging Face sentence transformers | [Sentence Transformers](https://www.sbert.net/) |

---

**🎉 Congratulations!** You've implemented a working RAG system. You can now enhance LLM responses with external knowledge retrieval. Ready for Week 3? Let's learn about document parsing and NLP workflows! 