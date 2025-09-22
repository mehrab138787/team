import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  course: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "علی محمدی",
    course: "پایتون پیشرفته",
    text: "دوره NOCTOVEX باعث شد اولین اپلیکیشنم رو بسازم! روش تدریسش فوق‌العاده بود.",
    rating: 5,
    avatar: "🧑‍💻"
  },
  {
    id: 2,
    name: "فاطمه احمدی",
    course: "جاوا متوسط",
    text: "بهترین سرمایه‌گذاری تو زندگیم بود. الان توی شرکت بزرگی کار می‌کنم.",
    rating: 5,
    avatar: "👩‍💻"
  },
  {
    id: 3,
    name: "محمد رضایی",
    course: "پایتون مقدماتی",
    text: "از صفر شروع کردم و الان می‌تونم برنامه‌های پیچیده بنویسم. ممنونم NOCTOVEX!",
    rating: 5,
    avatar: "🧑‍🎓"
  },
  {
    id: 4,
    name: "زهرا کریمی",
    course: "جاوا پیشرفته",
    text: "کیفیت آموزش و پشتیبانی فوق‌العاده بود. حتماً دوره‌های بعدی رو هم می‌خرم.",
    rating: 5,
    avatar: "👩‍🎓"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            نظرات
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mx-3">
              دانشجویان
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ببین دانشجوهای ما چی می‌گن
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12 text-center glass-testimonial">
                    
                    {/* Avatar */}
                    <div className="mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 avatar-glow">
                        {testimonial.avatar}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-purple-400 font-semibold">
                        {testimonial.course}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-2 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl lg:text-2xl text-gray-300 italic leading-relaxed max-w-3xl mx-auto">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;