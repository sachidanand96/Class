import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { COURSES } from '../data/courses';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-14 pb-16 lg:pb-12 border-t border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-navy-850">
          
          {/* Col 1: Institute Brand & Scope */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400 font-serif font-bold text-xl shadow-soft-sm">
                JM
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white tracking-tight leading-tight">
                  JOIN ME COMMERCE CLASSES
                </span>
                <span className="block text-[11px] font-sans font-bold tracking-widest text-gold-400 uppercase">
                  JULE SOLAPUR BRANCH
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Commerce academy in Jule Solapur providing classroom coaching for Class 11th &amp; 12th HSC Board, B.Com, BBA, and CA Foundation under the academic direction of <strong className="text-slate-200">Prof. Pradeep Bhandare Sir</strong>.
            </p>

            <div className="pt-1 flex items-center space-x-3">
              <a
                href={INSTITUTE_INFO.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-navy-850 transition-colors"
                title="Official Facebook Page"
              >
                f
              </a>
              <a
                href={INSTITUTE_INFO.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-navy-850 transition-colors"
                title="WhatsApp Inquiry"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={INSTITUTE_INFO.contact.geo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-850 transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 font-sans">
              Commerce Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="text-slate-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Subjects */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 font-sans">
              Subjects Taught
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Bookkeeping &amp; Accountancy</li>
              <li>Economics</li>
              <li>Organization of Commerce (OCM)</li>
              <li>Secretarial Practice (SP)</li>
              <li>CA Foundation Accounting</li>
              <li>Business Laws &amp; Quants</li>
            </ul>
          </div>

          {/* Col 4: Branch Address & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 font-sans">
              Jule Solapur Center
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              First Floor, Kanishk Plaza, Above Annapurna Sweet Mart, Vishal Nagar, Jule Solapur, Solapur, Maharashtra 413004.
            </p>
            <div className="pt-1 space-y-1.5 text-xs">
              <div className="flex items-center text-slate-300">
                <Phone className="w-3.5 h-3.5 mr-2 text-gold-400" />
                <a href={INSTITUTE_INFO.contact.phoneHref} className="hover:text-white font-semibold">
                  {INSTITUTE_INFO.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center text-emerald-400">
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                <a href={INSTITUTE_INFO.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp Direct Inquiry
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Join Me Commerce Classes — Jule Solapur Branch. All rights reserved.
          </p>
          <p className="text-slate-400 text-[11px]">
            First Floor, Kanishk Plaza, Vishal Nagar, Jule Solapur
          </p>
        </div>

      </div>
    </footer>
  );
};
