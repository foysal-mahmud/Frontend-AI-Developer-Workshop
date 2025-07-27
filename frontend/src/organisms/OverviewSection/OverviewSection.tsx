import React, { useEffect, useState } from 'react';

const OverviewSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  return (
    <header style={{
      ...styles.header,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-30px)',
      transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
    }}>
      <h1>AI Integration Playground</h1>
      <p style={styles.subtitle}>
        A full-stack learning project for practical AI/ML apps. Read, learn, and try real AI features from the frontend!
      </p>
      <section style={styles.overviewSection}>
        <h2 style={styles.sectionTitle}>Project Overview</h2>
        <p style={styles.overviewText}>
          This project is designed for frontend developers to learn and experiment with AI/ML integration. Each week, you'll explore a new concept, see practical code examples, and try features directly in the browser. Dive into API integration, RAG, document parsing, open-source LLMs, and more!
        </p>
      </section>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: '#22223b',
    color: '#fff',
    padding: '32px 0 16px 0',
    textAlign: 'center',
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(34,34,59,0.07)',
  },
  subtitle: {
    color: '#bfc0c0',
    marginTop: 8,
    fontSize: 18,
    fontWeight: 400,
  },
  overviewSection: {
    maxWidth: 700,
    margin: '0 auto 32px auto',
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(34,34,59,0.07)',
    padding: '24px 32px',
  },
  sectionTitle: {
    margin: '0 0 12px 0',
    fontSize: 22,
    color: '#22223b',
  },
  overviewText: {
    color: '#444',
    fontSize: 17,
    lineHeight: 1.6,
  },
};

export default OverviewSection; 