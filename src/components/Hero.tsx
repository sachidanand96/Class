import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Award, 
  BookCheck, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (courseId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle background ambient styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Academic Credential Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-soft-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-navy-900 tracking-wide">
                Jule Solapur Commerce Academy
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-600 font-medium">
                Academic Direction: <strong className="text-slate-800">{INSTITUTE_INFO.director.name} Sir</strong>
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18]">
              Build Your Foundation in Commerce.{' '}
              <span className="text-emerald-800 block sm:inline font-serif italic">
                Prepare for What’s Next.
              </span>
            </h1>

            {/* Verified Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Specialized coaching for <strong className="text-navy-950 font-semibold">Class 11 &amp; 12 HSC Commerce</strong>,{' '}
              <strong className="text-navy-950 font-semibold">B.Com, BBA</strong>, and aspiring Chartered Accountants preparing for{' '}
              <strong className="text-emerald-800 font-semibold">CA Foundation</strong> in Jule, Solapur.
            </p>

            {/* Core Verification Badges (Non-fabricated) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Concept-First Double Entry:</strong> Master debit/credit logic from fundamentals
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Board &amp; CA Foundation:</strong> HSC exam answers + professional problem solving
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Full Subject Coverage:</strong> Accounts, Economics, OCM &amp; Secretarial Practice
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Accessible Location:</strong> First Floor, Kanishk Plaza, Vishal Nagar
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                Enquire About Classes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-navy-950 font-semibold text-sm border border-slate-300 shadow-soft-sm transition-all duration-200"
              >
                Explore Courses &amp; Syllabi
              </a>

              <a
                href={INSTITUTE_INFO.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-1.5 text-emerald-700" />
                Quick WhatsApp
              </a>
            </div>

            {/* Solapur Trust Metric Ribbon */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">4.8 / 5.0</span>
                  <span className="text-slate-500 text-[11px]">75 Reviews on Local Directories</span>
                </div>
              </div>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-navy-900 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Jule Solapur Landmark</span>
                  <span className="text-slate-500 text-[11px]">Above Annapurna Sweet Mart</span>
                </div>
              </div>

              <div className="h-6 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span className="text-[11px]">Verified Academic Lead Dossier</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition / Academic Heritage Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card shadow */}
              <div className="absolute inset-0 bg-navy-950 rounded-2xl transform rotate-1 scale-102 opacity-10 blur-md"></div>
              
              <div className="relative bg-navy-950 rounded-2xl p-2.5 shadow-2xl border border-navy-850 overflow-hidden">
                <img 
                  src="/images/hero/hero-commerce-academy.svg" 
                  alt="Join Me Commerce Classes Academic Lecture Board and Accounting Framework in Jule Solapur"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="eager"
                  width="1200"
                  height="800"
                />

                {/* Floating Bottom Card Over Image */}
                <div className="mt-2.5 bg-navy-900/90 backdrop-blur-md rounded-xl p-3.5 border border-navy-800 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
                        Direct Instruction
                      </span>
                      <p className="text-sm font-semibold text-white">
                        Prof. Pradeep Bhandare Sir
                      </p>
                      <p className="text-xs text-slate-300">
                        Senior Commerce &amp; Accountancy Mentor
                      </p>
                    </div>
                    <a
                      href={INSTITUTE_INFO.contact.phoneHref}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      Call +91 98220 54180
                    </a>
                  </div>
                </div>

              </div>

              {/* Sub-card note */}
              <p className="text-[11px] text-slate-500 text-center mt-2 italic">
                * Conceptual visual demonstration. Photo clearance workflow documented in Asset Manifest.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
