import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, MapPin, Heart, ShieldCheck, Crown } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Mosaic with Placeholders */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Interior */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#F2D8DF] shadow-md bg-[#FFF7F2] aspect-[3/4] group">
                  <img
                    src={SALON_INFO.images.interior}
                    alt="Linta's Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-md border border-[#F2D8DF] text-[10px] font-semibold text-[#8A4F62] text-center shadow-xs">
                    Linta's Interior
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF7F2] border border-[#F2D8DF] text-center space-y-1">
                  <Crown className="w-5 h-5 text-[#8A4F62] mx-auto" />
                  <p className="font-serif font-bold text-[#2E2E2E] text-sm">North Nazimabad</p>
                  <p className="text-[11px] text-[#6E6E6E]">Karachi's Trusted Beauty Hub</p>
                </div>
              </div>

              {/* Image 2 & 3: Original Salon Photo & Bridal */}
              <div className="space-y-4 pt-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#F2D8DF] shadow-md bg-[#FFF7F2] aspect-square group">
                  <img
                    src={SALON_INFO.images.bridalLook}
                    alt="Linta's Bridal Work"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-md border border-[#F2D8DF] text-[10px] font-semibold text-[#8A4F62] text-center shadow-xs">
                    Linta's Bridal Work
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#F2D8DF] shadow-md bg-[#FFF7F2] aspect-[3/4] group">
                  <img
                    src={SALON_INFO.images.hero}
                    alt="Linta's Original Salon Photo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-md border border-[#F2D8DF] text-[10px] font-semibold text-[#8A4F62] text-center shadow-xs">
                    Linta's Original Salon Photo
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] border border-[#F2D8DF] p-4 rounded-full shadow-2xl flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#8A4F62] text-white flex items-center justify-center font-bold text-sm">
                4.7★
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
              <Sparkles className="w-3.5 h-3.5" /> About Linta's Beauty Salon
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight leading-tight">
              Where Elegance Meets <span className="text-[#8A4F62] italic font-normal">Warm Hospitality</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
              Nestled in <strong>Block L, North Nazimabad, Karachi</strong>, Linta’s Beauty Salon was founded with a singular vision: to deliver world-class beauty services that celebrate the grace and diversity of Pakistani women without the exorbitant price tag.
            </p>

            <p className="text-sm sm:text-base text-[#6E6E6E] leading-relaxed">
              From bespoke <strong>HD Bridal Makeup</strong> that withstands Karachi’s climate to <strong>Signature Balayage, Keratin, and Hair Botox</strong> treatments, Linta and her team combine artistry with skin-safe, damage-free products.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FFF7F2] p-4 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-2 text-[#8A4F62] font-semibold text-sm">
                  <Heart className="w-4 h-4 fill-[#D98B9D] text-[#D98B9D]" />
                  <span>Personalized Touch</span>
                </div>
                <p className="text-xs text-[#6E6E6E]">
                  Every client receives direct personal consultation from Linta or senior artists.
                </p>
              </div>

              <div className="bg-[#FFF7F2] p-4 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-2 text-[#8A4F62] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#8A4F62]" />
                  <span>Hygienic Environment</span>
                </div>
                <p className="text-xs text-[#6E6E6E]">
                  Sanitized equipment, single-use capes, and spotless treatment chambers.
                </p>
              </div>
            </div>

            {/* Location Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#2E2E2E]">
              <div className="flex items-center gap-1.5 bg-[#FFF7F2] px-3 py-2 rounded-lg border border-[#F2D8DF]">
                <MapPin className="w-4 h-4 text-[#D98B9D]" />
                <span>A-98, Street No.7, Block L North Nazimabad, Karachi</span>
              </div>
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A4F62] hover:text-[#723E50] font-semibold underline"
              >
                Inquire on WhatsApp →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
