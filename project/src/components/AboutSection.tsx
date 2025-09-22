import React from 'react';
import { Terminal } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Avatar and Visual Effects */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Avatar Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative backdrop-blur-md bg-white/10 border-2 border-white/20 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                {/* Code Terminal Effect */}
                <div className="text-center">
                  <Terminal className="w-24 h-24 text-purple-400 mx-auto mb-4 animate-bounce" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    NOCTOVEX
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-mono">
                    &gt; coding_master.exe
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-0 left-1/2 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 animate-orbit-1"></div>
              <div className="absolute top-1/2 right-0 w-4 h-4 bg-cyan-500 rounded-full transform -translate-y-1/2 animate-orbit-2"></div>
              <div className="absolute bottom-0 left-1/2 w-5 h-5 bg-pink-500 rounded-full transform -translate-x-1/2 animate-orbit-3"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="text-center lg:text-right">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              درباره
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mx-3">
                NOCTOVEX
              </span>
            </h2>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                <span className="text-purple-400 font-bold">NOCTOVEX</span> با تجربه سال‌ها کدنویسی در پایتون و جاوا، 
                دوره‌هایی طراحی کرده که از صفر تا سطح حرفه‌ای، شما را به یک برنامه‌نویس واقعی تبدیل می‌کند.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-300">سال تجربه</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                  <div className="text-gray-300">دانشجو</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-600/20 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-gray-300">پروژه</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-600/20 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">پشتیبانی</div>
                </div>
              </div>
            </div>

            {/* Coding Languages */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:scale-110 transition-transform cursor-pointer">
                Java
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full text-white font-semibold hover:scale-110 transition-transform cursor-pointer">
                Python
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white font-semibold hover:scale-110 transition-transform cursor-pointer">
                Django
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full text-white font-semibold hover:scale-110 transition-transform cursor-pointer">
                Flask
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;