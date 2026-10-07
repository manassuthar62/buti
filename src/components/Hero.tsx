'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Award, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PARLOUR_INFO } from '@/data/parlourData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/1IMAGE.jpg',
    badge: 'Celebrity Artist',
    title: 'Arti Bhavsar',
    subtitle: 'Founder & Celebrity Makeup Artist • Glam Bliss Winner',
  },
  {
    id: 2,
    image: '/images/2IMAGE.jpg',
    badge: 'Master Couturier',
    title: 'Arti Bhavsar',
    subtitle: 'Hair Sculpture & Red Carpet Glamour Specialist',
  },
  {
    id: 3,
    image: '/images/3IMAGE.jpg',
    badge: 'Haute Runway',
    title: 'Arti Bhavsar',
    subtitle: '80s Glam & International Aesthetic Vision',
  },
  {
    id: 4,
    image: '/images/4IMAGE.jpg',
    badge: 'Signature Style',
    title: 'Arti Bhavsar',
    subtitle: 'Editorial Beauty & Cinematic Makeup Director',
  },
];

export default function Hero({ onOpenBooking, onOpenQuiz }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-4 sm:pt-8 pb-12 sm:pb-16 lg:py-20">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-[#FDE8E9] to-[#F5E6BE] rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#FFF0EC] to-[#FDE8E9] rounded-full filter blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-3.5 sm:space-y-6">
            
            {/* Top Awards & Social Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full badge-luxe shadow-xs">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#D97D64]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-extrabold font-sans">
                  🏆 Glam Bliss Winner 💅
                </span>
              </div>

              <a
                href={PARLOUR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-[#D97D64]/30 shadow-xs text-[10px] sm:text-xs font-bold text-[#B85F48] hover:bg-[#FFF0EC] transition-all"
              >
                <span>📸 {PARLOUR_INFO.instagramFollowers} on Insta</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl xs:text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1322] leading-[1.2] sm:leading-[1.15]">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2">
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
            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-3 sm:pt-6 border-t border-[#D97D64]/20 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="font-serif text-base xs:text-xl sm:text-2xl font-bold text-[#D97D64]">
                  777+
                </div>
                <span className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Bridal Posts
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-x border-[#D97D64]/20 px-1 sm:px-2">
                <div className="font-serif text-base xs:text-xl sm:text-2xl font-bold text-[#1C1322]">
                  11.3K+
                </div>
                <span className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Insta Family
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="font-serif text-base xs:text-xl sm:text-2xl font-bold text-rose-gold-gradient">
                  Partapur
                </div>
                <span className="text-[9px] xs:text-[10px] sm:text-xs text-[#6B5E72] mt-0.5 font-semibold leading-tight">
                  Banswara
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Auto-Slideshow Showcase */}
          <div className="lg:col-span-5 relative mt-3 sm:mt-4 lg:mt-0">
            <div
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Glowing Rose-Gold Border Card */}
              <div className="relative rounded-3xl overflow-hidden luxe-card p-2 sm:p-3 shadow-2xl bg-white border-2 border-[#D97D64]/30">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] sm:max-h-[520px] w-full rounded-2xl overflow-hidden bg-[#2D1B28]">
                  
                  {/* Slides */}
                  {HERO_SLIDES.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-top sm:object-center transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                  
                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-20 pointer-events-none" />

                  {/* Top Badge on Image */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-30 flex items-center gap-1 px-2.5 sm:px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D97D64]/50 text-[10px] sm:text-xs text-[#F5DE98] font-bold shadow-lg transition-all">
                    <Sparkles className="w-3 h-3 text-[#F5DE98]" />
                    <span>{activeSlide.badge}</span>
                  </div>

                  {/* Live Status on Image */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-30 flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/50 text-[10px] sm:text-xs text-emerald-300 font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Today</span>
                  </div>

                  {/* Next / Prev Quick Nav Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md opacity-70 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md opacity-70 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="absolute top-12 right-2.5 sm:top-14 sm:right-4 z-30 flex flex-col gap-1.5 p-1 rounded-full bg-black/30 backdrop-blur-md">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-1.5 sm:w-2 transition-all duration-300 rounded-full cursor-pointer ${
                          idx === currentSlide
                            ? 'h-4 sm:h-5 bg-[#F5DE98]'
                            : 'h-1.5 sm:h-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-30 p-3 sm:p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-serif text-sm sm:text-base font-bold text-white truncate transition-all">
                          {activeSlide.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-[#F5DE98] font-semibold truncate">
                          {activeSlide.subtitle}
                        </p>
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

              {/* Floating Guarantee Badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#D97D64]/30 shadow-xl z-40">
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
