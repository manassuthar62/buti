'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/parlourData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 relative bg-gradient-to-b from-[#FFF5F2] to-[#FCF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <HelpCircle className="w-3.5 h-3.5 text-[#D97D64]" />
            Curated Inquiries
          </div>
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1322] tracking-tight">
            Frequently Asked <span className="text-rose-gold-gradient">Questions</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-[#6B5E72] font-medium">
            Everything you need to know regarding our luxury treatments, bridal trials, and concierge protocols.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`luxe-card rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isOpen ? 'border-[#D97D64] shadow-md' : 'border-[#D97D64]/20 hover:border-[#D97D64]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 cursor-pointer focus:outline-none active:bg-gray-50"
                >
                  <span className="font-serif text-sm sm:text-lg font-bold text-[#1C1322] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF0EC] flex items-center justify-center text-[#D97D64] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D97D64] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-[#5A4D62] leading-relaxed font-medium border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
