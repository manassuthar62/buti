'use client';

import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/parlourData';

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filters = ['All', 'Bridal', 'Makeup', 'Hair', 'Nails', 'Skin', 'Spa'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedFilter === 'All' ? true : item.category.toLowerCase() === selectedFilter.toLowerCase()
  );

  return (
    <section id="gallery" className="py-12 sm:py-20 relative bg-gradient-to-b from-[#FCF9F5] to-[#FFF5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Camera className="w-3.5 h-3.5 text-[#D97D64]" />
            Haute Lookbook
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Glimpse Into Our <span className="text-rose-gold-gradient">Masterpieces</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Explore our portfolio of high-definition bridal glam, runway hairstyles, and bespoke nail aesthetics.
          </p>
        </div>

        {/* Filter Navigation (Horizontal swipeable on mobile) */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-2.5 pb-2 sm:pb-0 sm:justify-center mb-8 sm:mb-10 px-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedFilter === filter
                  ? 'btn-primary-luxe shadow-md scale-105'
                  : 'bg-white text-[#5A4D62] border border-[#D97D64]/20 hover:border-[#D97D64] hover:text-[#D97D64]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.image)}
              className="group relative h-48 xs:h-56 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden luxe-card cursor-pointer border-2 border-white hover:border-[#D97D64] transition-all duration-500 shadow-sm hover:shadow-xl bg-white active:scale-98"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover / Tap Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                <div className="self-end p-1.5 sm:p-2 rounded-full bg-white/30 backdrop-blur-md text-white">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#F5DE98] font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xs sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-2xl"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt="Enlarged Portfolio Item"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
