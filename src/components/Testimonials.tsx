'use client';

import React from 'react';
import { Star, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/parlourData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
            Client Accolades
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Loved By <span className="text-rose-gold-gradient">Brides & Royalty</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Read firsthand accounts from our elite clientele who experienced the transformative touch of Lumina Luxe.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="luxe-card rounded-3xl p-5 sm:p-8 border border-[#D97D64]/20 flex flex-col justify-between space-y-4 sm:space-y-6 relative group hover:border-[#D97D64]/60 transition-all duration-300 bg-white shadow-md"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#D97D64]/15 absolute top-5 right-5 sm:top-6 sm:right-6 pointer-events-none" />

              <div className="space-y-3 sm:space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#D97D64]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D97D64]" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#B85F48] bg-[#FFF0EC] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border border-[#D97D64]/20">
                  {review.service}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#3E3048] leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#D97D64] shrink-0 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1C1322]">{review.name}</h4>
                    {review.verified && (
                      <span title="Verified Customer">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#6B5E72] font-semibold">{review.role} • {review.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Ratings Banner */}
        <div className="mt-8 sm:mt-14 luxe-card p-3.5 xs:p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#D97D64]/20 grid grid-cols-3 gap-1.5 sm:gap-6 text-center bg-white shadow-xl">
          <div>
            <div className="font-serif text-base xs:text-xl sm:text-3xl font-bold text-[#D97D64]">4.9 / 5.0</div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] font-bold mt-0.5">Google Rating</p>
          </div>
          <div className="border-x border-gray-200 px-1 sm:px-2">
            <div className="font-serif text-base xs:text-xl sm:text-3xl font-bold text-[#1C1322]">99.4%</div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] font-bold mt-0.5">Satisfaction</p>
          </div>
          <div>
            <div className="font-serif text-base xs:text-xl sm:text-3xl font-bold text-[#D97D64]">100% Clean</div>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] font-bold mt-0.5">Hygiene</p>
          </div>
        </div>

      </div>
    </section>
  );
}
