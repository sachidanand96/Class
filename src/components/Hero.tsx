import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Star,
  MessageSquare,
  Building2
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200/60">
      {/* Subtle background ambient styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Academic Credential Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-soft-sm text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="font-semibold text-navy-900 tracking-wide">
                Jule Solapur Commerce Academy
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">
                Academic Direction: <strong className="text-slate-900">{INSTITUTE_INFO.director.name} Sir</strong>
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18] max-w-2xl">
              Build Your Foundation in Commerce.{' '}
              <span className="text-emerald-800 block sm:inline font-serif italic">
                Prepare for What’s Next.
              </span>
            </h1>

            {/* Verified Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Specialized coaching for <strong className="text-navy-950 font-semibold">Class 11 &amp; 12 HSC Commerce</strong>,{' '}
              <strong className="text-navy-950 font-semibold">B.Com, BBA</strong>, and aspiring Chartered Accountants preparing for{' '}
              <strong className="text-emerald-800 font-semibold">CA Foundation</strong> in Jule, Solapur.
            </p>

            {/* Compact, Highly Scannable 4 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center space-x-2 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-lg border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  <strong>Concept-First Accounting:</strong> Core debit/credit logic
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-lg border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  <strong>HSC &amp; CA Foundation:</strong> Board &amp; entrance focus
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-lg border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  <strong>4 Core Subjects:</strong> Accounts, Economics, OCM &amp; SP
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-lg border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  <strong>Jule Solapur Hub:</strong> First Floor, Kanishk Plaza
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                Enquire About Classes
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-navy-950 font-semibold text-sm border border-slate-300 shadow-soft-sm transition-all duration-200"
              >
                Explore Courses
              </a>

              <a
                href={INSTITUTE_INFO.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
                WhatsApp Inquiry
              </a>
            </div>

            {/* Solapur Trust Ribbon */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-xs sm:text-sm">4.8 / 5.0 Rating</span>
                  <span className="text-slate-500 text-[11px]">75 Reviews on Local Directories</span>
                </div>
              </div>

              <div className="h-5 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-xs">Vishal Nagar, Jule Solapur</span>
                  <span className="text-slate-500 text-[11px]">Above Annapurna Sweet Mart</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative bg-navy-950 rounded-2xl p-2.5 shadow-2xl border border-navy-850 overflow-hidden">
                <img 
                  src="/images/hero/hero-commerce-academy.svg" 
                  alt="Join Me Commerce Classes Academic Curriculum and Commerce Programs in Jule Solapur"
                  className="w-full h-auto rounded-xl object-cover block"
                  loading="eager"
                  width={900}
                  height={650}
                  style={{ aspectRatio: '900 / 650' }}
                />

                {/* Floating Bottom Card Over Image */}
                <div className="mt-2.5 bg-navy-900/95 backdrop-blur-md rounded-xl p-3.5 border border-navy-800 text-left">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
                        Academic Mentor
                      </span>
                      <p className="text-sm font-semibold text-white">
                        Prof. Pradeep Bhandare Sir
                      </p>
                      <p className="text-xs text-slate-300">
                        Founder &amp; Academic Director
                      </p>
                    </div>
                    <a
                      href={INSTITUTE_INFO.contact.phoneHref}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
                    >
                      Call Center
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
