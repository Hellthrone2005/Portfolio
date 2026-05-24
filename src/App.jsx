import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use clientX/Y for fixed positioning
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* 1. Content Layer */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
      </div>

      {/* 2. Spotlight Layer (Moved to top with pointer-events: none) */}
      <div className="spotlight-overlay" />
    </main>
  );
}

export default App; 