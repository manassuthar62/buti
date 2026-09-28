'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight, Award } from 'lucide-react';
import { PARLOUR_INFO } from '@/data/parlourData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenQuiz: () => void;
}

export default function Navbar({ onOpenBooking, onOpenQuiz }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Makeovers', href: '#transformations' },
    { name: 'About Arti', href: '#stylists' },
    { name: 'Offers', href: '#offers' },
    { name: 'Lookbook', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      
      {/* Top Luxury Announcement Bar (Collapses smoothly on scroll) */}
      <div
        className={`bg-gradient-to-r from-[#C26B54] via-[#D97D64] to-[#C59B43] text-white text-[10px] sm:text-xs px-3 sm:px-4 shadow-sm transition-all duration-300 overflow-hidden ${
          scrolled ? 'py-1 max-h-7 opacity-95' : 'py-1.5 sm:py-2 max-h-12 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left Award & Artist Tag */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium truncate">
            <span className="bg-black/25 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F5DE98]" /> Winner: Glam Bliss
            </span>
            <span className="text-white/95 text-[10px] sm:text-xs truncate">
              By Celebrity Artist <strong>ARTI BHAVSAR</strong>
            </span>
          </div>

          {/* Right Social & Contact */}
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold shrink-0">
            <a
              href={PARLOUR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 sm:px-2.5 py-0.5 rounded-full transition-all text-white"
            >
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{PARLOUR_INFO.instagramFollowers}</span>
            </a>
            <a
              href={`tel:${PARLOUR_INFO.phone}`}
              className="flex items-center gap-1 text-white hover:underline"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden md:inline">{PARLOUR_INFO.phone}</span>
              <span className="md:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FCF9F5]/98 backdrop-blur-2xl border-b border-[#D97D64]/20 shadow-[0_10px_30px_rgba(217,125,100,0.15)] py-2 sm:py-2.5'
            : 'bg-[#FCF9F5]/95 backdrop-blur-xl border-b border-[#D97D64]/15 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo Section */}
            <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#D97D64] via-[#E28E77] to-[#C59B43] p-[1.5px] shadow-[0_3px_12px_rgba(217,125,100,0.3)] transition-transform group-hover:scale-105 shrink-0">
                <div className="w-full h-full bg-[#FCF9F5] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97D64]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-2xl font-black tracking-tight text-[#1C1322] group-hover:text-[#D97D64] transition-colors leading-none whitespace-nowrap">
                  NIVI <span className="text-rose-gold-gradient">BEAUTY CARE</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#8B7C93] font-sans font-bold mt-0.5 whitespace-nowrap">
                  Arti Bhavsar • Partapur
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] xl:text-sm text-[#2E2435] hover:text-[#D97D64] font-bold tracking-wide transition-colors relative group py-1 whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97D64] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenQuiz}
                className="text-xs px-3.5 py-2 rounded-full bg-[#FFF0EC] text-[#B85F48] hover:bg-[#FDE8E9] border border-[#D97D64]/30 font-bold transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 shadow-sm whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
                <span>Beauty Quiz</span>
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="btn-primary-luxe text-xs sm:text-sm px-4.5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-transform whitespace-nowrap font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Trigger */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary-luxe text-[11px] px-3 py-1.5 rounded-full font-extrabold sm:hidden shadow-sm active:scale-95 transition-transform"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-[#D97D64] hover:bg-[#FFF0EC] rounded-xl transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF9F5]/98 backdrop-blur-xl border-b border-[#D97D64]/25 px-4 py-4 space-y-3.5 shadow-2xl animate-fadeIn max-h-[80vh] overflow-y-auto">
            {/* Arti Bhavsar Spotlight */}
            <div className="p-3 bg-gradient-to-r from-[#FFF0EC] to-[#FDE8E9] rounded-2xl border border-[#D97D64]/30 text-center shadow-sm">
              <span className="text-xs font-bold text-[#D97D64] block">ARTIST: ARTI BHAVSAR</span>
              <span className="text-[11px] text-[#6B5E72] font-semibold">🏆 Winner: Glam Bliss Awards 💅 • Partapur</span>
            </div>

            {/* Action Buttons in Drawer */}
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-200/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FFF0EC] text-[#B85F48] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
                Beauty Quiz
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-3 rounded-xl btn-primary-luxe text-xs flex items-center justify-center gap-1.5 font-bold shadow-md active:scale-95 transition-transform"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </button>
            </div>

            {/* Nav list */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-[#1C1322] hover:text-[#D97D64] py-2.5 px-3 rounded-xl hover:bg-white flex items-center justify-between transition-colors active:bg-[#FFF0EC]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#D97D64]" />
                </a>
              ))}
            </div>

            {/* Location, Contact and Info */}
            <div className="pt-2 text-xs text-[#6B5E72] space-y-2 font-medium border-t border-gray-200/80">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D97D64] shrink-0" /> {PARLOUR_INFO.hours}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D97D64] shrink-0 mt-0.5" /> {PARLOUR_INFO.address}, {PARLOUR_INFO.city}
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={`tel:${PARLOUR_INFO.phone}`}
                  className="flex-1 py-2 rounded-xl bg-gray-100 text-center font-bold text-xs text-[#1C1322] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D97D64]" /> Call Studio
                </a>
                <a
                  href={`https://wa.me/${PARLOUR_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-[#25D366] text-center font-bold text-xs text-white flex items-center justify-center gap-1.5 shadow-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
