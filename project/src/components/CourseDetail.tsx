import React from 'react';
import { ArrowRight, Play, Clock, Users, Star, Download, CheckCircle } from 'lucide-react';

interface CourseDetailProps {
  courseId: string;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface CourseData {
  id: number;
  title: string;
  level: string;
  description: string;
  fullDescription: string;
  duration: string;
  students: string;
  rating: number;
  instructor: string;
  color: string;
  lessons: Lesson[];
  requirements: string[];
  whatYouLearn: string[];
}

const courseData: { [key: string]: CourseData } = {
  '1': {
    id: 1,
    title: "جاوا مقدماتی",
    level: "مبتدی",
    description: "شروع از صفر، اصول پایه و اولین برنامه‌هایت",
    fullDescription: "این دوره جامع جاوا برای مبتدیان طراحی شده که می‌خواهند از صفر شروع کنند. در این دوره با مفاهیم پایه‌ای برنامه‌نویسی، سینتکس جاوا، و ساخت اولین برنامه‌هایتان آشنا خواهید شد.",
    duration: "۲۰ ساعت",
    students: "۱,۲۳۴",
    rating: 4.9,
    instructor: "NOCTOVEX",
    color: "from-orange-500 to-red-500",
    lessons: [
      { id: 1, title: "معرفی جاوا و نصب محیط توسعه", duration: "۱۵ دقیقه", isCompleted: false },
      { id: 2, title: "اولین برنامه Hello World", duration: "۲۰ دقیقه", isCompleted: false },
      { id: 3, title: "متغیرها و انواع داده", duration: "۳۰ دقیقه", isCompleted: false },
      { id: 4, title: "عملگرها و عبارات", duration: "۲۵ دقیقه", isCompleted: false },
      { id: 5, title: "ساختارهای کنترل - if/else", duration: "۳۵ دقیقه", isCompleted: false },
      { id: 6, title: "حلقه‌ها - for و while", duration: "۴۰ دقیقه", isCompleted: false },
      { id: 7, title: "آرایه‌ها و کار با آن‌ها", duration: "۴۵ دقیقه", isCompleted: false },
      { id: 8, title: "متدها و توابع", duration: "۵۰ دقیقه", isCompleted: false },
    ],
    requirements: [
      "هیچ پیش‌نیاز خاصی ندارد",
      "علاقه به یادگیری برنامه‌نویسی",
      "کامپیوتر با اتصال اینترنت"
    ],
    whatYouLearn: [
      "مفاهیم پایه‌ای برنامه‌نویسی",
      "سینتکس و ساختار زبان جاوا",
      "کار با متغیرها و انواع داده",
      "ساختارهای کنترل و حلقه‌ها",
      "نوشتن توابع و متدها",
      "کار با آرایه‌ها",
      "اصول کدنویسی تمیز"
    ]
  },
  '4': {
    id: 4,
    title: "پایتون مقدماتی",
    level: "مبتدی",
    description: "یادگیری پایه‌ها، سینتکس، اولین پروژه‌ها",
    fullDescription: "دوره جامع پایتون برای مبتدیان که می‌خواهند وارد دنیای برنامه‌نویسی شوند. پایتون یکی از محبوب‌ترین و آسان‌ترین زبان‌های برنامه‌نویسی است که در حوزه‌های مختلف کاربرد دارد.",
    duration: "۱۸ ساعت",
    students: "۲,۱۵۶",
    rating: 4.8,
    instructor: "NOCTOVEX",
    color: "from-green-500 to-emerald-500",
    lessons: [
      { id: 1, title: "معرفی پایتون و نصب", duration: "۱۲ دقیقه", isCompleted: false },
      { id: 2, title: "اولین برنامه و Print", duration: "۱۸ دقیقه", isCompleted: false },
      { id: 3, title: "متغیرها و انواع داده", duration: "۲۸ دقیقه", isCompleted: false },
      { id: 4, title: "رشته‌ها و کار با متن", duration: "۳۲ دقیقه", isCompleted: false },
      { id: 5, title: "لیست‌ها و تاپل‌ها", duration: "۳۸ دقیقه", isCompleted: false },
      { id: 6, title: "دیکشنری‌ها و مجموعه‌ها", duration: "۳۵ دقیقه", isCompleted: false },
      { id: 7, title: "شرط‌ها و تصمیم‌گیری", duration: "۳۰ دقیقه", isCompleted: false },
      { id: 8, title: "حلقه‌ها و تکرار", duration: "۴۲ دقیقه", isCompleted: false },
    ],
    requirements: [
      "هیچ تجربه قبلی لازم نیست",
      "انگیزه برای یادگیری",
      "کامپیوتر یا لپ‌تاپ"
    ],
    whatYouLearn: [
      "مبانی برنامه‌نویسی با پایتون",
      "کار با انواع داده مختلف",
      "ساختارهای داده پایتون",
      "کنترل جریان برنامه",
      "نوشتن توابع",
      "کار با فایل‌ها",
      "پروژه‌های عملی"
    ]
  }
};

const CourseDetail: React.FC<CourseDetailProps> = ({ courseId }) => {
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl">دوره یافت نشد</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gray-900 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <ArrowRight className="w-6 h-6" />
            <span className="text-lg font-semibold">بازگشت به دوره‌ها</span>
          </button>
        </header>

        {/* Course Hero */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Course Info */}
              <div className="lg:col-span-2">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
                  {/* Course Badge */}
                  <div className={`inline-block px-6 py-3 bg-gradient-to-r ${course.color} rounded-full text-white text-lg font-bold mb-6 animate-pulse`}>
                    {course.level}
                  </div>

                  {/* Course Title */}
                  <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {course.title}
                  </h1>

                  {/* Course Description */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {course.fullDescription}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl">
                      <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">{course.duration}</div>
                      <div className="text-gray-400 text-sm">مدت دوره</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-xl">
                      <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">{course.students}</div>
                      <div className="text-gray-400 text-sm">دانشجو</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-xl">
                      <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">{course.rating}</div>
                      <div className="text-gray-400 text-sm">امتیاز</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-600/20 to-transparent rounded-xl">
                      <Download className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">رایگان</div>
                      <div className="text-gray-400 text-sm">قیمت</div>
                    </div>
                  </div>

                  {/* Start Course Button */}
                  <button className={`w-full py-6 bg-gradient-to-r ${course.color} text-white text-2xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative flex items-center justify-center gap-4">
                      <Play className="w-8 h-8" />
                      شروع دوره
                    </div>
                  </button>
                </div>

                {/* What You'll Learn */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-6">چی یاد می‌گیری؟</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">پیش‌نیازها</h2>
                  <div className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Content Sidebar */}
              <div className="lg:col-span-1">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 sticky top-6">
                  <h3 className="text-2xl font-bold text-white mb-6">محتوای دوره</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {course.lessons.map((lesson, index) => (
                      <div key={lesson.id} className="group p-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            lesson.isCompleted 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-700 text-gray-300 group-hover:bg-purple-600 group-hover:text-white'
                          } transition-colors duration-300`}>
                            {lesson.isCompleted ? '✓' : index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm leading-tight group-hover:text-purple-400 transition-colors duration-300">
                              {lesson.title}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mr-11">
                          <Clock className="w-3 h-3" />
                          {lesson.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;