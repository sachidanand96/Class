import React from 'react';
import { ASSET_MANIFEST } from '../data/assetManifest';
import { X, FileCode, CheckCircle, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';

interface AssetManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetManifestModal: React.FC<AssetManifestModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-navy-950 text-white flex items-center justify-between border-b border-navy-850">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Website Asset Manifest &amp; Clearance Protocol
              </h3>
              <p className="text-xs text-slate-400">
                Documentation of illustrative media, copyright compliance, and client production handover
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Executive Protocol Summary */}
          <div className="bg-ivory-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Client Handover &amp; Asset Replacement Guide</span>
            </div>
            <p>
              In accordance with Google Maps, third-party platform copyright terms, and ethical advertising standards, all images in this demonstration concept are curated conceptual SVG vectors or licensed illustrative placeholders. No unverified photos from Google Maps have been scraped without written permission from the owner.
            </p>
            <p className="font-semibold text-emerald-800">
              👉 Replacing these placeholders with official high-resolution photographs of Join Me Commerce Classes (Kanishk Plaza classroom, Prof. Bhandare’s studio portrait, and verified topper marksheets) requires simply copying the images into the corresponding directory.
            </p>
          </div>

          {/* Table of Assets */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-soft-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
              <thead className="bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-4 py-3">Asset File</th>
                  <th className="px-4 py-3">Intended Section</th>
                  <th className="px-4 py-3">Source &amp; License</th>
                  <th className="px-4 py-3">Production Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {ASSET_MANIFEST.map((asset, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-mono text-[11px] text-navy-950 font-bold">
                      {asset.filename}
                    </td>
                    <td className="px-4 py-3 text-slate-700 font-medium">
                      {asset.intendedSection}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-xs">
                      <div className="font-medium text-slate-800">{asset.license}</div>
                      <div className="text-[10px] text-slate-400 truncate">{asset.sourceUrl}</div>
                    </td>
                    <td className="px-4 py-3">
                      {asset.productionReady ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle className="w-3 h-3 mr-1" /> Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          <AlertTriangle className="w-3 h-3 mr-1" /> Concept Placeholder
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Directory Folder Layout */}
          <div className="bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs">
            <div className="text-slate-400 mb-2 font-bold uppercase tracking-wider text-[11px]">
              📁 Production Asset Directory Mapping:
            </div>
            <pre className="text-[11px] text-emerald-400 leading-relaxed overflow-x-auto">
{`public/images/
├── hero/          --> hero-commerce-academy.webp (Main lecture hall visual)
├── classrooms/    --> classroom-interior.webp (Kanishk Plaza first floor setup)
│                  --> study-books-accounting.webp (Curriculum workbooks)
├── students/      --> student-discussion.webp (Batch study & mentorship)
├── achievements/  --> achievements-merit-board.webp (Certified HSC & CA rankers)
└── faculty/       --> faculty-director-placeholder.webp (Prof. Pradeep Bhandare portrait)`}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-colors"
          >
            Close Manifest
          </button>
        </div>

      </div>
    </div>
  );
};
