import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import CourseDetail from './components/CourseDetail';
import './styles/animations.css';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-gray-900 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={
            <CourseDetail courseId={window.location.pathname.split('/')[2]} />
          } />
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;