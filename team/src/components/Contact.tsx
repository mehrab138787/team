import React from 'react';
import { Mail, Calendar, Globe, Phone, MapPin, Clock } from 'lucide-react';
import GlassCard from './GlassCard';
import NeonButton from './NeonButton';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent relative z-10">
              تماس با ما
            </h2>
            <div className="absolute inset-0 text-4xl md:text-7xl font-black text-pink-400/10 blur-2xl">
              تماس با ما
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Contact Card */}
        <GlassCard className="text-center" glow={true}>
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center relative overflow-hidden group hover:scale-110 transition-transform duration-500">
              <Mail className="w-10 h-10 text-purple-400 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              آماده همکاری با شما هستیم
            </h3>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              برای سفارش پروژه، مشاوره فنی و همکاری در ساخت تجربه‌های وب منحصر به فرد با ما در تماس باشید
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-300 text-sm mb-2">ایمیل</p>
              <a 
                href="mailto:mehrabzyzy3@gmail.com"
                className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-medium"
              >
                mehrabzyzy3@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-gray-300 text-sm mb-2">سابقه فعالیت</p>
              <p className="text-cyan-300 font-medium">از سال 2025</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-pink-400" />
              </div>
              <p className="text-gray-300 text-sm mb-2">تخصص</p>
              <p className="text-pink-300 font-medium">وب 3D و تجربه موبایل</p>
            </div>
          </div>
          
          {/* Additional Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-gray-300 text-sm mb-1">تماس تلفنی</p>
              <p className="text-green-300 text-sm">در دسترس 24/7</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-orange-400 mb-2" />
              <p className="text-gray-300 text-sm mb-1">موقعیت</p>
              <p className="text-orange-300 text-sm">ایران، تهران</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-blue-400 mb-2" />
              <p className="text-gray-300 text-sm mb-1">زمان پاسخ</p>
              <p className="text-blue-300 text-sm">کمتر از 2 ساعت</p>
            </div>
          </div>

          <NeonButton
            href="mailto:mehrabzyzy3@gmail.com"
            variant="primary"
            size="lg"
            className="mb-12"
          >
            <span className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              شروع همکاری
            </span>
          </NeonButton>
          
          {/* Quick Contact Form */}
          <div className="max-w-md mx-auto">
            <h4 className="text-xl font-bold text-white mb-6">یا پیام سریع ارسال کنید</h4>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
              />
              <input
                type="email"
                placeholder="ایمیل شما"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
              />
              <textarea
                placeholder="پیام شما"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
              />
              <NeonButton
                variant="secondary"
                className="w-full"
              >
                ارسال پیام
              </NeonButton>
            </div>
          </div>
        </GlassCard>

        {/* Footer Links */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-8">
            <a 
              href="mailto:mehrabzyzy3@gmail.com" 
              className="hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              تماس با ما
            </a>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              نمونه‌کارها
            </button>
            <a 
              href="#" 
              className="hover:text-pink-300 transition-colors duration-300 font-medium"
            >
              سیاست حریم خصوصی
            </a>
            <button 
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              درباره تیم
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 mb-4">
              © 2025 NOCTOVEX. تمامی حقوق محفوظ است.
            </p>
            <p className="text-sm text-gray-600">
              ساخته شده با ❤️ و تکنولوژی‌های پیشرفته وب
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;