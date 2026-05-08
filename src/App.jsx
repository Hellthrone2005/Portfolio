import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    /* Ensure the main container is the base */
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      
      {/* 1. Background Layer (Spotlight) - Set to z-0 */}
      <div className="spotlight-overlay" style={{ zIndex: 0 }} />

      {/* 2. Content Layer - Forced to z-20 to be on top of the spotlight */}
      <div className="relative z-20">
        <Hero />
        <Projects />
        <Experience />
        <Certifications />
      </div>
    </main>
  );
}

export default App;