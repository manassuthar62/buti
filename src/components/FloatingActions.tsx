'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone, Calendar, Sparkles, Crown } from 'lucide-react';
import { PARLOUR_INFO } from '@/data/parlourData';

interface FloatingActionsProps {
  onQuickBook: () => void;
}

export default function FloatingActions({ onQuickBook }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWhatsAppLink = `https://wa.me/${PARLOUR_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Arti Bhavsar! I would like to inquire about bridal packages and appointments at Nivi Beauty Care (Partapur).'
  )}`;

  return (
    <>
      {/* Desktop Floating Actions (Hidden on Mobile) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white border-2 border-[#D97D64]/40 text-[#D97D64] flex items-center justify-center hover:bg-[#D97D64] hover:text-white transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </button>
        )}

        {/* Floating WhatsApp Concierge Widget */}
        <a
          href={directWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-extrabold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Chat on WhatsApp"
        >
          {/* Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-bold">Chat with Concierge</span>
          
          {/* Live Status indicator */}
          <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-[#25D366]" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Dock (Visible only on Mobile screens <640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FCF9F5]/95 backdrop-blur-2xl border-t border-[#D97D64]/25 px-3 py-2 pb-safe shadow-[0_-8px_25px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          
          {/* 1-Tap Call Studio */}
          <a
            href={`tel:${PARLOUR_INFO.phone}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl bg-white border border-gray-200 text-[#1C1322] active:bg-[#FFF0EC] transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#D97D64]" />
            <span className="text-[10px] font-bold mt-0.5">Call</span>
          </a>

          {/* 1-Tap WhatsApp */}
          <a
            href={directWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl bg-[#25D366] text-white active:opacity-90 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="text-[10px] font-extrabold mt-0.5">WhatsApp</span>
          </a>

          {/* Quick Bridal Link */}
          <a
            href="#bridal"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl bg-white border border-[#D97D64]/30 text-[#B85F48] active:bg-[#FFF0EC] transition-all shadow-xs"
          >
            <Crown className="w-4 h-4 text-[#D97D64]" />
            <span className="text-[10px] font-bold mt-0.5">Bridal</span>
          </a>

          {/* Main Book Appointment Action Button */}
          <button
            onClick={onQuickBook}
            className="flex-[2] btn-primary-luxe py-2.5 px-3 rounded-2xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-xs font-black text-white whitespace-nowrap">Book Now</span>
          </button>

        </div>
      </div>
    </>
  );
}
