import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

export const AchievementsResults: React.FC = () => {
  return (
    <section id="results" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-200">
            <Trophy className="w-3.5 h-3.5 mr-1" />
            Academic Distinction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Student Achievements &amp; Board Results
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Showcasing excellence in Maharashtra State Board HSC Commerce examinations and ICAI CA Foundation qualifications.
          </p>
        </div>

        {/* Honor Board Visual Graphic Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-slate-200">
            <img 
              src="/images/achievements/achievements-merit-board.svg" 
              alt="Join Me Commerce Classes Academic Merit Board and Results Showcase in Jule Solapur"
              className="w-full h-auto block"
              loading="lazy"
              width={900}
              height={550}
              style={{ aspectRatio: '900 / 550' }}
            />
          </div>
        </div>

        {/* Transparency & Ready-To-Populate Architecture */}
        <div className="max-w-4xl mx-auto bg-ivory-50 rounded-2xl p-7 sm:p-9 border border-slate-200">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  Ready-to-Deploy Merit Roll Architecture
                </h3>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Ethical Presentation Standard
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In strict accordance with academic integrity and ethical advertising principles, Join Me Commerce Classes does not publish unverified student scores, synthetic testimonials, or simulated exam topper photographs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-navy-950 block mb-1">
                    1. HSC Board Toppers
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Slot for certified marksheets, 90%+ achievers &amp; Solapur district rankings.
                  </p>
                </div>
                
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-navy-950 block mb-1">
                    2. CA Foundation Rankers
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Slot for ICAI qualification roll numbers, passing certificates &amp; student stories.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-navy-950 block mb-1">
                    3. Accountancy Centums
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Slot for 100/100 subject scorers in Bookkeeping &amp; Accountancy board papers.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center">
                <Info className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                <span>
                  Official student records will be published directly from Prof. Bhandare’s verified coaching register upon production launch.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
