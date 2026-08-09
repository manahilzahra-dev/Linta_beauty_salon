import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Crown, Check, MessageCircle, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export const BridalShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'barat' | 'valima' | 'mehndi'>('all');

  const bridalLooks = [
    {
      id: "barat",
      category: "barat",
      title: "Royal Barat Bridal Look",
      tag: "Linta's Barat Masterpiece",
      image: SALON_INFO.images.hero,
      desc: "Rich traditional gold & deep crimson tones, flaw-concealing HD foundation base, intricate smokey eye, mink lashes & full dupatta setting."
    },
    {
      id: "valima",
      category: "valima",
      title: "Ethereal Valima Pastel Glam",
      tag: "Linta's Valima Bride",
      image: SALON_INFO.images.bridalLook,
      desc: "Soft rose gold, peach, and champagne tones with luminous glass skin highlight tailored for morning or evening Valima receptions."
    },
    {
      id: "mehndi",
      category: "mehndi",
      title: "Vibrant Mehndi & Sangeet Glam",
      tag: "Linta's Mehndi Look",
      image: SALON_INFO.images.hydrafacial,
      desc: "Fresh, radiant, glass-skin glowing makeup paired with intricate hair braids, floral accessory arrangement, and long-wear lip tint."
    }
  ];

  const filteredLooks = activeTab === 'all' ? bridalLooks : bridalLooks.filter(b => b.category === activeTab);

  return (
    <section id="bridal" className="py-16 lg:py-24 bg-[#FFFDF9] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#F2D8DF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Crown className="w-3.5 h-3.5 text-[#D98B9D]" /> Pakistani Bridal Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            The Ultimate <span className="text-[#8A4F62] italic font-normal">Bridal Makeover</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Creating unforgettable bridal moments in North Nazimabad, Karachi with sweat-proof, humidity-tested HD makeup formulas and bespoke styling.
          </p>

          {/* Bridal Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Bridal Looks' },
              { id: 'barat', label: 'Barat Makeup' },
              { id: 'valima', label: 'Valima Makeup' },
              { id: 'mehndi', label: 'Mehndi & Engagement' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8A4F62] text-white shadow-sm'
                    : 'bg-[#FFF7F2] text-[#2E2E2E] border border-[#F2D8DF] hover:bg-[#F9E8EC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look, idx) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-88 overflow-hidden bg-[#FFFDF9]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#8A4F62] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#F2D8DF] flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#D98B9D]" />
                  <span>{look.tag}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">{look.title}</h3>
                  <p className="text-xs text-[#6E6E6E] leading-relaxed">{look.desc}</p>
                </div>

                <div className="pt-2 border-t border-[#F2D8DF] space-y-1.5 text-xs text-[#2E2E2E]">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B9D] shrink-0" /> HD Base & Sweat-proof Seal
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B9D] shrink-0" /> Dupatta, Matha Patti & Jewelry Setting
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B9D] shrink-0" /> Luxury Lash Extension & Lip Care
                  </p>
                </div>

                <a
                  href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Linta's Beauty Salon! I want to check availability for "${look.title}" in Block L North Nazimabad.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#8A4F62] hover:bg-[#723E50] text-white py-3.5 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400" />
                  <span>Reserve Bridal Slot on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

