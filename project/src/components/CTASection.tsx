import React from 'react';
import { ArrowLeft, Code } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-cyan-900/50"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Main CTA Container */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 lg:p-16 glass-cta">
          
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl text-white mb-6 animate-bounce">
              <Code className="w-12 h-12" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            از همین امروز مسیر 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              برنامه‌نویسی
            </span>
            <br />
            خودت رو شروع کن
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            هزاران نفر قبل از تو این مسیر رو رفتن و موفق شدن. 
            حالا نوبت توه که تبدیل به یک برنامه‌نویس حرفه‌ای بشی.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-300 text-lg">دانشجوی موفق</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-300 text-lg">رضایت کامل</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-lg">پشتیبانی</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-6 text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 button-cyber-pulse glitch-effect">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                شروع دوره‌های رایگان
                <ArrowLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="px-8 py-6 text-xl font-semibold text-white border-2 border-white/30 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 cyber-glow">
              مشاوره رایگان
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              ۱۰۰٪ رایگان
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              دسترسی مادام‌العمر
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              آپدیت رایگان
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>ساخته شده با ❤️ توسط NOCTOVEX</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;