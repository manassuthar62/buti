'use client';

import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, Crown } from 'lucide-react';
import { QUIZ_QUESTIONS, SERVICES_DATA } from '@/data/parlourData';

interface BeautyQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export default function BeautyQuizModal({ isOpen, onClose, onBookService }: BeautyQuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (questionId: string, value: string) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  const getRecommendation = () => {
    const goal = answers['goal'] || 'skin';
    if (goal === 'bridal') {
      return SERVICES_DATA.find((s) => s.id === 'royal-bridal-hd') || SERVICES_DATA[1];
    } else if (goal === 'hair') {
      return SERVICES_DATA.find((s) => s.id === 'botox-keratin-hair') || SERVICES_DATA[2];
    } else if (goal === 'spa') {
      return SERVICES_DATA.find((s) => s.id === 'spa-aroma-massage') || SERVICES_DATA[7];
    }
    return SERVICES_DATA.find((s) => s.id === 'hydra-facial-luxe') || SERVICES_DATA[0];
  };

  const recommendedService = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 border-t-2 sm:border-2 border-[#D97D64]/30 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition-colors cursor-pointer z-10"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div>
            {/* Header / Progress */}
            <div className="space-y-2 mb-6 sm:mb-8 pr-8">
              <div className="flex items-center justify-between text-xs text-[#D97D64] font-bold">
                <span className="flex items-center gap-1.5 font-extrabold text-[11px] sm:text-xs">
                  <Sparkles className="w-3.5 h-3.5" /> Virtual Diagnostic
                </span>
                <span className="text-[11px] sm:text-xs">Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D97D64] to-[#C59B43] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1C1322] leading-snug">
                {QUIZ_QUESTIONS[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5 sm:space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, option.value)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-[#FFF4F1] hover:bg-[#FFF0EC] border-2 border-[#D97D64]/20 hover:border-[#D97D64] transition-all flex items-center justify-between group cursor-pointer shadow-sm active:scale-98"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#D97D64]/30 flex items-center justify-center text-[#D97D64] group-hover:scale-110 transition-transform shadow-sm shrink-0">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-base text-[#1C1322] group-hover:text-[#D97D64] font-bold">
                        {option.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D97D64] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Results Step */
          <div className="text-center space-y-4 sm:space-y-6 py-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#D97D64] to-[#C59B43] p-0.5 mx-auto shadow-lg">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-[#D97D64]" />
              </div>
            </div>

            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D97D64] font-extrabold block">
                Diagnostic Complete
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1322] mt-0.5">
                Your Bespoke Recommended Ritual
              </h3>
            </div>

            {/* Recommended Service Card */}
            <div className="text-left p-4 sm:p-5 rounded-2xl bg-[#FFF4F1] border-2 border-[#D97D64]/30 space-y-2.5 sm:space-y-3 shadow-sm">
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 border-[#D97D64]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={recommendedService.image}
                    alt={recommendedService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-[#B85F48] uppercase tracking-wider font-extrabold">
                    {recommendedService.categoryLabel}
                  </span>
                  <h4 className="font-serif text-sm sm:text-lg font-bold text-[#1C1322] leading-tight">
                    {recommendedService.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#D97D64]">
                      ₹{recommendedService.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#6B5E72] font-semibold">({recommendedService.duration})</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#5A4D62] font-medium border-t border-[#D97D64]/20 pt-2 leading-relaxed">
                {recommendedService.shortDesc}
              </p>
            </div>

            {/* Quiz Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookService(recommendedService.id);
                }}
                className="btn-primary-luxe w-full py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <span>Book This Recommended Ritual</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full border border-gray-300 hover:border-gray-500 text-xs text-[#6B5E72] font-bold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
