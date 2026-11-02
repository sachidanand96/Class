import React, { useState, useEffect } from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (courseId?: string) => void;
  onOpenManifest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenManifest }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Subjects', href: '#subjects' },
    { label: 'CA Foundation', href: '#ca-foundation' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Institute Identity */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-600/40 flex items-center justify-center text-gold-400 font-serif font-bold text-xl shadow-soft-sm group-hover:bg-navy-850 transition-colors">
              JM
            </div>
            <div>
              <span className="block font-serif font-bold text-lg text-navy-950 tracking-tight leading-tight group-hover:text-emerald-800 transition-colors">
                JOIN ME
              </span>
              <span className="block text-[11px] font-sans font-bold tracking-widest text-gold-700 uppercase">
                COMMERCE CLASSES
              </span>
              <span className="block text-[10px] text-slate-500 font-medium -mt-0.5">
                Jule Solapur Branch
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={INSTITUTE_INFO.contact.phoneHref}
              className="inline-flex items-center text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg border border-slate-300/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-navy-800" />
              Call Office
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Enquire Now
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-100 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-emerald-700 text-white font-medium text-sm hover:bg-emerald-800 shadow-sm"
              >
                Admission Enquiry Form
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={INSTITUTE_INFO.contact.phoneHref}
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-slate-100 text-navy-950 font-medium text-xs border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 text-gold-600" />
                  Call Directly
                </a>
                <a
                  href={INSTITUTE_INFO.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-emerald-50 text-emerald-800 font-medium text-xs border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
