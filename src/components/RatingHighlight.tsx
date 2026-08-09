import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Star, MapPin, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';

export const RatingHighlight: React.FC = () => {
  return (
    <section className="py-12 bg-[#FFF7F2] border-y border-[#F2D8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-2xl border border-[#F2D8DF] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Stat Box */}
            <div className="md:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8A4F62] to-[#D98B9D] flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                <span className="font-serif text-3xl font-bold leading-none">{SALON_INFO.googleRating}</span>
                <span className="text-[10px] uppercase font-semibold text-amber-200 mt-1">Out of 5.0</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">
                  {SALON_INFO.totalReviews} Google Reviews
                </h3>
                <p className="text-xs text-[#6E6E6E]">
                  Verified client ratings in North Nazimabad, Karachi
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8A4F62] hover:text-[#723E50] font-semibold underline flex items-center justify-center sm:justify-start gap-1"
                  >
                    <span>Read verified reviews on Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Divider */}
            <div className="hidden md:block md:col-span-1 h-16 border-r border-[#F2D8DF] mx-auto" />

            {/* Verified Attributes Grid */}
            <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D98B9D]" />
                  <span>Affordable Prices</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">High value beauty care</p>
              </div>

              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D98B9D]" />
                  <span>Friendly Staff</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">Cooperative & attentive</p>
              </div>

              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D98B9D]" />
                  <span>Hair Color Mastery</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">Balayage & Botox</p>
              </div>

              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D98B9D]" />
                  <span>Bridal Perfection</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">Barat & Valima HD base</p>
              </div>

              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D98B9D]" />
                  <span>100% Hygienic</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">Sterilized tools</p>
              </div>

              <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A4F62] font-semibold">
                  <MapPin className="w-4 h-4 text-[#D98B9D]" />
                  <span>Block L Nazimabad</span>
                </div>
                <p className="text-[11px] text-[#6E6E6E]">Prime location</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
