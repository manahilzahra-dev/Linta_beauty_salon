import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, MessageCircle, ShieldCheck, Zap, Heart } from 'lucide-react';

export const HairTransformations: React.FC = () => {
  const hairServices = [
    {
      title: "Caramel & Honey Balayage",
      tag: "Linta's Hair Color Results",
      image: SALON_INFO.images.hairTrans,
      desc: "Soft hand-painted dimensional gradient seamlessly blended into South Asian dark hair.",
      perks: ["Zero Harsh Lines", "Gloss Toner Finish", "Damage Protection"]
    },
    {
      title: "Intense Hair Botox & Caviar Therapy",
      tag: "Linta's Hair Color Results",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
      desc: "Deep fiber reconstruction for frizzy, humidity-damaged hair with zero chemical odor.",
      perks: ["Frizz Elimination", "Silky Glass Shine", "Nutrient Infusion"]
    },
    {
      title: "Keratin Smooth & Straightening",
      tag: "Linta's Hair Color Results",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
      desc: "Mirror shine smoothness that cuts daily styling time in half for months.",
      perks: ["3-5 Months Longevity", "Heat Protection", "Easy Styling"]
    }
  ];

  return (
    <section id="hair-transformations" className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Featured Hair Transformations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Hair Coloring & <span className="text-[#8A4F62] italic font-normal">Treatment Mastery</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Known across North Nazimabad for flawless hair color matching, gentle lightening, and anti-frizz therapies.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hairServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-3xl border border-[#F2D8DF] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-[#FFF7F2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#8A4F62] text-[10px] font-bold px-3 py-1 rounded-full border border-[#F2D8DF]">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">{item.title}</h3>
                  <p className="text-xs text-[#6E6E6E] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-2 border-t border-[#F2D8DF] space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {item.perks.map((p, i) => (
                      <span key={i} className="bg-[#FFF7F2] text-[#8A4F62] border border-[#F2D8DF] px-2.5 py-1 rounded-md text-[10px] font-semibold">
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Linta's Beauty Salon! I want to consult about "${item.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#8A4F62] hover:bg-[#723E50] text-white py-2.5 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" /> Consult Hair Specialist
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
