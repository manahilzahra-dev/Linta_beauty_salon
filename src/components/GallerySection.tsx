import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, SALON_INFO } from '../data/salonData';
import { Sparkles, Maximize2, X, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Bridal', 'Hair', 'Skincare', 'Makeup', 'Studio'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedFilter === 'All' || item.category === selectedFilter
  );

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Visual Lookbook
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E] tracking-tight">
            Luxury Gallery & <span className="text-[#8A4F62] italic font-normal">Portfolios</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            A showcase of bridal beauty, hair color artistry, and our modern studio ambience in North Nazimabad.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === f
                  ? 'bg-[#8A4F62] text-white shadow-sm'
                  : 'bg-[#FFF7F2] text-[#2E2E2E] hover:bg-[#F9E8EC] border border-[#F2D8DF]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry / Pinterest Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden border border-[#F2D8DF] bg-[#FFF7F2] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-[#8A4F62] text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-amber-200 uppercase font-semibold tracking-wider">{item.category}</p>
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#F2D8DF] shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 flex items-center justify-between bg-[#FFFDF9]">
              <div>
                <span className="bg-[#FFF7F2] text-[#8A4F62] border border-[#F2D8DF] text-xs font-semibold px-2.5 py-1 rounded-full">
                  {activeLightboxItem.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2E2E2E] mt-2">{activeLightboxItem.title}</h3>
              </div>

              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Linta's Beauty Salon! I loved this look: "${activeLightboxItem.title}" in your gallery.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8A4F62] hover:bg-[#723E50] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shrink-0"
              >
                Inquire This Look
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
