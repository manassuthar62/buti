'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Search, Tag } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/parlourData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'skin', label: 'Skin & Facial' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'hair', label: 'Hair & Balayage' },
    { id: 'makeup', label: 'Party Glam' },
    { id: 'nails', label: 'Nail Lounge' },
    { id: 'spa', label: 'Spa & Wellness' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
            Curated Salon Menu & Pricing
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Indulge in <span className="text-rose-gold-gradient">Signature Rituals</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Every service is an artisanal masterclass using world-renowned clinical and organic formulations.
          </p>
        </div>

        {/* Search Bar & Category Horizontal Scroll */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative px-1">
            <Search className="w-4 h-4 text-[#D97D64] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rituals (e.g., Hydra Facial, Balayage, Bridal)..."
              className="w-full bg-white border-2 border-[#D97D64]/25 focus:border-[#D97D64] rounded-full pl-10 pr-12 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1322] placeholder-[#6B5E72]/60 outline-none transition-all shadow-sm focus:shadow-[0_0_20px_rgba(217,125,100,0.2)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#D97D64] font-bold hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips (Horizontally swipeable on mobile, flex-wrap on desktop) */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-2.5 pb-2 sm:pb-0 sm:justify-center px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'btn-primary-luxe shadow-md scale-105'
                    : 'bg-white text-[#5A4D62] border border-[#D97D64]/20 hover:border-[#D97D64] hover:text-[#D97D64]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredServices.map((service) => {
            const discountPercent = service.originalPrice
              ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
              : null;

            return (
              <div
                key={service.id}
                className="luxe-card rounded-3xl overflow-hidden flex flex-col group bg-white border border-[#D97D64]/20 hover:border-[#D97D64]/60 shadow-sm"
              >
                {/* Service Image with Badges */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#FFF4F1]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Tag badge */}
                  {service.tag && (
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D97D64]/30 text-[10px] sm:text-[11px] font-extrabold text-[#B85F48] shadow-md">
                      <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D97D64]" />
                      <span>{service.tag}</span>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-1 px-2.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] sm:text-[11px] text-white font-bold">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F5DE98]" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Category Pill & Discount */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-wider drop-shadow-md">
                      {service.categoryLabel}
                    </span>
                    {discountPercent && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white font-bold text-[9px] sm:text-[10px] shadow-md">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-[#1C1322] group-hover:text-[#D97D64] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B5E72] mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Benefits bullet list */}
                    <div className="mt-3 space-y-1 sm:space-y-1.5 border-t border-gray-100 pt-2.5 sm:pt-3">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#5A4D62] font-medium">
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D97D64] shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking Action */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#6B5E72] block uppercase tracking-wider font-bold">Experience Fee</span>
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="font-serif text-lg sm:text-2xl font-bold text-[#D97D64]">
                          ₹{service.price.toLocaleString('en-IN')}
                        </span>
                        {service.originalPrice && (
                          <span className="text-[11px] sm:text-xs text-[#9B8E9E] line-through font-semibold">
                            ₹{service.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className="btn-primary-luxe px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-transform"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 luxe-card rounded-3xl p-6 sm:p-8 max-w-md mx-auto space-y-3 bg-white">
            <p className="text-[#D97D64] font-serif text-base sm:text-lg font-bold">No rituals matched your search.</p>
            <p className="text-xs text-[#6B5E72]">Try searching for other keywords like "Facial", "Hair", or "Bridal".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn-secondary-luxe px-5 py-2.5 rounded-full text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
