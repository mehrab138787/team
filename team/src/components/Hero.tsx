import React from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import NeonButton from './NeonButton';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-9xl font-black mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-pulse relative z-10">
            NOCTOVEX
          </h1>
          {/* Glowing text shadow */}
          <div className="absolute inset-0 text-6xl md:text-9xl font-black text-purple-400/20 blur-2xl animate-pulse">
            NOCTOVEX
          </div>
          {/* Floating icons */}
          <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
          <Zap className="absolute -bottom-4 -left-4 w-6 h-6 text-cyan-400 animate-bounce" />
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto font-medium bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
          تیم سازندگان وبِ آینده — طراحی کهکشانی، انیمیشن‌های 3D و تجربه‌های موبایل محور
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          ما تجربه‌های وب منحصر به فرد با فناوری‌های پیشرفته می‌سازیم که مرز بین واقعیت و تخیل را محو می‌کند
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
          <NeonButton
            href="mailto:mehrabzyzy3@gmail.com"
            variant="primary"
            size="lg"
            className="group-hover:animate-pulse"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              تماس با ما
            </span>
          </NeonButton>
          <NeonButton
            onClick={() => scrollToSection('portfolio')}
            variant="secondary"
            size="lg"
          >
            <span className="flex items-center gap-3">
              <Zap className="w-5 h-5" />
              نمونه‌کارها
            </span>
          </NeonButton>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-sm text-gray-400">پروژه موفق</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-sm text-gray-400">متخصص ارشد</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">2025</div>
            <div className="text-sm text-gray-400">سال تأسیس</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('team')}>
        <div className="relative">
          <ChevronDown className="w-10 h-10 text-purple-400 relative z-10" />
          <div className="absolute inset-0 w-10 h-10 bg-purple-400/30 rounded-full blur-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;