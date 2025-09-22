import React from 'react';
import { ExternalLink, Sparkles, Zap, ShoppingBag, Eye, Code2, Layers } from 'lucide-react';
import GlassCard from './GlassCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Project Alpha',
      subtitle: 'Portfolio Dashboard',
      description: 'داشبورد SPA با پیش‌نمایش سه‌بعدی پروژه‌ها و تعاملات لحظه‌ای',
      icon: <Sparkles className="w-12 h-12 text-purple-400" />,
      gradient: 'from-purple-600/30 to-blue-600/30',
      tech: ['React', 'Three.js', 'TypeScript', 'WebGL'],
      status: 'Live',
      views: '2.5K'
    },
    {
      title: 'Project Nebula',
      subtitle: 'Interactive Landing',
      description: 'لندینگ تعاملی با انیمیشن‌های کهکشانی و نمایش 3D محصول در مرورگر',
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      gradient: 'from-cyan-600/30 to-pink-600/30',
      tech: ['Next.js', 'GLSL', 'Framer Motion', 'WebXR'],
      status: 'Development',
      views: '1.8K'
    },
    {
      title: 'Project Orbit',
      subtitle: 'E-commerce Experience',
      description: 'تجربه فروشگاهی منحصر به فرد با کارت‌های محصول سه‌بعدی و میکرواینترکشن‌های روان',
      icon: <ShoppingBag className="w-12 h-12 text-pink-400" />,
      gradient: 'from-pink-600/30 to-purple-600/30',
      tech: ['Vue.js', 'Babylon.js', 'Node.js', 'MongoDB'],
      status: 'Completed',
      views: '3.2K'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent relative z-10">
              نمونه‌کارها
            </h2>
            <div className="absolute inset-0 text-4xl md:text-7xl font-black text-cyan-400/10 blur-2xl">
              نمونه‌کارها
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            نمونه‌ای از پروژه‌های پیشرفته و خلاقانه‌ای که با استفاده از جدیدترین تکنولوژی‌های وب ساخته‌ایم
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={`group cursor-pointer overflow-hidden animation-delay-${index * 300} hover:shadow-2xl`}
              glow={true}
            >
              {/* Project Header */}
              <div className={`w-full h-40 mb-6 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                {project.icon}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                  {project.status}
                </div>
                
                {/* External Link */}
                <ExternalLink className="absolute top-4 right-4 w-6 h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                
                {/* Animated particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-lg text-purple-300 font-semibold mb-4 group-hover:text-purple-200 transition-colors duration-300">
                {project.subtitle}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Project Stats */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-300">{project.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">{project.tech.length} Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-pink-300">Advanced</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-white/10 to-white/5 text-cyan-300 rounded-full border border-cyan-400/30 hover:border-cyan-300/60 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-pink-500/20 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* View Project Button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="w-full py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/40 rounded-xl text-purple-200 font-medium hover:from-purple-500/30 hover:to-cyan-500/30 hover:border-purple-300/60 transition-all duration-300">
                  مشاهده پروژه
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Portfolio Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm text-gray-400">پروژه تکمیل شده</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-sm text-gray-400">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">تکنولوژی استفاده شده</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">تحویل به موقع</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;