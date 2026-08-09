import React, { useState } from 'react';
import { BEFORE_AFTER_TRANSFORMATIONS, SALON_INFO } from '../data/salonData';
import { Sparkles, MoveHorizontal, CheckCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const activeItem = BEFORE_AFTER_TRANSFORMATIONS[activeItemIndex];

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Interactive Comparison
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            See the <span className="text-[#8A4F62] italic font-normal">Transformation</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Drag the interactive slider below to witness real transformation results achieved at Linta’s Beauty Salon.
          </p>
        </div>

        {/* Transformation Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {BEFORE_AFTER_TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => { setActiveItemIndex(idx); setSliderPos(50); }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#8A4F62] text-white shadow-sm'
                  : 'bg-[#FFFDF9] text-[#2E2E2E] hover:bg-[#F9E8EC] border border-[#F2D8DF]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Image Container */}
        <div className="max-w-4xl mx-auto bg-[#FFFDF9] p-4 sm:p-6 rounded-3xl border border-[#F2D8DF] shadow-md">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none border border-[#F2D8DF]">
            
            {/* AFTER Image (Full background) */}
            <img
              src={activeItem.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-[#8A4F62] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              AFTER (Linta's Result)
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeItem.beforeImage}
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                BEFORE
              </div>
            </div>

            {/* Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#8A4F62] text-white border-2 border-white flex items-center justify-center shadow-lg">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Native Invisible Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderMove}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare before and after"
            />
          </div>

          {/* Details below slider */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">{activeItem.title}</h3>
              <p className="text-xs text-[#6E6E6E] mt-1">{activeItem.description}</p>
            </div>

            <a
              href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Linta's Beauty Salon! I saw the Before/After transformation for "${activeItem.title}" and want to book standard consultation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8A4F62] hover:bg-[#723E50] text-white px-5 py-2.5 rounded-full text-xs font-semibold shrink-0 transition-colors"
            >
              Book This Look on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
