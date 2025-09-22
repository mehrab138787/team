import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  size = 'md'
}) => {
  const baseClasses = `
    rounded-full font-bold transition-all duration-500
    backdrop-blur-xl border-2 relative overflow-hidden group
    transform hover:scale-110 active:scale-95 hover:-translate-y-1
    shadow-lg hover:shadow-2xl
  `;

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-12 py-6 text-xl'
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600/30 to-cyan-600/30 
      border-purple-400/80 text-purple-100
      hover:from-purple-500/50 hover:to-cyan-500/50
      hover:border-purple-300 hover:text-white hover:border-2
      hover:shadow-purple-500/60 shadow-purple-500/30
    `,
    secondary: `
      bg-gradient-to-r from-cyan-600/30 to-pink-600/30
      border-cyan-400/80 text-cyan-100
      hover:from-cyan-500/50 hover:to-pink-500/50
      hover:border-cyan-300 hover:text-white hover:border-2
      hover:shadow-cyan-500/60 shadow-cyan-500/30
    `
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
      
      {/* Pulsing glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 -z-10"></div>
      
      {/* Content */}
      <span className="relative z-10 drop-shadow-lg">{children}</span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out rounded-full" />
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Component>
  );
};

export default NeonButton;