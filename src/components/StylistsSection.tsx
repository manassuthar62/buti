'use client';

import React from 'react';
import { Star, Award, Calendar } from 'lucide-react';
import { STYLISTS_DATA } from '@/data/parlourData';

interface StylistsSectionProps {
  onBookWithStylist: () => void;
}

export default function StylistsSection({ onBookWithStylist }: StylistsSectionProps) {
  return (
    <section id="stylists" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Award className="w-3.5 h-3.5 text-[#D97D64]" />
            Master Couturiers
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Meet Our <span className="text-rose-gold-gradient">Celebrity Artists</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Internationally certified master stylists and aesthetic doctors dedicated to crafting your signature look.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {STYLISTS_DATA.map((artist) => (
            <div
              key={artist.id}
              className="luxe-card rounded-3xl overflow-hidden flex flex-col group bg-white border border-[#D97D64]/20 hover:border-[#D97D64]/60 shadow-sm"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FFF4F1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D97D64]/30 text-xs text-[#D97D64] font-extrabold shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#D97D64]" />
                  <span>{artist.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] sm:text-[11px] text-[#F5DE98] font-bold">
                  {artist.experience} Craftsmanship
                </div>
              </div>

              {/* Info Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1322] group-hover:text-[#D97D64] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-[#D97D64] font-bold mt-0.5">
                    {artist.role}
                  </p>
                  <p className="text-xs text-[#6B5E72] mt-1.5 line-clamp-2 font-medium">
                    Specialty: {artist.specialty}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={onBookWithStylist}
                    className="w-full py-2.5 rounded-full btn-secondary-luxe text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
