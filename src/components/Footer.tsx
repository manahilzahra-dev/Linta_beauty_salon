import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Crown, MapPin, Phone, MessageCircle, Instagram, Star, Heart, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF7F2] border-t border-[#F2D8DF] text-[#2E2E2E] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F2D8DF]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#8A4F62] flex items-center justify-center text-white shadow-xs">
                <Crown className="w-5 h-5 text-amber-100" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#2E2E2E]">
                Linta's <span className="text-[#8A4F62] italic font-normal">Beauty Salon</span>
              </span>
            </div>

            <p className="text-xs text-[#6E6E6E] leading-relaxed max-w-sm">
              Modern Luxury Beauty Studio in North Nazimabad, Karachi. Specializing in HD Bridal Makeup, Signature Balayage, Keratin, Hair Botox, and Advanced Hydrafacials.
            </p>

            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#F2D8DF] px-3 py-1.5 rounded-full text-xs font-semibold text-[#2E2E2E]">
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span>Google Rating 4.7 ★ ({SALON_INFO.totalReviews} Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-[#2E2E2E] text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-[#6E6E6E]">
              <li><a href="#about" className="hover:text-[#8A4F62] transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-[#8A4F62] transition-colors">Service Menu</a></li>
              <li><a href="#hair-transformations" className="hover:text-[#8A4F62] transition-colors">Hair Coloring</a></li>
              <li><a href="#bridal" className="hover:text-[#8A4F62] transition-colors">Bridal Makeovers</a></li>
              <li><a href="#before-after" className="hover:text-[#8A4F62] transition-colors">Before & After</a></li>
              <li><a href="#gallery" className="hover:text-[#8A4F62] transition-colors">Lookbook Gallery</a></li>
            </ul>
          </div>

          {/* Services & Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-[#2E2E2E] text-sm uppercase tracking-wider">Specialized Care</h4>
            <ul className="space-y-2 text-xs text-[#6E6E6E]">
              <li><a href="#services" className="hover:text-[#8A4F62] transition-colors">Balayage & Highlights</a></li>
              <li><a href="#services" className="hover:text-[#8A4F62] transition-colors">Hair Botox & Keratin Smoothing</a></li>
              <li><a href="#services" className="hover:text-[#8A4F62] transition-colors">Advanced Hydrafacial Glow</a></li>
              <li><a href="#packages" className="hover:text-[#8A4F62] transition-colors">Royal Barat & Valima Packages</a></li>
              <li><a href="#booking" className="hover:text-[#8A4F62] transition-colors">Online Slot Booking</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-[#2E2E2E] text-sm uppercase tracking-wider">Contact & Studio</h4>
            
            <div className="space-y-2 text-xs text-[#6E6E6E]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D98B9D] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#8A4F62] font-semibold">{SALON_INFO.phone}</a>
              </p>

              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#D98B9D] shrink-0" />
                <a href={SALON_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#8A4F62] font-semibold">WhatsApp Chat</a>
              </p>

              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D98B9D] shrink-0" />
                <a href={SALON_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#8A4F62] font-semibold">@{SALON_INFO.instagram.handle}</a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#8A4F62] hover:bg-[#723E50] text-white py-2.5 rounded-full font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" /> Book Slot on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Proposal Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E6E]">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Linta's Beauty Salon. All rights reserved.</p>
            <p className="text-[11px] text-[#C78E7B]">
              <strong>Proposal Concept Demo:</strong> Created to show Linta's Beauty Salon owner what their official website will look like.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-[#FFFDF9] hover:bg-[#F9E8EC] text-[#8A4F62] border border-[#F2D8DF] p-2.5 rounded-full transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
