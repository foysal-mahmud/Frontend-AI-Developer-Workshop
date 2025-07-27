import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const OverviewSection = lazy(() => import('@/organisms/OverviewSection'));
const LessonsSection = lazy(() => import('@/organisms/LessonsSection'));
const Footer = lazy(() => import('@/organisms/Footer'));
const Week1 = lazy(() => import('@/pages/Week1/Week1'));

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Suspense fallback={<div style={styles.loading}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/week-1/*" element={<Week1 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => (
  <>
    <OverviewSection />
    <LessonsSection />
    <Footer />
  </>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    background: '#f7f8fa',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  loading: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 24,
    color: '#888',
  },
};

export default App; 