import React from 'react';
import { SUBJECTS } from '../data/subjects';
import { 
  Calculator, 
  TrendingUp, 
  Briefcase, 
  FileText, 
  BookMarked, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

export const SubjectMastery: React.FC = () => {
  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-emerald-700" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-gold-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-navy-700" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-emerald-800" />;
      default:
        return <BookMarked className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="subjects" className="py-16 lg:py-24 bg-ivory-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold uppercase tracking-wider border border-gold-200">
            <BookMarked className="w-3.5 h-3.5 mr-1" />
            Core Academic Pillars
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            The Four Core Subjects of Commerce
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Commerce is not just theory; it is the universal language of business, capital allocation, and financial governance. We build conceptual rigor across each discipline.
          </p>
        </div>

        {/* 4 Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft-sm hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Code */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-ivory-100 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSubjectIcon(subject.iconName)}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
                    {subject.shortCode}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-emerald-800 transition-colors">
                  {subject.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {subject.description}
                </p>

                {/* Core Concepts */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Key Topics &amp; Examination Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {subject.coreConcepts.map((concept, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mr-1.5 mt-0.5" />
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Career Relevance */}
              <div className="pt-4 border-t border-slate-100 bg-ivory-50/50 -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-5 sm:px-8 rounded-b-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 block mb-0.5">
                  Career Relevance &amp; Pathways:
                </span>
                <p className="text-xs text-slate-600">
                  {subject.careerRelevance}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
