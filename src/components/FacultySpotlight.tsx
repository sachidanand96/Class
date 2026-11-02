import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  GraduationCap, 
  CheckCircle, 
  Phone, 
  MessageSquare
} from 'lucide-react';

export const FacultySpotlight: React.FC = () => {
  return (
    <section id="faculty" className="py-14 lg:py-20 bg-ivory-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <GraduationCap className="w-3.5 h-3.5 mr-1" />
            Academic Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Academic Mentorship &amp; Direction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct teaching, personal evaluation, and consistent guidance for commerce students in Jule Solapur.
          </p>
        </div>

        {/* Faculty Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-soft-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Graphic Monogram & Academic Portrait Frame */}
            <div className="md:col-span-5 bg-navy-950 p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="relative z-10 w-full max-w-[240px]">
                <img 
                  src="/images/faculty/faculty-director-placeholder.svg" 
                  alt="Prof. Pradeep Bhandare Sir - Founder and Academic Director of Join Me Commerce Classes"
                  className="w-full h-auto rounded-xl border border-navy-800 shadow-lg block"
                  loading="lazy"
                  width={600}
                  height={700}
                  style={{ aspectRatio: '600 / 700' }}
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block text-[11px] text-emerald-400 font-semibold uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
                  Founder &amp; Director
                </span>
              </div>
            </div>

            {/* Right Column: Verified Details & Academic Scope */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                    Founder &amp; Academic Director
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                    {INSTITUTE_INFO.director.name} {INSTITUTE_INFO.director.honorific}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Join Me Commerce Classes • Jule Solapur Branch
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Prof. Pradeep Bhandare Sir directs the academic instruction and curriculum at Join Me Commerce Classes. Known for his structured teaching of Bookkeeping, Accountancy, and Commerce fundamentals, he guides students through junior college board preparations and foundational professional commerce studies.
                </p>

                {/* Core Areas of Instruction */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Core Areas of Instruction &amp; Guidance:
                  </span>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>Bookkeeping &amp; Accountancy:</strong> Step-by-step conceptual mastery of journal, ledger, and balance sheet formulation.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>HSC Board Preparation:</strong> Answer-writing techniques aligned with Maharashtra State Board standards.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>CA Foundation Mentorship:</strong> Analytical problem-solving and structured preparation strategies for entrance examinations.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation / Direct Contact */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Academic Inquiries:</span>
                    <span className="text-sm font-bold text-navy-950">{INSTITUTE_INFO.contact.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={INSTITUTE_INFO.contact.phoneHref}
                      className="inline-flex items-center px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                      Call Center
                    </a>
                    <a
                      href={INSTITUTE_INFO.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                      WhatsApp
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
