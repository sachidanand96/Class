import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  Users, 
  CheckCircle, 
  Compass,
  FileCheck
} from 'lucide-react';

interface CourseExplorerProps {
  onSelectCourseForEnquiry: (courseId: string) => void;
}

export const CourseExplorer: React.FC<CourseExplorerProps> = ({ onSelectCourseForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Higher Secondary' | 'Professional Foundation' | 'Undergraduate'>('All');

  const categories = ['All', 'Higher Secondary', 'Professional Foundation', 'Undergraduate'] as const;

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Compass className="w-3.5 h-3.5 mr-1" />
            Curriculum &amp; Programs
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Academic Programs for Solapur Commerce Students
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From foundational Class 11 concepts to national-level CA Foundation preparation, explore structured commerce coaching designed for clarity and academic performance.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Programs (5)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="bg-ivory-50/60 rounded-2xl border border-slate-200 hover:border-emerald-600/60 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-navy-900 text-white">
                    {course.code}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {course.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-emerald-800 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {course.headline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                {/* Target Student Audience */}
                <div className="bg-white/80 rounded-lg p-3 border border-slate-200/80 text-xs">
                  <span className="font-bold text-navy-950 block mb-0.5 flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1 text-gold-600" />
                    Intended Audience:
                  </span>
                  <span className="text-slate-600 leading-normal">
                    {course.targetAudience}
                  </span>
                </div>

                {/* Subjects Covered */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Curriculum Focus:
                  </span>
                  <ul className="space-y-1.5">
                    {course.subjects.map((sub, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mr-1.5 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Batch info & Action buttons */}
              <div className="p-6 sm:p-7 bg-white border-t border-slate-200/80 space-y-4">
                <div className="flex items-center text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
                  <span>{course.batchInfo}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectCourseForEnquiry(course.id)}
                    className="w-full inline-flex items-center justify-center px-3 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-colors"
                  >
                    Enquire Now
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>

                  <a
                    href={`https://wa.me/919822054180?text=${encodeURIComponent(course.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-3 py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-3 h-3 mr-1 text-emerald-600" />
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Section Transparency Note */}
        <div className="mt-12 text-center text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-2xl mx-auto">
          <p>
            ℹ️ <strong>Admission Policy:</strong> Fee structures, seat availability, and specific batch timetables are shared directly upon in-person consultation or verified inquiry with Prof. Pradeep Bhandare Sir at the Kanishk Plaza center.
          </p>
        </div>

      </div>
    </section>
  );
};
