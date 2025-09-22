import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
      
      {/* Neon Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl neon-pulse cyber-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl neon-pulse-delayed cyber-glow"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl neon-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Glass Morphism Container */}
      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-16 max-w-5xl text-center glass-card cyber-glow">
        {/* Main Title */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <span className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x holographic-text glitch-effect">
              NOCTOVEX
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            با 
            <span className="text-purple-400 mx-3 neon-text holographic-text">NOCTOVEX</span>
             برنامه‌نویس حرفه‌ای شو
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          دوره‌های رایگان صفر تا صد پایتون و جاوا، با آموزش پروژه‌محور و کاربردی
        </p>
        
        {/* Free Badge */}
        <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-xl font-bold mb-12 animate-pulse cyber-glow">
          ۱۰۰٪ رایگان
        </div>

        {/* CTA Button */}
        <div className="relative inline-block">
          <button className="group relative px-12 py-6 text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 button-cyber-pulse glitch-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative flex items-center gap-3">
              شروع یادگیری
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-purple-400 animate-bounce" />
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-green-400 font-mono text-sm opacity-60 floating-code holographic-text">
        &lt;/&gt; Python
      </div>
      <div className="absolute top-40 right-10 text-blue-400 font-mono text-sm opacity-60 floating-code-delayed holographic-text">
        class Java {"{ }"}
      </div>
      <div className="absolute bottom-40 left-20 text-purple-400 font-mono text-sm opacity-60 floating-code holographic-text">
        def learn(): pass
      </div>
      
      {/* Matrix Rain Effect */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="matrix-rain"
          style={{
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {Array.from({ length: 20 }, () => String.fromCharCode(0x30A0 + Math.random() * 96)).join('')}
        </div>
      ))}
      
      {/* Scan Line Effect */}
      <div className="scan-line"></div>
    </section>
  );
};

export default HeroSection;
