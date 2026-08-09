import React, { useState } from 'react';
import { FAQS, SALON_INFO } from '../data/salonData';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D98B9D]" /> Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Frequently Asked <span className="text-[#8A4F62] italic font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Everything you need to know before visiting Linta’s Beauty Salon in North Nazimabad, Karachi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] border border-[#F2D8DF] rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2E2E2E] hover:text-[#8A4F62] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#FFF7F2] border border-[#F2D8DF] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8A4F62] text-white' : 'text-[#8A4F62]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#6E6E6E] leading-relaxed border-t border-[#F2D8DF] pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 text-center bg-[#FFFDF9] p-6 rounded-2xl border border-[#F2D8DF] max-w-xl mx-auto space-y-3">
          <p className="text-xs text-[#2E2E2E] font-semibold">Have a specific question about your hair or skin type?</p>
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8A4F62] hover:bg-[#723E50] text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400" />
            <span>Chat Directly with Linta on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
