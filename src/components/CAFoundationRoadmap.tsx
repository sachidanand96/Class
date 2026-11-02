import React from 'react';
import { CA_FOUNDATION_PAPERS, CA_ROADMAP_MILESTONES } from '../data/caRoadmap';
import { 
  FileSpreadsheet, 
  Scale, 
  Calculator, 
  TrendingUp, 
  Milestone, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface CAFoundationRoadmapProps {
  onSelectCourseForEnquiry: (courseId: string) => void;
}

export const CAFoundationRoadmap: React.FC<CAFoundationRoadmapProps> = ({ onSelectCourseForEnquiry }) => {
  const getPaperIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <Scale className="w-5 h-5 text-gold-600" />;
      case 2:
        return <Calculator className="w-5 h-5 text-navy-600" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="ca-foundation" className="py-14 lg:py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-850">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-850 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
            <Milestone className="w-3.5 h-3.5 mr-1" />
            Chartered Accountancy Pathway
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The CA Foundation Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Understand how Class 11th and 12th Commerce build directly into India's premier financial profession. Structured guidance from Solapur to the national entrance stage.
          </p>
        </div>

        {/* Milestone Pathway: 4 Stages */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
            Academic Journey from School to CA Foundation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CA_ROADMAP_MILESTONES.map((mile, idx) => (
              <div
                key={idx}
                className="bg-navy-900/80 rounded-xl p-5 border border-navy-800 hover:border-gold-500/50 transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gold-400 tracking-wider">
                      {mile.phase}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-navy-800 px-2 py-0.5 rounded">
                      {mile.timeline}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    {mile.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mile.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy-800/80">
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                    ● {mile.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 ICAI Papers Grid */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 border-b border-navy-800 gap-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                ICAI Examination Structure: The 4 Foundation Papers
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Aligned with the Institute of Chartered Accountants of India (ICAI) New Scheme syllabus
              </p>
            </div>
            <button
              onClick={() => onSelectCourseForEnquiry('ca-foundation')}
              className="inline-flex items-center text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Enquire for CA Foundation Batch
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CA_FOUNDATION_PAPERS.map((paper, idx) => (
              <div
                key={idx}
                className="bg-navy-900 rounded-xl p-5 sm:p-6 border border-navy-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center">
                        {getPaperIcon(idx)}
                      </div>
                      <span className="font-serif font-bold text-base sm:text-lg text-white">
                        {paper.paperNumber}: {paper.title}
                      </span>
                    </div>
                  </div>
                  
                  <span className="inline-block text-xs font-semibold text-gold-300 bg-gold-950/60 border border-gold-800/40 px-2.5 py-0.5 rounded-full mb-3">
                    {paper.weightage}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    <strong>Curriculum Scope:</strong> {paper.scope}
                  </p>
                </div>

                <div className="bg-navy-950/70 rounded-lg p-3 border border-navy-800/80 text-xs">
                  <span className="text-emerald-400 font-bold block mb-0.5">
                    Coaching Focus:
                  </span>
                  <span className="text-slate-300">
                    {paper.preparationAdvice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="bg-navy-900/60 rounded-xl p-4 sm:p-5 border border-navy-800 flex items-start space-x-3 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">ICAI Regulatory Information:</strong> Examination schedules, provisional registration cutoffs, and formal regulations are administered solely by the Institute of Chartered Accountants of India (ICAI). Prospective students should confirm specific eligibility dates with ICAI or consult Prof. Bhandare during enrollment.
          </p>
        </div>

      </div>
    </section>
  );
};
