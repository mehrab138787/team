import React from 'react';
import { Code, Palette, Server, Star, Zap, Shield } from 'lucide-react';
import GlassCard from './GlassCard';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mehrab',
      role: 'Senior Full-Stack Web Developer',
      description: 'مهندس ارشد وب؛ معماری سرور-کلاینت، بهینه‌سازی عملکرد و اجرای پروژه‌های WebGL',
      icon: <Code className="w-16 h-16 text-purple-400" />,
      gradient: 'from-purple-500/30 to-blue-500/30',
      skills: ['React', 'Node.js', 'WebGL', 'TypeScript'],
      experience: '5+ سال'
    },
    {
      name: 'Amir',
      role: 'Senior Frontend Engineer',
      description: 'متخصص رندرینگ سمت کلاینت، انیمیشن‌های تعاملی و طراحی رابط‌های موبایل‌محور',
      icon: <Palette className="w-16 h-16 text-cyan-400" />,
      gradient: 'from-cyan-500/30 to-pink-500/30',
      skills: ['Vue.js', 'Three.js', 'GSAP', 'CSS3'],
      experience: '4+ سال'
    },
    {
      name: 'Reza',
      role: 'Senior Backend Engineer',
      description: 'تمرکز بر مقیاس‌پذیری، امنیت و پیاده‌سازی APIها و زیرساخت‌های Cloud-native',
      icon: <Server className="w-16 h-16 text-pink-400" />,
      gradient: 'from-pink-500/30 to-purple-500/30',
      skills: ['Python', 'Docker', 'AWS', 'MongoDB'],
      experience: '6+ سال'
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
              اعضای تیم NOCTOVEX
            </h2>
            <div className="absolute inset-0 text-4xl md:text-7xl font-black text-purple-400/10 blur-2xl">
              اعضای تیم NOCTOVEX
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            NOCTOVEX — تیمی از توسعه‌دهندگان چیره‌دست با تخصص در تجربه‌های وب سه‌بعدی و رابط‌های آینده‌نگر. 
            از سال 2025 همراه با مشتریان برای ساخت محصولاتی سریع، زیبا و قابل توسعه کار می‌کنیم.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <GlassCard
              key={member.name}
              className={`text-center hover:scale-105 animation-delay-${index * 200} group`}
              glow={true}
            >
              {/* Member Icon */}
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                {member.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Member Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                {member.name}
              </h3>
              
              {/* Role */}
              <p className="text-purple-300 font-semibold mb-4 text-lg">
                {member.role}
              </p>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {member.description}
              </p>
              
              {/* Experience */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300 font-medium">{member.experience}</span>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:border-cyan-300/60 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 flex items-center justify-center">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">15+ سال</div>
            <div className="text-sm text-gray-400">تجربه مشترک</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-pink-500/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-400">رضایت مشتری</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 flex items-center justify-center">
              <Code className="w-8 h-8 text-pink-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-gray-400">تکنولوژی</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 flex items-center justify-center">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-gray-400">پشتیبانی</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;