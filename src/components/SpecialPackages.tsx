import React, { useState } from 'react';
import { SPECIAL_PACKAGES, PackageItem, SALON_INFO } from '../data/salonData';
import { Sparkles, Check, Crown, MessageCircle, Info } from 'lucide-react';

export const SpecialPackages: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<PackageItem>(SPECIAL_PACKAGES[0]);

  return (
    <section id="packages" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Crown className="w-3.5 h-3.5 text-[#D98B9D]" /> Curated Pampering Suites
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Exclusive <span className="text-[#8A4F62] italic font-normal">Special Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Save more with our bundled packages for brides, hair transformations, and glass skin glow sessions.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPECIAL_PACKAGES.map((pkg) => {
            const isSelected = selectedPkg.id === pkg.id;
            const waMsg = encodeURIComponent(
              `Hello Linta's Beauty Salon! I want to inquire about reserving the "${pkg.title}" package at North Nazimabad Karachi.`
            );
            const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${waMsg}`;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg)}
                className={`bg-[#FFF7F2] rounded-3xl border p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative cursor-pointer ${
                  isSelected ? 'border-2 border-[#8A4F62] ring-2 ring-[#8A4F62]/10 bg-[#FFFDF9]' : 'border-[#F2D8DF]'
                }`}
              >
                {/* Tag */}
                <div className="flex justify-between items-start">
                  <span className="bg-[#8A4F62] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-xs">
                    {pkg.tag}
                  </span>
                  <span className="text-xs text-[#C78E7B] font-semibold italic">North Nazimabad</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#2E2E2E]">{pkg.title}</h3>
                  <p className="text-xs text-[#6E6E6E]">{pkg.subtitle}</p>

                  <div className="pt-2">
                    <p className="text-xs text-[#8A4F62] font-semibold flex items-center gap-1 bg-[#F9E8EC] p-2 rounded-lg border border-[#F2D8DF]">
                      <Info className="w-3.5 h-3.5 shrink-0" /> {pkg.price}
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-2 border-t border-[#F2D8DF] pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2E2E2E]">Services Included:</p>
                  <ul className="space-y-2 text-xs text-[#6E6E6E]">
                    {pkg.servicesIncluded.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For */}
                <div className="text-[11px] text-[#2E2E2E] bg-[#FFF7F2] p-2.5 rounded-xl border border-[#F2D8DF] italic">
                  <strong>Recommended for:</strong> {pkg.recommendedFor}
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#8A4F62] hover:bg-[#723E50] text-white py-3 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400" /> Book Package via WhatsApp
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
