import React from 'react';
import { 
  Building2, 
  Target, 
  MapPin, 
  Layers, 
  Compass, 
  ShieldCheck, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: '100% Pure Commerce Specialization',
      tagline: 'No stream dilution, no mixed focus',
      description: 'Unlike multi-stream tuition centers that treat commerce as a secondary offering, Join Me Commerce Classes is exclusively dedicated to commerce, accounting, and financial education.',
      icon: Target
    },
    {
      title: 'Ground-Zero Accounting Logic',
      tagline: 'Conceptual double-entry mastery',
      description: 'We demystify debit and credit from first principles. Students learn the mechanical and business reality behind journal entries, ledgers, and final balance sheets.',
      icon: Layers
    },
    {
      title: 'Continuity from 11th to CA Foundation',
      tagline: 'Single academic home across milestones',
      description: 'Students do not need to switch academies. We guide them seamlessly through Class 11 FYJC, Class 12 SYJC board examinations, undergraduate studies, and CA Foundation entrance.',
      icon: Compass
    },
    {
      title: 'Accessible Jule Solapur Location',
      tagline: 'First Floor, Kanishk Plaza, Vishal Nagar',
      description: 'Centrally situated in Jule Solapur above Annapurna Sweet Mart with straightforward transit access for local students across Solapur’s residential and college zones.',
      icon: MapPin
    },
    {
      title: 'Mentorship Under Prof. Bhandare Sir',
      tagline: 'Accountability and direct interaction',
      description: 'Led personally by Prof. Pradeep Bhandare Sir, ensuring academic accountability, consistent evaluation, and personal guidance on subject difficulties.',
      icon: Users
    },
    {
      title: 'Transparent Academic Standards',
      tagline: 'Honest learning without inflated claims',
      description: 'We believe in verified academic dedication. We emphasize structured daily practice, board question solving, and ethical educational guidance.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Institutional Commitment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Why Commerce Students &amp; Parents Choose Join Me Classes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A focused environment built specifically around commerce rigor, conceptual clarity, and patient academic mentorship in Jule Solapur.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-ivory-50/70 rounded-2xl p-7 border border-slate-200 hover:border-emerald-600/60 hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center mb-5 text-emerald-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-gold-700 uppercase tracking-wider block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Education Statement Banner */}
        <div className="mt-14 bg-navy-950 text-slate-300 rounded-2xl p-7 border border-navy-900 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
              Verified Local Education Standard
            </p>
            <p className="text-xs text-slate-400 max-w-xl">
              Our reputation in Jule Solapur is built through consistent classroom teaching, regular tests, and parental trust — not through unverified slogans or commercial hype.
            </p>
          </div>
          <a
            href={INSTITUTE_INFO.contact.phoneHref}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
          >
            Speak With Us Directly
          </a>
        </div>

      </div>
    </section>
  );
};
