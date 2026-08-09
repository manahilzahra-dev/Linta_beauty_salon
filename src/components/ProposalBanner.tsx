import React, { useState } from 'react';
import { Sparkles, Info, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ProposalBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-[#8A4F62] via-[#D98B9D] to-[#C78E7B] text-white py-2 px-4 text-xs sm:text-sm font-medium transition-all shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-white/20 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border border-white/30 flex items-center gap-1 shrink-0">
              <Sparkles className="w-3 h-3 text-amber-200" /> Proposal Concept
            </span>
            <span>
              Website Design Proposal for <strong>{SALON_INFO.name}</strong> — North Nazimabad, Karachi
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowDetailsModal(true)}
              className="underline text-white hover:text-amber-100 flex items-center gap-1 transition-colors cursor-pointer text-xs"
            >
              <Info className="w-3.5 h-3.5" /> Owner Notes
            </button>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#8A4F62] hover:bg-[#FFFDF9] px-2.5 py-1 rounded-full font-semibold text-xs transition-transform hover:scale-105 shadow-xs flex items-center gap-1"
            >
              Contact Developer
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="text-white/80 hover:text-white p-1 transition-colors cursor-pointer"
              title="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FFFDF9] border border-[#F2D8DF] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-4 text-[#6E6E6E] hover:text-[#2E2E2E] p-1 rounded-full hover:bg-[#FFF7F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F9E8EC] flex items-center justify-center text-[#8A4F62]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2E2E2E]">Website Proposal Overview</h3>
                <p className="text-xs text-[#6E6E6E]">Tailored specifically for Linta's Beauty Salon</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#6E6E6E] max-h-80 overflow-y-auto pr-1">
              <p>
                This interactive demo was crafted to show the salon owner how a world-class, modern Pakistani luxury website will elevate Linta's Beauty Salon in North Nazimabad, Karachi.
              </p>
              <div className="bg-[#FFF7F2] p-3.5 rounded-xl border border-[#F2D8DF] space-y-2">
                <h4 className="font-semibold text-[#8A4F62] text-xs uppercase tracking-wider">Key Features Included in Proposal:</h4>
                <ul className="space-y-1.5 text-xs text-[#2E2E2E]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Rose Blush Luxury aesthetic inspired by high-end South Asian studios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Direct WhatsApp appointment routing (+92 333 0247837).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Google 4.7★ rating highlight & 38 Google Reviews integration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Instagram Showcase featuring `@lintas_beauty_salon_official` (3,608 Followers).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Interactive Hair Balayage / Botox Before & After Compare Slider.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                    <span>Labeled placeholders for owner's original salon photography.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="bg-[#8A4F62] hover:bg-[#723E50] text-white px-5 py-2 rounded-full font-medium text-sm transition-colors"
              >
                Explore Demo Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
