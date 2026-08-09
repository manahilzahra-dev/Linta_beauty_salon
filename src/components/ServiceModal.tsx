import React from 'react';
import { ServiceItem, SALON_INFO } from '../data/salonData';
import { X, MessageCircle, Clock, CheckCircle2, Sparkles, MapPin, Phone } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Linta's Beauty Salon! I am interested in booking the "${service.name}" service. Please let me know available slots and pricing for North Nazimabad Karachi studio.`
  );
  const directWhatsappUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFDF9] border border-[#F2D8DF] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#2E2E2E] hover:bg-white hover:text-[#8A4F62] flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 w-full bg-[#FFF7F2] shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="bg-[#8A4F62] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-white/30 tracking-wider">
              {service.category} Service
            </span>
            <h3 className="font-serif text-2xl font-bold">{service.name}</h3>
            <div className="flex items-center gap-3 text-xs text-amber-200">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {service.duration}
              </span>
              <span>•</span>
              <span className="font-semibold text-white">{service.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#C78E7B]">Service Description</h4>
            <p className="text-sm text-[#6E6E6E] leading-relaxed">{service.description}</p>
          </div>

          <div className="bg-[#FFF7F2] p-4 rounded-2xl border border-[#F2D8DF] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A4F62] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D98B9D]" /> Key Service Highlights
            </h4>
            <ul className="space-y-2 text-xs text-[#2E2E2E]">
              {service.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D98B9D] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-2 text-xs text-[#6E6E6E] bg-[#FFF7F2] p-3 rounded-xl border border-[#F2D8DF]">
            <MapPin className="w-4 h-4 text-[#D98B9D] shrink-0" />
            <span>Available at Linta's Beauty Salon, North Nazimabad Block L, Karachi.</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#8A4F62] hover:bg-[#723E50] text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400" />
              <span>Inquire & Book on WhatsApp</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="bg-[#FFF7F2] hover:bg-[#F9E8EC] text-[#2E2E2E] border border-[#F2D8DF] py-3 px-4 rounded-full font-medium text-sm transition-colors flex items-center justify-center gap-1.5 text-center"
            >
              <Phone className="w-4 h-4 text-[#8A4F62]" /> Call Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
