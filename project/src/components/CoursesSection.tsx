import React from 'react';
import { Code, Database, Brain, Zap, Globe, Cpu } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "جاوا مقدماتی",
    level: "مبتدی",
    description: "شروع از صفر، اصول پایه و اولین برنامه‌هایت",
    price: "رایگان",
    icon: <Code className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    gradient: "group-hover:from-orange-400 group-hover:to-red-400"
  },
  {
    id: 2,
    title: "جاوا متوسط",
    level: "متوسط",
    description: "شی‌گرایی، ساخت اپلیکیشن‌های کاربردی",
    price: "رایگان",
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    gradient: "group-hover:from-blue-400 group-hover:to-purple-400"
  },
  {
    id: 3,
    title: "جاوا پیشرفته",
    level: "پیشرفته",
    description: "ساخت پروژه‌های بزرگ، بهینه‌سازی، فریم‌ورک‌ها",
    price: "رایگان",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    gradient: "group-hover:from-purple-400 group-hover:to-pink-400"
  },
  {
    id: 4,
    title: "پایتون مقدماتی",
    level: "مبتدی",
    description: "یادگیری پایه‌ها، سینتکس، اولین پروژه‌ها",
    price: "رایگان",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    gradient: "group-hover:from-green-400 group-hover:to-emerald-400"
  },
  {
    id: 5,
    title: "پایتون متوسط",
    level: "متوسط",
    description: "کتابخانه‌ها، داده‌کاوی، ساخت پروژه‌های واقعی",
    price: "رایگان",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    gradient: "group-hover:from-cyan-400 group-hover:to-blue-400"
  },
  {
    id: 6,
    title: "پایتون پیشرفته",
    level: "پیشرفته",
    description: "هوش مصنوعی، یادگیری ماشین، Django و Flask",
    price: "رایگان",
    icon: <Brain className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    gradient: "group-hover:from-pink-400 group-hover:to-rose-400"
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            دوره‌های 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mx-3">
              آموزشی
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            از مبتدی تا حرفه‌ای، مسیر کاملت رو با ما بپیما
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative course-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background with Glass Effect */}
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${course.color} ${course.gradient} rounded-xl mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {course.icon}
                </div>

                {/* Level Badge */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${course.color} rounded-full text-white text-sm font-semibold mb-4`}>
                  {course.level}
                </div>

                {/* Course Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Price */}
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 animate-pulse">
                  {course.price}
                </div>

                {/* Register Button */}
                <button 
                  onClick={() => window.location.href = `/course/${course.id}`}
                  className={`w-full py-4 bg-gradient-to-r ${course.color} ${course.gradient} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:transform hover:translateY-1 group-hover:animate-pulse relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">شروع دوره</span>
                </button>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl -z-10 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;