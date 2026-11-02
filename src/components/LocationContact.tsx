import React from 'react';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Share2, 
  Compass,
  CheckCircle2
} from 'lucide-react';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            Branch Location &amp; Contact
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Visit the Institute in Jule Solapur
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently situated in Vishal Nagar, Jule Solapur. Connect by phone, WhatsApp, or drop by during office hours for admissions.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Landmark Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-ivory-50 rounded-2xl p-7 border border-slate-200 shadow-soft-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold-700 uppercase tracking-widest block">
                    PHYSICAL ACADEMY CAMPUS
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-950">
                    Join Me Commerce Classes — Jule Solapur
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    First Floor, Kanishk Plaza, Above Annapurna Sweet Mart,<br />
                    Vishal Nagar, Jule Solapur,<br />
                    Solapur, Maharashtra 413004, India.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={INSTITUTE_INFO.contact.geo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                      Get Google Maps Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Quick Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Action */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-soft-sm space-y-3">
                <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call Directly</span>
                </div>
                <p className="text-xs text-slate-500">
                  Direct connection to Prof. Pradeep Bhandare Sir:
                </p>
                <a
                  href={INSTITUTE_INFO.contact.phoneHref}
                  className="block text-base font-bold text-navy-950 hover:text-emerald-700 transition-colors"
                >
                  {INSTITUTE_INFO.contact.phoneDisplay}
                </a>
                <a
                  href={INSTITUTE_INFO.contact.phoneHref}
                  className="inline-flex items-center text-xs font-semibold text-emerald-800 hover:underline"
                >
                  Tap to Dial Immediately →
                </a>
              </div>

              {/* WhatsApp Action */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-soft-sm space-y-3">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Official WhatsApp</span>
                </div>
                <p className="text-xs text-slate-500">
                  Instant messaging &amp; brochure requests:
                </p>
                <a
                  href={INSTITUTE_INFO.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-bold text-emerald-900 hover:underline"
                >
                  +91 98220 54180
                </a>
                <a
                  href={INSTITUTE_INFO.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Launch WhatsApp Chat →
                </a>
              </div>

            </div>

            {/* Verified Social Media Card */}
            <div className="bg-ivory-50 rounded-xl p-5 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-navy-950 block">Official Facebook Page</span>
                <span className="text-xs text-slate-500">1,400+ followers in local student network</span>
              </div>
              <a
                href={INSTITUTE_INFO.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
              >
                Visit Facebook
                <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
              </a>
            </div>

            {/* Commute & Transit Highlights */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2 text-xs text-slate-600">
              <span className="font-bold text-navy-950 block text-xs uppercase tracking-wider">
                Transit &amp; Landmark Tips:
              </span>
              <ul className="space-y-1.5">
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  <span><strong>Landmark:</strong> Directly on top of Annapurna Sweet Mart in Vishal Nagar.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  <span><strong>Parking:</strong> Ample two-wheeler parking available at Kanishk Plaza.</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                  <span><strong>Colleges Nearby:</strong> Convenient transit connection to prominent Solapur junior &amp; degree colleges.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Navigation Portal */}
          <div className="lg:col-span-6">
            <div className="bg-navy-950 rounded-2xl p-3 shadow-soft-lg border border-navy-850">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                {/* Embedded OpenStreetMap / Google Route Frame */}
                <iframe
                  title="Join Me Commerce Classes Location Map - Jule Solapur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.9961556059637!2d75.9022!3d17.6515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDM5JzA1LjQiTiA3NcKwNTQnMDcuOSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[1.05]"
                ></iframe>

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-navy-950/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-navy-700 text-xs shadow-md">
                  <span className="font-bold text-gold-400 block text-[11px] uppercase tracking-wider">
                    Jule Solapur Hub
                  </span>
                  <span className="text-white font-medium text-xs">
                    Kanishk Plaza, First Floor
                  </span>
                </div>

                {/* Direct Google Maps Opener Bottom Bar */}
                <div className="absolute bottom-4 right-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-bold text-navy-950 block">Coordinates: 17.6515° N, 75.9022° E</span>
                    <span className="text-[11px] text-slate-500">Kanishk Plaza, Vishal Nagar, Solapur</span>
                  </div>
                  <a
                    href={INSTITUTE_INFO.contact.geo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
                  >
                    Open in Maps App
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="p-3 text-center">
                <span className="text-[11px] text-slate-400">
                  Google Maps listing: <a href={INSTITUTE_INFO.contact.geo.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">Join Me Commerce Classes Jule Solapur</a>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
