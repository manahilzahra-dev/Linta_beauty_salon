import React from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, Play } from 'lucide-react';

export const InstagramShowcase: React.FC = () => {
  const instaPosts = [
    {
      id: 1,
      image: SALON_INFO.images.hero,
      likes: '342',
      comments: '28',
      type: 'Reel',
      caption: 'Flawless Barat Bridal HD makeover at Linta\'s Beauty Salon North Nazimabad ✨ #PakistaniBride #BridalMakeup'
    },
    {
      id: 2,
      image: SALON_INFO.images.hairTrans,
      likes: '519',
      comments: '41',
      type: 'Reel',
      caption: 'Rose Gold & Honey Caramel Balayage transformation! 💇‍♀️ #BalayageKarachi #LintaHairStudio'
    },
    {
      id: 3,
      image: SALON_INFO.images.bridalLook,
      likes: '284',
      comments: '19',
      type: 'Post',
      caption: 'Soft Valima Pastel Glam look for our gorgeous client! 🌸 Book your slot on WhatsApp.'
    },
    {
      id: 4,
      image: SALON_INFO.images.interior,
      likes: '412',
      comments: '33',
      type: 'Post',
      caption: 'Step into serene luxury at Block L, North Nazimabad. Your cozy beauty retreat awaits! 💕'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFDF9] rounded-3xl border border-[#F2D8DF] p-8 sm:p-10 shadow-sm max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            
            {/* Profile Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-[#D98B9D] to-[#8A4F62] shadow-md">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white bg-[#FFF7F2]">
                  <img
                    src={SALON_INFO.images.bridalLook}
                    alt="Instagram Profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-bold text-[#2E2E2E] text-lg">@{SALON_INFO.instagram.handle}</h3>
                  <span className="bg-[#8A4F62] text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">Official</span>
                </div>
                <p className="text-xs text-[#6E6E6E]">Linta's Beauty Salon • North Nazimabad, Karachi</p>

                {/* Stats Bar */}
                <div className="flex items-center justify-center sm:justify-start gap-6 pt-2 text-xs text-[#2E2E2E] font-medium">
                  <div>
                    <span className="font-bold text-[#8A4F62]">{SALON_INFO.instagram.posts}</span> <span className="text-[#6E6E6E]">Posts</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#8A4F62]">{SALON_INFO.instagram.followers}</span> <span className="text-[#6E6E6E]">Followers</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#8A4F62]">{SALON_INFO.instagram.following}</span> <span className="text-[#6E6E6E]">Following</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#8A4F62] to-[#D98B9D] hover:from-[#723E50] hover:to-[#C78E7B] text-white px-6 py-3 rounded-full font-semibold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>
        </motion.div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFDF9] rounded-2xl border border-[#F2D8DF] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-[#FFF7F2]">
                <img
                  src={post.image}
                  alt="Insta Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {post.type === 'Reel' && (
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-full">
                    <Play className="w-3 h-3 fill-white" />
                  </div>
                )}
                
                {/* Overlay stats */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-sm font-bold">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" /> {post.comments}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs text-[#2E2E2E] line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#6E6E6E] pt-2 border-t border-[#F2D8DF]">
                  <span>View on Instagram</span>
                  <Instagram className="w-3.5 h-3.5 text-[#8A4F62]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

