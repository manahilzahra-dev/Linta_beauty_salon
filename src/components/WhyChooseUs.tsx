import React from 'react';
import { WHY_CHOOSE_US } from '../data/salonData';
import { Sparkles, Award, Scissors, Crown, Heart, Shield, DollarSign } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <DollarSign className="w-6 h-6 text-[#8A4F62]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#8A4F62]" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-[#8A4F62]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#8A4F62]" />;
      case 'HeartHandshake': return <Heart className="w-6 h-6 text-[#8A4F62]" />;
      case 'ShieldCheck': return <Shield className="w-6 h-6 text-[#8A4F62]" />;
      default: return <Sparkles className="w-6 h-6 text-[#8A4F62]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Why Choose Linta's Beauty Salon
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            The Gold Standard of <span className="text-[#8A4F62] italic font-normal">Care & Craftsmanship</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Why thousands of women across North Nazimabad and Karachi trust Linta’s Beauty Salon for their most special moments.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] p-8 rounded-2xl border border-[#F2D8DF] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              {/* Corner Rose Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9E8EC] rounded-bl-full -z-0 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-2xl bg-[#FFF7F2] border border-[#F2D8DF] flex items-center justify-center shrink-0 group-hover:bg-[#8A4F62] transition-colors relative z-10">
                <div className="group-hover:text-white transition-colors">
                  {getIcon(item.icon)}
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="font-serif text-xl font-bold text-[#2E2E2E] group-hover:text-[#8A4F62] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
