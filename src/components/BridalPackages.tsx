'use client';

import React from 'react';
import { Crown, Sparkles, Check, ArrowRight, Calendar } from 'lucide-react';
import { BRIDAL_PACKAGES } from '@/data/parlourData';

interface BridalPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function BridalPackages({ onSelectPackage }: BridalPackagesProps) {
  return (
    <section id="bridal" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Crown className="w-3.5 h-3.5 text-[#D97D64]" />
            Haute Bridal Atelier
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Royal Bridal & <span className="text-rose-gold-gradient">Couture Packages</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Designed for the bride who desires absolute perfection on the most magical milestone of her life.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {BRIDAL_PACKAGES.map((pkg, idx) => {
            const isFeatured = idx === 1; // Royal Kohinoor as centerpiece
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 bg-white ${
                  isFeatured
                    ? 'luxe-card border-2 border-[#D97D64] shadow-[0_15px_40px_rgba(217,125,100,0.22)] lg:-translate-y-3'
                    : 'luxe-card border border-[#D97D64]/20 hover:border-[#D97D64]'
                }`}
              >
                {/* Centerpiece Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#D97D64] via-[#E28E77] to-[#C59B43] text-white text-center text-[10px] sm:text-xs font-extrabold py-1.5 sm:py-2 uppercase tracking-widest shadow-md z-10">
                    👑 {pkg.badge}
                  </div>
                )}

                {/* Card Top / Header */}
                <div className={`p-4 xs:p-5 sm:p-8 ${pkg.badge ? 'pt-8 xs:pt-10 sm:pt-12' : ''}`}>
                  {/* Package Image Banner */}
                  <div className="relative h-40 xs:h-44 sm:h-48 rounded-2xl overflow-hidden mb-3.5 sm:mb-6 border border-gray-100 bg-[#FFF4F1]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-[10px] xs:text-[11px] sm:text-xs">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[#B85F48] font-bold border border-[#D97D64]/20 shadow-sm">
                        {pkg.duration}
                      </span>
                      {pkg.includesTrials && (
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500 text-white font-bold shadow-md">
                          Trial Included
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif text-base xs:text-lg sm:text-2xl font-bold text-[#1C1322] mb-1 leading-snug">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-[10px] xs:text-[11px] sm:text-xs text-[#D97D64] mb-3 sm:mb-4 font-bold">
                    Ideal for: {pkg.idealFor}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3.5 sm:mb-6 pb-3 sm:pb-6 border-b border-gray-100">
                    <span className="font-serif text-xl xs:text-2xl sm:text-4xl font-bold text-[#D97D64]">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] xs:text-xs sm:text-sm text-[#9B8E9E] line-through font-semibold">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2 sm:space-y-3">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6B5E72] font-bold block">
                      Ritual Inclusions:
                    </span>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] xs:text-xs sm:text-sm text-[#3E3048] font-medium">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97D64] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Bottom */}
                <div className="p-4 xs:p-5 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 ${
                      isFeatured
                        ? 'btn-primary-luxe hover:scale-105'
                        : 'btn-secondary-luxe hover:scale-105'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Reserve {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Consultation Strip */}
        <div className="mt-8 sm:mt-12 luxe-card p-5 sm:p-8 rounded-3xl border border-[#D97D64]/20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left bg-gradient-to-r from-[#FFF4F1] to-white shadow-lg">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-serif text-base sm:text-xl font-bold text-[#1C1322]">
              Need a Customized Destination Wedding or Family Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#5A4D62] font-medium">
              Our Creative Directors travel across India & internationally for bespoke bridal entourages.
            </p>
          </div>
          <button
            onClick={() => onSelectPackage('Custom Destination Bridal Package')}
            className="btn-secondary-luxe w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm whitespace-nowrap hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            Talk to Bridal Concierge
          </button>
        </div>

      </div>
    </section>
  );
}
