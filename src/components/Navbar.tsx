// import React, { useState, useEffect } from 'react';
// import { SALON_INFO } from '../data/salonData';
// import { Star, MessageCircle, Menu, X, Crown, MapPin, Phone } from 'lucide-react';

// interface NavbarProps {
//   onOpenBookingModal?: () => void;
// }

// export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Bridal", href: "#bridal" },
//   { name: "Gallery", href: "#gallery" },
//   { name: "Reviews", href: "#reviews" },
//   { name: "Contact", href: "#location" },
// ];

//   return (
//     <header
//       className={`sticky top-0 z-40 transition-all duration-300 ${
//         scrolled
//           ? 'glass-panel shadow-md py-3'
//           : 'bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F2D8DF] py-4'
//       }`}
//     >
//         {/* Brand Logo */}
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   <div className="flex items-center justify-between">

//     <a href="#" className="flex items-center gap-3">

//       <div className="w-11 h-11 rounded-full bg-[#8A4F62] flex items-center justify-center">
//         <Crown className="w-5 h-5 text-white" />
//       </div>

//       <div>
//         <h1 className="font-serif text-xl font-bold text-[#2E2E2E]">
//           Linta's Beauty Salon
//         </h1>

//         <div className="flex items-center gap-1 text-xs text-[#6E6E6E]">
//           <MapPin className="w-3 h-3" />
//           <span>North Nazimabad, Karachi</span>
//         </div>
//       </div>

//     </a>

//       {/* Mobile Drawer Navigation */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F2D8DF] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
//           <div className="flex items-center justify-between bg-[#FFF7F2] p-2.5 rounded-xl border border-[#F2D8DF] mb-2">
//             <div className="flex items-center gap-1.5 text-xs font-semibold">
//               <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
//               <span>Google Rating 4.7 ★</span>
//               <span className="text-[#6E6E6E]">({SALON_INFO.totalReviews} Reviews)</span>
//             </div>
//             <a
//               href={`tel:${SALON_INFO.phone}`}
//               className="text-xs text-[#8A4F62] font-semibold flex items-center gap-1"
//             >
//               <Phone className="w-3.5 h-3.5" /> Call Now
//             </a>
//           </div>

//           <div className="grid grid-cols-2 gap-2 text-sm font-medium">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="bg-[#FFF7F2] hover:bg-[#F9E8EC] text-[#2E2E2E] px-3 py-2 rounded-lg border border-[#F2D8DF] text-center transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           <div className="pt-2 flex flex-col gap-2">
//             <a
//               href={SALON_INFO.whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-[#8A4F62] text-white py-2.5 rounded-full font-semibold text-center text-sm shadow-sm flex items-center justify-center gap-2"
//             >
//               <MessageCircle className="w-4 h-4 fill-emerald-400" /> Book via WhatsApp (+92 333 0247837)
//             </a>
//           </div>
//         </div>
        
//       )}
//     </header>
//   );
// };


import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Star, MessageCircle, Menu, X, Crown, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#location" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-md py-3'
          : 'bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F2D8DF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#8A4F62] flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-[#2E2E2E]">
                Linta's Beauty Salon
              </h1>
              <div className="flex items-center gap-1 text-xs text-[#6E6E6E]">
                <MapPin className="w-3 h-3" />
                <span>North Nazimabad, Karachi</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2E2E2E] hover:text-[#8A4F62] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop right side: rating + WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2E2E2E]">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>4.7 ★</span>
              <span className="text-[#6E6E6E]">({SALON_INFO.totalReviews} Reviews)</span>
            </div>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8A4F62] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF7F2] border border-[#F2D8DF]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#2E2E2E]" />
            ) : (
              <Menu className="w-5 h-5 text-[#2E2E2E]" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F2D8DF] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between bg-[#FFF7F2] p-2.5 rounded-xl border border-[#F2D8DF] mb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>Google Rating 4.7 ★</span>
              <span className="text-[#6E6E6E]">({SALON_INFO.totalReviews} Reviews)</span>
            </div>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="text-xs text-[#8A4F62] font-semibold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#FFF7F2] hover:bg-[#F9E8EC] text-[#2E2E2E] px-3 py-2 rounded-lg border border-[#F2D8DF] text-center transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#8A4F62] text-white py-2.5 rounded-full font-semibold text-center text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Book via WhatsApp ({SALON_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
