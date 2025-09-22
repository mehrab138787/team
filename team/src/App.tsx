import React, { useEffect } from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax for different elements
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.parallax || '0.5');
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      // Header background opacity based on scroll
      const header = document.querySelector('header');
      if (header) {
        const opacity = Math.min(scrollY / 100, 0.9);
        (header as HTMLElement).style.background = `rgba(0, 0, 0, ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 3D Galaxy Background */}
      <GalaxyBackground />
      
      {/* Floating 3D Elements */}
      <FloatingElements />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none -z-5" />
      
      {/* Animated particles overlay */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <main className="relative z-10">
        <div data-parallax="0.1">
          <Hero />
        </div>
        <div data-parallax="0.2">
          <Team />
        </div>
        <div data-parallax="0.3">
          <Portfolio />
        </div>
        <div data-parallax="0.1">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;