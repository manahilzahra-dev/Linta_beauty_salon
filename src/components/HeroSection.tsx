// import React from 'react';
// import { motion } from 'motion/react';
// import { SALON_INFO } from '../data/salonData';
// import { Star, MessageCircle, Calendar, Sparkles, MapPin, ShieldCheck, Heart, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

// export const HeroSection: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF7F2] to-[#FFFDF9]">
//       {/* Rose Gold Soft Ambient Glows */}
//       <motion.div
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#F2D8DF]/30 rounded-full blur-3xl -z-10 pointer-events-none"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//         className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFF7F2] rounded-full blur-3xl -z-10 pointer-events-none"
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* Left Column: Copy & CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="lg:col-span-7 space-y-6 text-center lg:text-left"
//           >
            
//             {/* Location & Rating Badge */}
//             <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-[#FFF7F2] border border-[#F2D8DF] p-1.5 pr-4 rounded-full shadow-xs hover:border-[#D98B9D] transition-colors">
//               <span className="bg-[#8A4F62] text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
//                 <Sparkles className="w-3 h-3 text-amber-200" /> Modern Luxury
//               </span>
//               <div className="flex items-center gap-1 text-xs font-semibold text-[#2E2E2E]">
//                 <div className="flex text-amber-400">
//                   <Star className="w-3.5 h-3.5 fill-amber-400" />
//                 </div>
//                 <span>4.7 ★</span>
//                 <span className="text-[#6E6E6E] font-normal">({SALON_INFO.totalReviews} Google Reviews)</span>
//               </div>
//               <span className="text-xs text-[#C78E7B] font-medium hidden sm:inline">• North Nazimabad</span>
//             </div>

//             {/* Main Luxury Heading */}
//             <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] tracking-tight leading-[1.15]">
//               Unveil Your <span className="text-[#8A4F62] italic font-normal">Timeless Beauty</span> with Modern Pakistani Elegance
//             </h1>

//             {/* Subtitle */}
//             <p className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
//               Karachi’s premier luxury sanctuary for professional bridal makeovers, signature hair color transformations, Hydrafacials, and revitalizing hair treatments in a serene, spotless environment.
//             </p>

//             {/* Address Pill */}
//             <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#2E2E2E] font-medium bg-[#FFF7F2] py-2 px-3.5 rounded-xl border border-[#F2D8DF] max-w-fit mx-auto lg:mx-0 shadow-xs">
//               <MapPin className="w-4 h-4 text-[#D98B9D] shrink-0" />
//               <span>A-98, Street No.7, Block L North Nazimabad, Karachi</span>
//             </div>

//             {/* Action Buttons */}
//             <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//               <a
//                 href={SALON_INFO.whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full sm:w-auto bg-[#8A4F62] hover:bg-[#723E50] text-white px-8 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 group transform active:scale-95 pulse-glow cursor-pointer"
//               >
//                 <MessageCircle className="w-5 h-5 fill-emerald-400" />
//                 <span>Book Slot via WhatsApp</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </a>

//               <a
//                 href="#booking"
//                 className="w-full sm:w-auto bg-[#FFF7F2] hover:bg-[#F9E8EC] text-[#2E2E2E] border border-[#F2D8DF] px-6 py-4 rounded-full font-medium text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
//               >
//                 <Calendar className="w-4 h-4 text-[#8A4F62]" />
//                 <span>View Online Booking</span>
//               </a>
//             </div>

//             {/* Trust Badges */}
//             <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#F2D8DF] max-w-lg mx-auto lg:mx-0">
//               <div className="text-center lg:text-left">
//                 <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">4.7 ★</p>
//                 <p className="text-[11px] text-[#6E6E6E]">Google Verified</p>
//               </div>
//               <div className="text-center lg:text-left">
//                 <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">3,600+</p>
//                 <p className="text-[11px] text-[#6E6E6E]">Insta Community</p>
//               </div>
//               <div className="text-center lg:text-left">
//                 <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">100%</p>
//                 <p className="text-[11px] text-[#6E6E6E]">Hygienic Care</p>
//               </div>
//             </div>

//           </motion.div>

//           {/* Right Column: Visual Hero Imagery & Floating Cards */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//             className="lg:col-span-5 relative"
//           >
            
//             {/* Main Visual Frame */}
//             <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D8DF] shadow-2xl bg-[#FFF7F2] aspect-[4/5] sm:aspect-[3/4] group">
//               <img
//                 src={SALON_INFO.images.hero}
//                 alt="Linta's Beauty Salon Barat Bride"
//                 className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
//                 referrerPolicy="no-referrer"
//               />

//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//               {/* Tag Label */}
//               <div className="absolute top-4 left-4 bg-[#FFFDF9]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F2D8DF] text-[11px] font-semibold text-[#8A4F62] flex items-center gap-1.5 shadow-sm">
//                 <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" />
//                 <span>Linta's Barat Bride</span>
//               </div>

//               {/* Bottom Caption on Image */}
//               <div className="absolute bottom-4 left-4 right-4 text-white">
//                 <p className="font-serif text-lg font-bold">Barat & Valima Bridal Makeovers</p>
//                 <p className="text-xs text-amber-100 flex items-center gap-1">
//                   <ShieldCheck className="w-3.5 h-3.5" /> Flawless HD longwear base
//                 </p>
//               </div>
//             </div>

