'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import BridalPackages from '@/components/BridalPackages';
import StylistsSection from '@/components/StylistsSection';
import OffersBanner from '@/components/OffersBanner';
import GallerySection from '@/components/GallerySection';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import BeautyQuizModal from '@/components/BeautyQuizModal';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleQuizBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FCF9F5] text-[#1C1322] overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Main Sections */}
      <main className="pt-[92px] sm:pt-[105px]">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={handleOpenQuiz}
        />

        {/* Curated Services Catalog */}
        <ServicesSection
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Before & After Interactive Transformation Slider */}
        <BeforeAfterSlider
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Haute Bridal & Couture Packages */}
        <BridalPackages
          onSelectPackage={(pkgName) => handleOpenBooking('royal-bridal-hd')}
        />

        {/* Celebrity Master Stylists */}
        <StylistsSection
          onBookWithStylist={() => handleOpenBooking()}
        />

        {/* Seasonal Offers & VIP Black Membership Banner */}
        <OffersBanner
          onClaimOffer={() => handleOpenBooking()}
        />

        {/* Portfolio Lookbook & Lightbox */}
        <GallerySection />

        {/* Client Testimonials & Accolades */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedServiceId={selectedServiceId}
      />

      {/* Virtual Beauty Diagnostic Quiz Modal */}
      <BeautyQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onBookService={handleQuizBookService}
      />

      {/* Floating Concierge / WhatsApp Actions */}
      <FloatingActions
        onQuickBook={() => handleOpenBooking()}
      />
    </div>
  );
}
