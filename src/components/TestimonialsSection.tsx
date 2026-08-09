import React from 'react';
import { CUSTOMER_REVIEWS, SALON_INFO } from '../data/salonData';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> Public Feedback Highlights
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Loved by Women Across <span className="text-[#8A4F62] italic font-normal">Karachi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Verified Google reviews highlighting affordable rates, friendly hospitality, and outstanding hair & bridal results.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] p-8 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col justify-between space-y-4"
            >
              <Quote className="w-10 h-10 text-[#F2D8DF] absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-[#2E2E2E] ml-1">5.0</span>
                </div>

                {/* Service Tag */}
                <span className="inline-block bg-[#FFFDF9] text-[#8A4F62] border border-[#F2D8DF] text-[11px] font-semibold px-3 py-0.5 rounded-full">
                  {review.service}
                </span>

                {/* Review Text */}
                <p className="text-sm text-[#2E2E2E] italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-[#F2D8DF] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#2E2E2E]">{review.name}</h4>
                  <p className="text-[#6E6E6E] text-[11px]">{review.location}</p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#8A4F62] bg-[#FFFDF9] px-2.5 py-1 rounded-full border border-[#F2D8DF]">
                  <CheckCircle className="w-3 h-3 text-emerald-500" /> Google Verified
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Google CTA */}
        <div className="mt-12 text-center bg-[#FFF7F2] p-6 rounded-2xl border border-[#F2D8DF] max-w-xl mx-auto space-y-2">
          <p className="text-xs text-[#6E6E6E]">
            Rated <strong>{SALON_INFO.googleRating} ★</strong> based on <strong>{SALON_INFO.totalReviews} Google Reviews</strong>
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8A4F62] font-semibold underline inline-flex items-center gap-1 hover:text-[#723E50]"
          >
            <span>View all Google Reviews for Linta's Beauty Salon</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
