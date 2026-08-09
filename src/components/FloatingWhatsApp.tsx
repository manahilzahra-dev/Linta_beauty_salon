import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="bg-[#FFFDF9] text-[#2E2E2E] border border-[#F2D8DF] px-3.5 py-2 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need an appointment? <strong>Chat Linta</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#6E6E6E] hover:text-[#2E2E2E] ml-1 p-0.5"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={SALON_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 pulse-glow relative"
        title="Chat on WhatsApp +92 333 0247837"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8A4F62] rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>

    </div>
  );
};
