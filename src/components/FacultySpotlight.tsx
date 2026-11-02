import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Phone, 
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';

export const FacultySpotlight: React.FC = () => {
  return (
    <section id="faculty" className="py-16 lg:py-24 bg-ivory-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <GraduationCap className="w-3.5 h-3.5 mr-1" />
            Academic Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Academic Mentorship &amp; Direction
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Direct teaching, personal evaluation, and consistent guidance for commerce students in Jule Solapur.
          </p>
        </div>

        {/* Faculty Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-soft-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Graphic Monogram & Academic Portrait Frame */}
            <div className="md:col-span-5 bg-navy-950 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="relative z-10 w-full max-w-[260px]">
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
              <div className="mt-4 text-center">
                <span className="inline-block text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
                  Verified Institute Director
                </span>
              </div>
            </div>

            {/* Right Column: Verified Details & Academic Scope */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                      Founder &amp; Academic Director
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                    {INSTITUTE_INFO.director.name} {INSTITUTE_INFO.director.honorific}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Join Me Commerce Classes • Jule Solapur Branch
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Prof. Pradeep Bhandare Sir heads the academic instruction and curriculum design at Join Me Commerce Classes. Known throughout Solapur’s student community for his structured pedagogical approach to Bookkeeping, Accountancy, and Commerce fundamentals, he mentors students directly through board exams and professional foundation gateways.
                </p>

                {/* Verified Teaching Attributes */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Core Areas of Instruction &amp; Guidance:
                  </span>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>Accountancy Concept Drill:</strong> Step-by-step mastery of journal, ledger, and balance sheet formulation.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>HSC Maharashtra Board Focus:</strong> Answer-writing blueprints aligned with Solapur divisional board standards.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mr-2 mt-0.5" />
                      <span><strong>CA Foundation Mentorship:</strong> Analytical problem solving and preparation strategies for national accounting exams.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation / Direct Contact */}
              <div className="pt-5 border-t border-slate-200">
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
                      <Phone className="w-3.5 h-3.5 mr-1 text-gold-400" />
                      Call Sir
                    </a>
                    <a
                      href={INSTITUTE_INFO.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      WhatsApp
                    </a>
                  </div>
                </div>
                
                {/* Client Verification Disclaimer Note */}
                <div className="mt-4 flex items-start space-x-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    * Note for Institute Management: Official faculty portraits, degrees, and full biographical tenure can be linked directly upon official client onboarding. No unverified qualifications have been fabricated.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
