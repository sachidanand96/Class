import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

export const AchievementsResults: React.FC = () => {
  return (
    <section id="results" className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-200">
            <Trophy className="w-3.5 h-3.5 mr-1" />
            Academic Distinction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Academic Standards &amp; Examination Preparation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Building rigorous examination temperament for Maharashtra State Board HSC Commerce and ICAI CA Foundation.
          </p>
        </div>

        {/* Milestone Visual Graphic */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-slate-200">
            <img 
              src="/images/achievements/achievements-merit-board.svg" 
              alt="Join Me Commerce Classes Academic Standards and Board Examination Preparation in Jule Solapur"
              className="w-full h-auto block"
              loading="lazy"
              width={900}
              height={550}
              style={{ aspectRatio: '900 / 550' }}
            />
          </div>
        </div>

        {/* Three Pillars of Examination Excellence */}
        <div className="max-w-4xl mx-auto bg-ivory-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
              <h3 className="font-serif text-xl font-bold text-navy-950">
                Examination Readiness &amp; Performance Review
              </h3>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
                Solapur Center Guidance
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We prepare commerce students through systematic evaluation, preliminary test series, and personalized review of answer-sheet presentation for maximum board marks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft-sm">
                <span className="text-xs font-bold text-navy-950 block mb-1">
                  1. HSC Board Prelims
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-length preliminary test papers simulating actual Maharashtra State Board conditions.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft-sm">
                <span className="text-xs font-bold text-navy-950 block mb-1">
                  2. CA Foundation Gateway
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured analytical drills for accounting standards, mercantile laws, and time management.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft-sm">
                <span className="text-xs font-bold text-navy-950 block mb-1">
                  3. Accountancy Scoring
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep focus on error-free working notes, journal formatting, and balance sheet reconciliation.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>
                Prospective parents and students are welcome to review previous board examination blueprints, sample solution sets, and student performance records at our center.
              </span>
              <a
                href={INSTITUTE_INFO.contact.phoneHref}
                className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
              >
                Inquire at Center →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
