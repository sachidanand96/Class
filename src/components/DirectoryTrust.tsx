import React from 'react';
import { 
  Star, 
  ExternalLink, 
  Quote
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

export const DirectoryTrust: React.FC = () => {
  const verifiedThemes = [
    {
      title: 'Conceptual Clarity in Accountancy',
      summary: 'Students highlight the step-by-step breakdown of difficult partnership entries and balance sheet balancing rules.'
    },
    {
      title: 'Approachable Academic Mentorship',
      summary: 'Direct accessibility to Prof. Bhandare Sir for doubt resolution, building conceptual confidence in students.'
    },
    {
      title: 'Maharashtra Board Alignment',
      summary: 'Focused preparation structured around Maharashtra State Board HSC Commerce scoring patterns and answer presentation.'
    }
  ];

  return (
    <section id="reviews" className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-200">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-600 mr-1" />
            Directory Feedback
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Community Reputation &amp; Student Feedback
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Public ratings and common feedback themes reported on local educational directories in Solapur.
          </p>
        </div>

        {/* Aggregate Score Card */}
        <div className="max-w-4xl mx-auto bg-ivory-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-soft-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-200 pb-5 md:pb-0 md:pr-6">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">
                AGGREGATED DIRECTORY RATING
              </span>
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-navy-950">
                  {INSTITUTE_INFO.contact.directoryReputation.rating}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gold-500 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-semibold pt-1">
                Based on {INSTITUTE_INFO.contact.directoryReputation.totalReviews} ratings across third-party local directories (Justdial &amp; 5bestincity)
              </p>
            </div>

            {/* Attribution & Context Notes */}
            <div className="md:col-span-7 space-y-3">
              <h3 className="font-serif text-base sm:text-lg font-bold text-navy-950">
                Directory Rating Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This rating reflects public listings on local business discovery platforms (Justdial and 5bestincity). It is clearly identified as third-party directory feedback rather than official Google reviews.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href="https://www.justdial.com/Solapur/Join-Me-Commerce-Classes-Jule-Solapur/0217PX217-X217-180424161310-M2H8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-navy-900 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors"
                >
                  View on Justdial
                  <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
                </a>
                <a
                  href="https://maps.google.com/?q=Join+Me+Commerce+Classes+Jule+Solapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-navy-900 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors"
                >
                  Google Maps Location
                  <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Student Feedback Observations */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {verifiedThemes.map((theme, idx) => (
              <div
                key={idx}
                className="bg-ivory-50/60 rounded-xl p-5 border border-slate-200 text-left flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-5 h-5 text-gold-500/60 mb-2" />
                  <h4 className="font-serif text-base font-bold text-navy-950 mb-1.5">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {theme.summary}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-800">
                  ✓ Documented Feedback Theme
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
