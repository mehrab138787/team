import React from 'react';
import { BookOpen, Code2, Users, Clock } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "یادگیری مرحله به مرحله و کامل",
    description: "از مبتدی تا حرفه‌ای، هر مرحله با دقت و جزئیات کامل طراحی شده",
    icon: <BookOpen className="w-12 h-12" />,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 2,
    title: "پروژه‌های عملی و واقعی",
    description: "کدهای واقعی بنویس، پروژه‌های کاربردی بساز و رزومه‌ت رو قوی کن",
    icon: <Code2 className="w-12 h-12" />,
    color: "from-cyan-500 to-blue-700"
  },
  {
    id: 3,
    title: "پشتیبانی و پاسخ به سوالات",
    description: "24/7 آماده پاسخگویی هستیم، هیچ سوالی بی‌پاسخ نمی‌مونه",
    icon: <Users className="w-12 h-12" />,
    color: "from-green-500 to-emerald-700"
  },
  {
    id: 4,
    title: "دسترسی دائمی و آپدیت رایگان",
    description: "یک بار خرید، تا ابد استفاده کن + تمام آپدیت‌ها رایگان",
    icon: <Clock className="w-12 h-12" />,
    color: "from-pink-500 to-rose-700"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            چرا 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mx-3">
              NOCTOVEX؟
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ویژگی‌هایی که ما رو از بقیه متمایز می‌کنه
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                
                {/* Holographic Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Animated Icon Container */}
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 holographic-icon`}>
                    {feature.icon}
                  </div>
                  
                  {/* Icon Pulse Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse`}></div>
                </div>

                {/* Feature Title */}
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Glow */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 inline-block">
            <p className="text-2xl text-white mb-6">
              آماده شروع یادگیری هستی؟
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              مشاهده دوره‌ها
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;