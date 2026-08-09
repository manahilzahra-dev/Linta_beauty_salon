import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem, SALON_INFO } from '../data/salonData';
import { ServiceModal } from './ServiceModal';
import { Sparkles, Search, Clock, MessageCircle, Eye, ArrowUpRight, Filter } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Care & Color' },
    { id: 'skin', label: 'Skin & Hydrafacial' },
    { id: 'makeup', label: 'Bridal & Party Makeup' },
    { id: 'waxing', label: 'Threading & Waxing' },
    { id: 'nails', label: 'Mani & Pedi' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Premium Service Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Curated Beauty & Hair <span className="text-[#8A4F62] italic font-normal">Treatments</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            Explore our comprehensive range of high-performance haircare, skincare, and bridal services in North Nazimabad.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#8A4F62] text-white shadow-sm'
                    : 'bg-[#FFF7F2] text-[#2E2E2E] hover:bg-[#F9E8EC] border border-[#F2D8DF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E6E6E]" />
            <input
              type="text"
              placeholder="Search services (e.g. Balayage)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-[#2E2E2E] placeholder-[#6E6E6E] focus:outline-none focus:border-[#8A4F62]"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] p-8 max-w-md mx-auto">
            <p className="font-serif text-lg font-bold text-[#2E2E2E]">No services found</p>
            <p className="text-xs text-[#6E6E6E] mt-1">Try adjusting your search query or filter tab.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 bg-[#8A4F62] text-white px-4 py-2 rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const whatsappMsg = encodeURIComponent(
                `Hello Linta's Beauty Salon! I want to book "${service.name}" at your North Nazimabad Karachi studio.`
              );
              const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${whatsappMsg}`;

              return (
                <div
                  key={service.id}
                  className="bg-[#FFF7F2] rounded-3xl border border-[#F2D8DF] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Service Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#FFFDF9]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category & Popular Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur-xs text-[#8A4F62] text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-[#F2D8DF] shadow-xs">
                        {service.category}
                      </span>
                      {service.popular && (
                        <span className="bg-[#8A4F62] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-200" /> Popular
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 text-amber-200">
                        <Clock className="w-3.5 h-3.5" /> {service.duration}
                      </span>
                      <span className="bg-[#8A4F62] text-white text-[11px] px-2.5 py-0.5 rounded-full border border-white/20">
                        {service.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-[#2E2E2E] group-hover:text-[#8A4F62] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#6E6E6E] line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Highlights bullet list */}
                    <div className="pt-2 border-t border-[#F2D8DF]">
                      <ul className="space-y-1 text-[11px] text-[#2E2E2E]">
                        {service.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D98B9D] shrink-0" />
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-2 flex items-center gap-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#8A4F62] hover:bg-[#723E50] text-white py-2.5 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" /> Book Slot
                      </a>

                      <button
                        onClick={() => setActiveModalService(service)}
                        className="bg-[#FFFDF9] hover:bg-[#F9E8EC] text-[#8A4F62] border border-[#F2D8DF] p-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                        title="Quick View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Service Details Modal Popup */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
};
