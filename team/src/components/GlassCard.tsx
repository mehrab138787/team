import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <div
      className={`
        backdrop-blur-xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 
        border border-white/30 rounded-3xl p-8 relative overflow-hidden
        shadow-2xl shadow-purple-500/30
        ${hover ? 'hover:bg-gradient-to-br hover:from-white/25 hover:via-white/20 hover:to-white/10 hover:border-purple-400/60 hover:shadow-purple-400/50 hover:shadow-3xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-700 ease-out' : ''}
        ${glow ? 'animate-pulse shadow-purple-400/40' : ''}
        ${className}
      `}
      style={{
        background: `
          linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%),
          linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)
        `,
        boxShadow: `
          0 8px 32px rgba(139, 92, 246, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `
      }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-1500 ease-out"></div>
      </div>
    </div>
  );
};

export default GlassCard;