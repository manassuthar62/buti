'use client';

import React from 'react';
import { Sparkles, Calendar, Award, ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react';
import { PARLOUR_INFO } from '@/data/parlourData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenBooking, onOpenQuiz }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-4 sm:pt-8 pb-12 sm:pb-16 lg:py-20">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-[#FDE8E9] to-[#F5E6BE] rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#FFF0EC] to-[#FDE8E9] rounded-full filter blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Top Awards & Social Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full badge-luxe shadow-sm">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97D64]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-extrabold font-sans">
                  🏆 Winner: Glam Bliss Awards 💅
                </span>
              </div>

              <a
                href={PARLOUR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 sm:py-1.5 rounded-full bg-white border border-[#D97D64]/30 shadow-sm text-[11px] sm:text-xs font-bold text-[#B85F48] hover:bg-[#FFF0EC] transition-all"
              >
                <span>📸 {PARLOUR_INFO.instagramFollowers} on Instagram</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1322] leading-[1.18] sm:leading-[1.15]">
              Royal Bridal Makeup &{' '}
              <span className="text-rose-gold-gradient block sm:inline">
                Jewellery Styling
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-base text-[#5A4D62] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Welcome to <span className="text-[#1C1322] font-bold">NIVI BEAUTY CARE</span> by Celebrity Makeup Artist <span className="text-[#D97D64] font-bold">ARTI BHAVSAR</span> in Partapur, Banswara. Experience award-winning HD Airbrush Bridal Makeovers, Rajputi & Gujarati Jewellery Architecture, 24K Gold Hydra Facials, and Hair Couture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-primary-luxe w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-base font-bold flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Bridal / Slot</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="btn-secondary-luxe w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97D64]" />
                <span>Skin & Hair Quiz</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-[#D97D64]/20 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#D97D64]">
                  777+
                </div>
                <span className="text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Bridal Posts
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-x border-[#D97D64]/20 px-1 sm:px-2">
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#1C1322]">
                  11.3K+
                </div>
                <span className="text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Insta Family
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="font-serif text-lg sm:text-2xl font-bold text-rose-gold-gradient">
                  Partapur
                </div>
                <span className="text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Banswara
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Glowing Rose-Gold Border Card */}
              <div className="relative rounded-3xl overflow-hidden luxe-card p-2 sm:p-3 shadow-2xl bg-white border-2 border-[#D97D64]/30">
                <div className="relative h-[320px] xs:h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-[#FFF4F1]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/6.jpeg"
                    alt="Arti Bhavsar Bridal Makeover - Nivi Beauty Care"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badge on Image */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D97D64]/30 text-[10px] sm:text-xs text-[#B85F48] font-bold shadow-md">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D97D64]" />
                    <span>Signature Bridal</span>
                  </div>

                  {/* Live Status on Image */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-100/95 backdrop-blur-md border border-emerald-500/30 text-[10px] sm:text-xs text-emerald-800 font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Today</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D97D64]/30 shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-[#1C1322]">Nivi Royal Bridal Suite</h3>
                        <p className="text-[10px] sm:text-xs text-[#D97D64] font-semibold truncate">HD Airbrush • Royal Jewelry • Draping</p>
                      </div>
                      <button
                        onClick={onOpenBooking}
                        className="btn-primary-luxe p-2 sm:p-2.5 rounded-full cursor-pointer hover:scale-110 active:scale-95 transition-transform shadow-md shrink-0"
                        aria-label="Book Bridal Suite"
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Award Micro-Card (Shown on tablet and desktop) */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border-2 border-[#D97D64]/30 shadow-xl max-w-xs animate-float-slow">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D97D64] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/2.jpeg"
                    alt="Arti Bhavsar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1322]">ARTI BHAVSAR</p>
                  <p className="text-[11px] text-[#D97D64] font-bold">🏆 Glam Bliss Award Winner</p>
                  <p className="text-[9px] text-[#6B5E72] font-semibold">Owner • Nivi Beauty Care</p>
                </div>
              </div>

              {/* Floating Guarantee Badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#D97D64]/30 shadow-xl">
                <ShieldCheck className="w-4 h-4 text-[#D97D64]" />
                <span className="text-xs font-bold text-[#1C1322]">100% Original Cosmetics</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
