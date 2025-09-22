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
        backdrop-blur-lg bg-gradient-to-br from-white/10 via-white/5 to-white/5
        border border-white/20 rounded-3xl p-8 relative overflow-hidden
        shadow-xl shadow-purple-400/20
        ${hover ? 'hover:scale-105 transform transition-transform duration-300 ease-out' : ''}
        ${glow ? 'animate-pulse' : ''}
        ${className}
      `}
      style={{
        background: `
          linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%),
          linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%, rgba(255, 255, 255, 0.03) 100%)
        `,
        boxShadow: `
          0 4px 20px rgba(139, 92, 246, 0.2),
          0 0 0 1px rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        willChange: 'transform, opacity'
      }}
    >
      {/* Glow + shine overlay */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none">
        {glow && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-xl animate-pulse" />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
