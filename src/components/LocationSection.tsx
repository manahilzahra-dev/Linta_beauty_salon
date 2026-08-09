import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <MapPin className="w-3.5 h-3.5 text-[#D98B9D]" /> Visit Our Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Location & <span className="text-[#8A4F62] italic font-normal">Opening Hours</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Conveniently located in Block L, North Nazimabad, Karachi with dedicated parking & peaceful atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address & Hours Card */}
          <div className="lg:col-span-5 bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] p-8 shadow-xs flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8A4F62] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">Linta's Beauty Salon</h3>
                  <p className="text-xs text-[#8A4F62] font-medium">North Nazimabad, Karachi</p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-2 bg-[#FFFDF9] p-4 rounded-2xl border border-[#F2D8DF]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C78E7B]">Studio Address</p>
                <p className="text-sm text-[#2E2E2E] font-medium leading-relaxed">
                  {SALON_INFO.address}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 bg-[#FFFDF9] p-4 rounded-2xl border border-[#F2D8DF]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C78E7B]">Phone & Reservation</p>
                <div className="flex items-center justify-between text-sm font-bold text-[#2E2E2E]">
                  <span>{SALON_INFO.phone}</span>
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="text-xs text-[#8A4F62] hover:text-[#723E50] underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Studio
                  </a>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div className="space-y-3 bg-[#FFFDF9] p-4 rounded-2xl border border-[#F2D8DF]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8A4F62] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D98B9D]" /> Studio Operating Timings
                </p>
                <div className="space-y-2 text-xs">
                  {SALON_INFO.openingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-[#F2D8DF] last:border-0">
                      <span className="font-medium text-[#2E2E2E]">{item.days}</span>
                      <span className="font-semibold text-[#8A4F62]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#8A4F62] hover:bg-[#723E50] text-white py-3.5 rounded-full font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Right Column: Google Maps Interactive Placeholder */}
          <div className="lg:col-span-7 bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] overflow-hidden shadow-xs relative min-h-[400px] flex flex-col justify-between p-6">
            
            {/* Map Placeholder Graphic */}
            <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border border-[#F2D8DF] bg-gradient-to-br from-[#FFFDF9] via-[#FFF7F2] to-[#F9E8EC] flex flex-col items-center justify-center text-center p-8 space-y-4">
              
              <div className="w-16 h-16 rounded-full bg-[#8A4F62] text-white flex items-center justify-center shadow-lg animate-pulse">
                <MapPin className="w-8 h-8 text-amber-200" />
              </div>

              <div className="space-y-1 max-w-md">
                <span className="bg-[#8A4F62] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  Interactive Map Integration
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2E2E2E]">Block L, North Nazimabad</h4>
                <p className="text-xs text-[#6E6E6E]">
                  A-98, Street No.7, Block L North Nazimabad, Karachi, Pakistan
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFFDF9] hover:bg-[#F9E8EC] text-[#8A4F62] border border-[#F2D8DF] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-2 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Google Maps Location
                </a>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8A4F62] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#723E50] transition-colors"
                >
                  Ask Location on WhatsApp
                </a>
              </div>

              {/* Landmark Callouts */}
              <div className="pt-4 grid grid-cols-2 gap-3 w-full max-w-md text-left text-xs">
                <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#F2D8DF]">
                  <p className="font-bold text-[#2E2E2E]">Landmark</p>
                  <p className="text-[11px] text-[#6E6E6E]">Near Street 7, Block L</p>
                </div>
                <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#F2D8DF]">
                  <p className="font-bold text-[#2E2E2E]">Parking</p>
                  <p className="text-[11px] text-[#6E6E6E]">Convenient Front Parking</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
