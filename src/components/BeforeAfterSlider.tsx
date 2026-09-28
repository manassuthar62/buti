'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowLeftRight } from 'lucide-react';
import { TRANSFORMATIONS, Transformation } from '@/data/parlourData';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export default function BeforeAfterSlider({ onOpenBooking }: BeforeAfterSliderProps) {
  const [selectedTransIndex, setSelectedTransIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTrans: Transformation = TRANSFORMATIONS[selectedTransIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-12 sm:py-20 relative bg-gradient-to-b from-[#FFF5F2] to-[#FCF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
            Live Makeover Studio
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Real Transformations, <span className="text-rose-gold-gradient">Flawless Results</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium">
            Drag the interactive slider left or right to reveal the astonishing before & after makeover artistry.
          </p>
        </div>

        {/* Transformation Selector Tabs */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 xs:gap-2 sm:gap-4 pb-2 sm:pb-0 sm:justify-center mb-6 sm:mb-10 px-1">
          {TRANSFORMATIONS.map((trans, idx) => (
            <button
              key={trans.id}
              onClick={() => {
                setSelectedTransIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 xs:px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedTransIndex === idx
                  ? 'btn-primary-luxe shadow-md scale-105'
                  : 'bg-white text-[#5A4D62] border border-[#D97D64]/20 hover:border-[#D97D64] hover:text-[#D97D64]'
              }`}
            >
              <span>{trans.category}</span>
            </button>
          ))}
        </div>

        {/* Main Slider & Story Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          
          {/* Draggable Slider Component */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[290px] xs:h-[350px] sm:h-[480px] rounded-3xl overflow-hidden luxe-card border-2 sm:border-4 border-white cursor-ew-resize select-none shadow-2xl bg-white touch-none"
            >
              {/* After Image (Full width background) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeTrans.afterImage}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeTrans.beforeImage}
                  alt="Before Transformation"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Before Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[9px] sm:text-xs font-bold tracking-wider text-white shadow-lg">
                BEFORE
              </div>

              {/* After Badge */}
              <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-gradient-to-r from-[#D97D64] to-[#C59B43] text-white text-[9px] sm:text-xs font-extrabold tracking-wider shadow-xl">
                AFTER GLAM ✨
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] sm:w-[4px] bg-white shadow-[0_0_15px_rgba(217,125,100,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handle Icon Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#D97D64] to-[#C59B43] border-2 border-white flex items-center justify-center shadow-xl">
                  <ArrowLeftRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>

              {/* Drag Hint at Bottom */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] sm:text-xs text-white font-semibold flex items-center gap-1 sm:gap-2 pointer-events-none whitespace-nowrap">
                <MoveHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F5DE98]" />
                <span>Drag left or right</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Story & Treatments Used */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-6">
            <div className="luxe-card p-4 xs:p-5 sm:p-8 rounded-3xl border border-[#D97D64]/20 space-y-3.5 sm:space-y-6 bg-white shadow-xl">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D97D64] font-extrabold">
                  Transformation Spotlight
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#1C1322] mt-0.5">
                  {activeTrans.title}
                </h3>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFF4F1] border border-[#D97D64]/20 space-y-1 sm:space-y-1.5">
                <span className="text-xs text-[#B85F48] font-bold block">The Client's Story:</span>
                <p className="text-xs sm:text-sm text-[#5A4D62] leading-relaxed font-medium">
                  "{activeTrans.clientStory}"
                </p>
              </div>

              <div className="space-y-2 sm:space-y-2.5">
                <span className="text-xs uppercase tracking-wider text-[#6B5E72] font-bold block">
                  Rituals & Formulations Applied:
                </span>
                {activeTrans.servicesDone.map((serv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1C1322] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97D64] shrink-0" />
                    <span>{serv}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1 sm:pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary-luxe w-full py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book This Makeover For Yourself</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
