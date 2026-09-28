'use client';

import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, Send, Check, Award } from 'lucide-react';
import { PARLOUR_INFO } from '@/data/parlourData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#1A1222] text-[#F3EFF6] border-t-2 border-[#D97D64]/30 pt-12 sm:pt-16 pb-28 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Arti Bhavsar Profile */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#D97D64] via-[#E28E77] to-[#C59B43] p-[2px] shadow-md shrink-0">
                <div className="w-full h-full bg-[#1A1222] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97D64]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                  NIVI <span className="text-[#D97D64]">BEAUTY CARE</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#D97D64] -mt-0.5 font-sans font-bold">
                  By Arti Bhavsar • Partapur
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#D97D64]/40 text-[11px] sm:text-xs font-bold text-[#F5DE98]">
              <Award className="w-3.5 h-3.5 text-[#D97D64]" />
              <span>Glam Bliss Awards Winner 💅</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              {PARLOUR_INFO.description}
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={PARLOUR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
                title="Follow @nivi_beautycare_ on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@nivi_beautycare_</span>
              </a>

              <a
                href={`https://wa.me/${PARLOUR_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Arti's Signature Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#bridal" className="hover:text-[#D97D64] transition-colors">Royal HD Bridal Makeup</a></li>
              <li><a href="#bridal" className="hover:text-[#D97D64] transition-colors">Jewelry Architecture & Draping</a></li>
              <li><a href="#services" className="hover:text-[#D97D64] transition-colors">24K Gold Hydra Facial</a></li>
              <li><a href="#services" className="hover:text-[#D97D64] transition-colors">Caviar Keratin Botox</a></li>
              <li><a href="#services" className="hover:text-[#D97D64] transition-colors">French Balayage</a></li>
              <li><a href="#services" className="hover:text-[#D97D64] transition-colors">Haute Gel Nail Art</a></li>
            </ul>
          </div>

          {/* Column 3: Atelier Location & Hours */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Studio & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97D64] shrink-0 mt-0.5" />
                <span>{PARLOUR_INFO.address}, {PARLOUR_INFO.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D97D64] shrink-0" />
                <span>{PARLOUR_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97D64] shrink-0" />
                <a href={`tel:${PARLOUR_INFO.phone}`} className="hover:text-[#D97D64] font-semibold">{PARLOUR_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97D64] shrink-0" />
                <a href={`mailto:${PARLOUR_INFO.email}`} className="hover:text-[#D97D64] truncate">{PARLOUR_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Nivi Bridal Gazette
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              Subscribe for upcoming wedding discounts, jewelry lookbooks, and skincare tips by Arti Bhavsar.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-[#D97D64]/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-400 outline-none focus:border-[#D97D64]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-lg btn-primary-luxe"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> You are enrolled in VIP Gazette!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-gray-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} NIVI BEAUTY CARE by ARTI BHAVSAR (Partapur, Banswara). All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white">Privacy Protocol</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Hygiene Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