//             {/* Floating Card 1: Hair Color Experts */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//               className="absolute -bottom-6 -left-6 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#F2D8DF] p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 max-w-xs"
//             >
//               <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#F2D8DF]">
//                 <img
//                   src={SALON_INFO.images.hairTrans}
//                   alt="Hair Color Transformation"
//                   className="w-full h-full object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-[#2E2E2E]">Signature Balayage</p>
//                 <p className="text-[10px] text-[#6E6E6E]">Linta's Hair Color Results</p>
//                 <span className="text-[10px] text-[#8A4F62] font-semibold">100% Ammonia-free</span>
//               </div>
//             </motion.div>

//             {/* Floating Card 2: Friendly Owner Badge */}
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//               className="absolute -top-4 -right-4 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#F2D8DF] p-3 rounded-xl shadow-lg flex items-center gap-2"
//             >
//               <div className="w-8 h-8 rounded-full bg-[#F9E8EC] flex items-center justify-center text-[#8A4F62]">
//                 <Heart className="w-4 h-4 fill-[#D98B9D]" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-[#2E2E2E]">Personalized Care</p>
//                 <p className="text-[10px] text-[#6E6E6E]">Super Friendly Owner</p>
//               </div>
//             </motion.div>

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SALON_INFO } from '../data/salonData';
import { Star, MessageCircle, Calendar, Sparkles, MapPin, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  // Spring animations for realistic smoothness
  const springTransition = { type: 'spring', stiffness: 100, damping: 15 };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF7F2] to-[#FFFDF9]">
      {/* Dynamic Animated Ambient Glows */}
      <motion.div
        animate={{ 
          scale: [1, 1.25, 1], 
          opacity: [0.3, 0.55, 0.3],
          x: ['-50%', '-48%', '-50%'] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/2 w-[600px] h-[350px] bg-[#F2D8DF]/40 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#F9E8EC]/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Calls to Action */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Rating Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-[#FFF7F2] border border-[#F2D8DF] p-1.5 pr-4 rounded-full shadow-sm hover:border-[#D98B9D] transition-colors"
            >
              <span className="bg-[#8A4F62] text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-200" /> Modern Luxury
              </span>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#2E2E2E]">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>4.7 ★</span>
                <span className="text-[#6E6E6E] font-normal">(38 Google Reviews)</span>
              </div>
              <span className="text-xs text-[#C78E7B] font-medium hidden sm:inline">• North Nazimabad</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] tracking-tight leading-[1.15]"
            >
              Unveil Your <motion.span 
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[#8A4F62] italic font-normal inline-block"
              >
                Timeless Beauty
              </motion.span> with Modern Pakistani Elegance
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#6E6E6E] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Karachi’s premier luxury sanctuary for professional bridal makeovers, signature hair color transformations, Hydrafacials, and revitalizing hair treatments in a serene, spotless environment.
            </motion.p>

            {/* Address Pill */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={springTransition}
              className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#2E2E2E] font-medium bg-[#FFF7F2] py-2 px-3.5 rounded-xl border border-[#F2D8DF] max-w-fit mx-auto lg:mx-0 shadow-xs cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#D98B9D] shrink-0" />
              <span>A-98, Street No.7, Block L North Nazimabad, Karachi</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: '0px 15px 30px rgba(138, 79, 98, 0.25)' }}
                whileTap={{ scale: 0.96 }}
                transition={springTransition}
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#8A4F62] text-white px-8 py-4 rounded-full font-semibold text-base shadow-md transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                <span>Book Slot via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: '#F9E8EC' }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
                href="#booking"
                className="w-full sm:w-auto bg-[#FFF7F2] text-[#2E2E2E] border border-[#F2D8DF] px-6 py-4 rounded-full font-medium text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#8A4F62]" />
                <span>View Online Booking</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="pt-4 grid grid-cols-3 gap-3 border-t border-[#F2D8DF] max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">4.7 ★</p>
                <p className="text-[11px] text-[#6E6E6E]">Google Verified</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">3,600+</p>
                <p className="text-[11px] text-[#6E6E6E]">Insta Community</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#8A4F62]">100%</p>
                <p className="text-[11px] text-[#6E6E6E]">Hygienic Care</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Hero Imagery & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            
            {/* Main Visual Frame with Zoom-on-Hover */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F2D8DF] shadow-2xl bg-[#FFF7F2] aspect-[4/5] sm:aspect-[3/4] group">
              <img
                src={SALON_INFO.images.hero}
                alt="Linta's Beauty Salon Barat Bride"
                className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Label */}
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 left-4 bg-[#FFFDF9]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F2D8DF] text-[11px] font-semibold text-[#8A4F62] flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" />
                <span>Linta's Barat Bride</span>
              </motion.div>

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg font-bold">Barat & Valima Bridal Makeovers</p>
                <p className="text-xs text-amber-100 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Flawless HD longwear base
                </p>
              </div>
            </div>

            {/* Floating Card 1: Dynamic Continuous Float */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#F2D8DF] p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 max-w-xs cursor-pointer z-10"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#F2D8DF]">
                <img
                  src={SALON_INFO.images.hairTrans}
                  alt="Hair Color Transformation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2E2E2E]">Signature Balayage</p>
                <p className="text-[10px] text-[#6E6E6E]">Linta's Hair Color Results</p>
                <span className="text-[10px] text-[#8A4F62] font-semibold">100% Ammonia-free</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Floating Heart Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              whileHover={{ scale: 1.08 }}
              className="absolute -top-4 -right-4 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#F2D8DF] p-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer z-10"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 rounded-full bg-[#F9E8EC] flex items-center justify-center text-[#8A4F62]"
              >
                <Heart className="w-4 h-4 fill-[#D98B9D] text-[#D98B9D]" />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-[#2E2E2E]">Personalized Care</p>
                <p className="text-[10px] text-[#6E6E6E]">Super Friendly Owner</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};