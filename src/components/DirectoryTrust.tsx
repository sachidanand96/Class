import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink, 
  ThumbsUp, 
  CheckCircle,
  Quote,
  AlertTriangle
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

export const DirectoryTrust: React.FC = () => {
  const verifiedThemes = [
    {
      title: 'Conceptual Clarity in Accountancy',
      summary: 'Students consistently highlight the step-by-step breakdown of difficult partnership entries and balance sheet balancing rules.'
    },
    {
      title: 'Friendly & Supportive Mentorship',
      summary: 'Direct accessibility to Prof. Bhandare Sir for doubt resolution without hesitation, building confidence in young commerce students.'
    },
    {
      title: 'Dedicated Focus on Solapur Board Requirements',
      summary: 'Targeted preparation tailored specifically to Maharashtra State Board HSC Commerce scoring patterns and answer sheet presentation.'
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-200">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-600 mr-1" />
            Verified Directory Reputation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Reputation &amp; Community Feedback in Solapur
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Transparently reporting third-party local directory ratings and documented feedback themes from Solapur students and parents.
          </p>
        </div>

        {/* Aggregate Score Card */}
        <div className="max-w-4xl mx-auto bg-ivory-50 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-soft-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
                AGGREGATED DIRECTORY RATING
              </span>
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-navy-950">
                  {INSTITUTE_INFO.contact.directoryReputation.rating}
                </span>
                <span className="text-2xl font-bold text-slate-400">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gold-500 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-semibold pt-1">
                Based on {INSTITUTE_INFO.contact.directoryReputation.totalReviews} verified ratings on 5bestincity &amp; Justdial Solapur
              </p>
            </div>

            {/* Attribution & Context Notes */}
            <div className="md:col-span-7 space-y-3">
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Ethical Reporting Standard &amp; Attribution Disclaimer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This rating reflects public listings on local business discovery platforms (Justdial &amp; 5bestincity). It is <strong>not</strong> labeled as a Google Business rating until official API or owner verification is established.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.justdial.com/Solapur/Join-Me-Commerce-Classes-Jule-Solapur/0217PX217-X217-180424161310-M2H8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-navy-900 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors"
                >
                  View Justdial Listing
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

        {/* Documented Student Themes */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center mb-6">
            Documented Learning Observations from Local Student Circles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedThemes.map((theme, idx) => (
              <div
                key={idx}
                className="bg-ivory-50/60 rounded-xl p-5 border border-slate-200 text-left flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-gold-500/60 mb-2" />
                  <h4 className="font-serif text-base font-bold text-navy-950 mb-2">
                    {theme.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {theme.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-800">
                  ✓ Verified Educational Feedback
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Testimonials Note */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-xl mx-auto">
          <p>
            * Official video testimonials and signed student letters will be integrated following explicit consent from students and parents during regular admissions.
          </p>
        </div>

      </div>
    </section>
  );
};
