import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Send } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

interface FloatingContactWidgetProps {
  onOpenEnquiry: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenEnquiry }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-navy-950 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all focus:outline-none"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center space-x-2 bg-navy-950/95 backdrop-blur-md p-1.5 rounded-full border border-navy-800 shadow-xl">
        {/* Direct Call */}
        <a
          href={INSTITUTE_INFO.contact.phoneHref}
          className="flex items-center px-3.5 py-2 rounded-full bg-navy-900 hover:bg-navy-850 text-white text-xs font-semibold transition-colors"
          title="Call Prof. Pradeep Bhandare Sir (+91 98220 54180)"
        >
          <Phone className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
          <span className="hidden sm:inline">Call Sir</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={INSTITUTE_INFO.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquiry Form Jump */}
        <button
          onClick={onOpenEnquiry}
          className="hidden sm:flex items-center px-3.5 py-2 rounded-full bg-white hover:bg-slate-100 text-navy-950 text-xs font-bold transition-colors"
          title="Open Admission Inquiry Form"
        >
          <Send className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
          <span>Enquire</span>
        </button>
      </div>
    </aside>
  );
};
