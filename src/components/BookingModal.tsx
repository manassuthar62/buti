'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Sparkles, Check, CheckCircle2, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, STYLISTS_DATA, PARLOUR_INFO } from '@/data/parlourData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preSelectedServiceId,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedServiceId || SERVICES_DATA[0].id
  );
  const [selectedStylistId, setSelectedStylistId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
    }
  }, [preSelectedServiceId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const selectedStylist = STYLISTS_DATA.find((st) => st.id === selectedStylistId);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    setIsConfirmed(true);
    // Fire festive celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D97D64', '#C59B43', '#F7B7A3', '#E5C368', '#FFFFFF'],
    });
  };

  const generateWhatsAppUrl = () => {
    const stylistName = selectedStylist ? selectedStylist.name : 'Senior Master Artist';
    const message = `✨ *NIVI BEAUTY CARE VIP APPOINTMENT* ✨%0A%0A` +
      `👑 *Service:* ${encodeURIComponent(selectedService.name)}%0A` +
      `💰 *Fee:* ₹${selectedService.price.toLocaleString('en-IN')}%0A` +
      `📅 *Date:* ${selectedDate}%0A` +
      `⏰ *Time Slot:* ${selectedTime}%0A` +
      `✂️ *Artist:* ${encodeURIComponent(stylistName)}%0A%0A` +
      `👤 *Client Name:* ${encodeURIComponent(guestName)}%0A` +
      `📱 *Contact:* ${encodeURIComponent(guestPhone)}%0A` +
      `${guestNotes ? `📝 *Notes:* ${encodeURIComponent(guestNotes)}%0A` : ''}%0A` +
      `Please confirm my VIP appointment at Nivi Beauty Care (Partapur). Thank you!`;

    return `https://wa.me/${PARLOUR_INFO.whatsapp}?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 border-t-2 sm:border-2 border-[#D97D64]/30 shadow-2xl my-0 sm:my-8 max-h-[90vh] sm:max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors cursor-pointer z-10 active:scale-95"
          aria-label="Close Booking Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {!isConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="mb-3.5 sm:mb-6 space-y-1 pr-7 sm:pr-8">
              <div className="flex items-center gap-1.5 text-[10px] xs:text-[11px] sm:text-xs text-[#D97D64] uppercase tracking-widest font-extrabold">
                <Sparkles className="w-3.5 h-3.5" />
                VIP Reservation Desk
              </div>
              <h3 className="font-serif text-lg xs:text-xl sm:text-3xl font-bold text-[#1C1322] leading-snug">
                Reserve Your Luxury Experience
              </h3>
            </div>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-8 border-b border-gray-100 pb-2.5 sm:pb-4">
              {[
                { s: 1, label: 'Ritual' },
                { s: 2, label: 'Artist' },
                { s: 3, label: 'Schedule' },
                { s: 4, label: 'Details' },
              ].map((item) => (
                <div key={item.s} className="flex items-center gap-1 sm:gap-2">
                  <div
                    className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold transition-all ${
                      step === item.s
                        ? 'btn-primary-luxe shadow-md'
                        : step > item.s
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {step > item.s ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : item.s}
                  </div>
                  <span
                    className={`text-[10px] xs:text-[11px] sm:text-xs hidden xs:inline font-semibold ${
                      step === item.s ? 'text-[#1C1322]' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs text-[#6B5E72] font-semibold">Select the ritual or bridal treatment you wish to reserve:</p>
                <div className="max-h-[260px] sm:max-h-[300px] overflow-y-auto space-y-2 pr-1">
                  {SERVICES_DATA.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 active:scale-98 ${
                        selectedServiceId === srv.id
                          ? 'bg-[#FFF0EC] border-[#D97D64] shadow-sm'
                          : 'bg-white border-gray-100 hover:border-[#D97D64]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={srv.image} alt={srv.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0" />
                        <div>
                          <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1C1322] leading-tight">{srv.name}</h4>
                          <span className="text-[10px] sm:text-[11px] text-[#D97D64] font-bold block mt-0.5">{srv.categoryLabel} • {srv.duration}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-serif text-sm sm:text-base font-bold text-[#D97D64]">
                          ₹{srv.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary-luxe w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Next: Select Artist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Stylist Selection */}
            {step === 2 && (
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs text-[#6B5E72] font-semibold">Choose your preferred master couturier or therapist:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-h-[260px] sm:max-h-[300px] overflow-y-auto pr-1">
                  {/* Any Stylist Option */}
                  <div
                    onClick={() => setSelectedStylistId('any')}
                    className={`p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 active:scale-98 ${
                      selectedStylistId === 'any'
                        ? 'bg-[#FFF0EC] border-[#D97D64] shadow-sm'
                        : 'bg-white border-gray-100 hover:border-[#D97D64]/40'
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF0EC] border border-[#D97D64]/30 flex items-center justify-center text-[#D97D64] shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1C1322]">Any Available Master Artist</h4>
                      <p className="text-[10px] sm:text-[11px] text-[#D97D64] font-bold">Fastest slot confirmation</p>
                    </div>
                  </div>

                  {STYLISTS_DATA.map((stylist) => (
                    <div
                      key={stylist.id}
                      onClick={() => setSelectedStylistId(stylist.id)}
                      className={`p-3 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3 active:scale-98 ${
                        selectedStylistId === stylist.id
                          ? 'bg-[#FFF0EC] border-[#D97D64] shadow-sm'
                          : 'bg-white border-gray-100 hover:border-[#D97D64]/40'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={stylist.image} alt={stylist.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#D97D64] shrink-0" />
                      <div>
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1C1322] leading-tight">{stylist.name}</h4>
                        <p className="text-[10px] sm:text-[11px] text-[#D97D64] font-semibold">{stylist.role}</p>
                        <p className="text-[9px] sm:text-[10px] text-[#6B5E72]">{stylist.experience} • ★ {stylist.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 flex justify-between gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-secondary-luxe px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary-luxe px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Next: Date & Time</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-xs text-[#1C1322] font-bold block mb-1.5">
                    Preferred Appointment Date:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-[#D97D64]/30 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-[#1C1322] font-semibold outline-none focus:border-[#D97D64]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#1C1322] font-bold block mb-1.5">
                    Select Time Slot:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 sm:py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                          selectedTime === slot
                            ? 'btn-primary-luxe shadow-md'
                            : 'bg-gray-100 text-[#5A4D62] hover:bg-gray-200'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex justify-between gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-secondary-luxe px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="btn-primary-luxe px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Next: Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Client Contact Details */}
            {step === 4 && (
              <form onSubmit={handleCompleteBooking} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-xs text-[#1C1322] font-bold block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#D97D64] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-[#D97D64]/30 rounded-xl pl-10 pr-4 py-2.5 text-sm sm:text-base text-[#1C1322] font-medium placeholder-gray-400 outline-none focus:border-[#D97D64]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#1C1322] font-bold block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#D97D64] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-[#D97D64]/30 rounded-xl pl-10 pr-4 py-2.5 text-sm sm:text-base text-[#1C1322] font-medium placeholder-gray-400 outline-none focus:border-[#D97D64]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#1C1322] font-bold block mb-1">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Bridal makeup trial inquiry, specific shade preferences..."
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-[#1C1322] placeholder-gray-400 outline-none focus:border-[#D97D64]"
                  />
                </div>

                {/* Summary Box */}
                <div className="p-3 sm:p-4 rounded-2xl bg-[#FFF4F1] border border-[#D97D64]/30 text-xs space-y-1.5">
                  <div className="flex justify-between font-bold text-[#1C1322]">
                    <span>{selectedService.name}</span>
                    <span className="text-[#D97D64] font-serif text-sm">₹{selectedService.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#6B5E72] font-medium">
                    <span>{selectedDate} at {selectedTime}</span>
                    <span>{selectedStylist ? selectedStylist.name : 'Any Senior Artist'}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-secondary-luxe px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>

                  <button
                    type="submit"
                    className="btn-primary-luxe px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm VIP Booking</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D97D64] font-extrabold block">
                Appointment Registered Successfully
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#1C1322] mt-1">
                We Await Your Regal Presence, {guestName}!
              </h3>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF4F1] border-2 border-[#D97D64]/30 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm shadow-sm">
              <div className="flex justify-between">
                <span className="text-[#6B5E72]">Reserved Ritual:</span>
                <span className="font-bold text-[#1C1322] truncate ml-2">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5E72]">Date & Slot:</span>
                <span className="font-bold text-[#D97D64]">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5E72]">Artist:</span>
                <span className="text-[#1C1322] font-semibold">{selectedStylist ? selectedStylist.name : 'Senior Master Couturier'}</span>
              </div>
              <div className="flex justify-between border-t border-[#D97D64]/20 pt-2">
                <span className="text-[#6B5E72]">Total Fee:</span>
                <span className="font-serif text-base font-bold text-[#D97D64]">
                  ₹{selectedService.price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <div className="space-y-3 pt-1">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send WhatsApp Confirmation</span>
              </a>

              <div>
                <button
                  onClick={onClose}
                  className="text-xs text-[#6B5E72] hover:text-[#1C1322] font-semibold underline pt-1 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
