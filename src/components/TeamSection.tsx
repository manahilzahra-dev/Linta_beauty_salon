import React from 'react';
import { TEAM_MEMBERS, SALON_INFO } from '../data/salonData';
import { Sparkles, Crown, Heart, Award } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFFDF9] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Crown className="w-3.5 h-3.5 text-[#D98B9D]" /> Artisans of Beauty
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Meet Linta & <span className="text-[#8A4F62] italic font-normal">Her Expert Team</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            A team of passionate beauty, skin, and hair specialists dedicated to gentle, personalized care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-3xl border border-[#F2D8DF] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group text-center"
            >
              <div className="relative h-72 overflow-hidden bg-[#FFF7F2]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#8A4F62] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                  {member.tag}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2E2E2E]">{member.name}</h3>
                  <p className="text-xs text-[#8A4F62] font-semibold mt-0.5">{member.role}</p>
                </div>

                <div className="bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF] text-xs space-y-1 text-[#6E6E6E]">
                  <p><strong className="text-[#2E2E2E]">Specialty:</strong> {member.specialty}</p>
                  <p><strong className="text-[#2E2E2E]">Experience:</strong> {member.experience}</p>
                </div>

                <a
                  href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(`Hello! I want to consult with ${member.name} at Linta's Beauty Salon.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FFF7F2] hover:bg-[#F9E8EC] text-[#8A4F62] border border-[#F2D8DF] py-2 rounded-full text-xs font-semibold transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
