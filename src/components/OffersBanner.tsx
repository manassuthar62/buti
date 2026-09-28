'use client';

import React, { useState, useEffect } from 'react';
import { Timer, Crown, ArrowRight, Copy, Check } from 'lucide-react';

interface OffersBannerProps {
  onClaimOffer: () => void;
}

export default function OffersBanner({ onClaimOffer }: OffersBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('ROYAL25');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="offers" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Limited Time Discount Countdown Box */}
          <div className="lg:col-span-7 luxe-card rounded-3xl p-4 xs:p-5 sm:p-10 border-2 border-[#D97D64]/30 relative overflow-hidden space-y-3.5 sm:space-y-6 shadow-2xl bg-white">
            <div className="flex items-center gap-1.5 text-[10px] xs:text-[11px] sm:text-xs text-[#D97D64] uppercase tracking-wider sm:tracking-widest font-extrabold">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Limited-Time Festive Privilege</span>
            </div>

            <h3 className="font-serif text-xl xs:text-2xl sm:text-4xl font-bold text-[#1C1322] leading-tight">
              Enjoy <span className="text-rose-gold-gradient">Flat 25% Off</span> On All Bridal & Hair Rituals
            </h3>

            <p className="text-xs sm:text-sm text-[#5A4D62] font-medium leading-relaxed">
              Celebrate the wedding & festive season with complimentary gold ampoule infusions and luxury styling consultations.
            </p>

            {/* Countdown Counter Units (Ultra responsive for 320px+ mobile) */}
            <div className="grid grid-cols-4 gap-1.5 xs:gap-2 sm:gap-4 max-w-md">
              {[
                { val: timeLeft.days, label: 'Days' },
                { val: timeLeft.hours, label: 'Hours' },
                { val: timeLeft.minutes, label: 'Mins' },
                { val: timeLeft.seconds, label: 'Secs' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-1.5 xs:p-2.5 sm:p-4 rounded-xl xs:rounded-2xl bg-[#FFF4F1] border border-[#D97D64]/20 text-center shadow-inner"
                >
                  <span className="font-serif text-lg xs:text-xl sm:text-3xl font-bold text-[#D97D64] block leading-none sm:leading-tight">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] xs:text-[9px] sm:text-xs text-[#6B5E72] uppercase tracking-wider font-bold mt-1 block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Promo Code & Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <div className="flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-3 rounded-full bg-[#FFF0EC] border-2 border-dashed border-[#D97D64] gap-2.5">
                <span className="text-xs text-[#6B5E72] font-bold">Code:</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#D97D64] tracking-wider">ROYAL25</span>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-[#D97D64] hover:text-[#B85F48] flex items-center gap-1 cursor-pointer font-bold active:scale-95 transition-transform"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={onClaimOffer}
                className="btn-primary-luxe w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <span>Claim 25% Privilege</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Right: VIP Black Diamond Membership Card */}
          <div className="lg:col-span-5 relative mt-3 sm:mt-0">
            <div className="relative rounded-3xl p-4 xs:p-5 sm:p-8 bg-gradient-to-tr from-[#2A1D33] via-[#3D2B4A] to-[#1E1424] text-white border-2 border-[#E5C368]/40 shadow-2xl overflow-hidden space-y-3.5 sm:space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5DE98]" />
                  <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white">
                    NIVI <span className="text-[#F5DE98]">ROYALE</span>
                  </span>
                </div>
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E5C368]/25 text-[#F5DE98] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider border border-[#E5C368]/50">
                  VIP Club
                </span>
              </div>

              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <p className="text-[10px] sm:text-xs text-[#F5DE98] uppercase tracking-widest font-extrabold">
                  Exclusive Privilege Pass
                </p>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                  Enjoy priority booking, complimentary French champagne service, 20% off all year, and private bridal dressing suite access.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] text-gray-300 block uppercase font-semibold">ANNUAL PASS</span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-white">₹9,999 / Year</span>
                </div>
                <button
                  onClick={onClaimOffer}
                  className="px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold bg-[#E5C368] text-[#1E1424] hover:bg-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                >
                  Join VIP Club
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
