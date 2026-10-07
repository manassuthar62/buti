'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Heart,
  Share2,
  Sparkles,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Award,
  Maximize2
} from 'lucide-react';
import { VIDEOS_DATA, VideoItem, PARLOUR_INFO } from '@/data/parlourData';

interface VideoReelsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function VideoReelsSection({ onOpenBooking }: VideoReelsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const categories = [
    { id: 'all', label: 'All 14 Reels' },
    { id: 'bridal', label: '👑 Bridal Couture' },
    { id: 'transformations', label: '✨ Transformations' },
    { id: 'jewelry', label: '💎 Jewelry & Draping' },
    { id: 'skin', label: '🌟 24K Glass Skin' },
    { id: 'hair', label: '💇‍♀️ Hair Balayage' },
    { id: 'makeup', label: '💄 Party Glam' },
    { id: 'studio', label: '🏆 Studio & Awards' },
  ];

  const filteredVideos = VIDEOS_DATA.filter((video) => {
    if (activeCategory === 'all') return true;
    return video.category === activeCategory;
  });

  const handleOpenModal = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const togglePlayModal = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMuteModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleToggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShareWhatsApp = (video: VideoItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const text = `Look at this breathtaking bridal makeover at Nivi Beauty Care by Arti Bhavsar: "${video.title}"! Check it out: ${window.location.origin}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePrevVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = VIDEOS_DATA.findIndex((v) => v.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + VIDEOS_DATA.length) % VIDEOS_DATA.length;
    setSelectedVideo(VIDEOS_DATA[prevIndex]);
    setIsPlaying(true);
  };

  const handleNextVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = VIDEOS_DATA.findIndex((v) => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % VIDEOS_DATA.length;
    setSelectedVideo(VIDEOS_DATA[nextIndex]);
    setIsPlaying(true);
  };

  return (
    <section id="reels" className="py-12 sm:py-20 relative bg-gradient-to-b from-[#FCF9F5] via-[#FFF3EF] to-[#FCF9F5] overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#FDE8E9] rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#F5E6BE] rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full badge-luxe text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-wider font-extrabold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#D97D64]" />
            Live Instagram Reels & Studio Artistry
          </div>
          
          <h2 className="font-serif text-2xl xs:text-3.5xl sm:text-4xl md:text-5xl font-bold text-[#1C1322] tracking-tight">
            Watch Real <span className="text-rose-gold-gradient">Bridal Transformations</span>
          </h2>
          
          <p className="text-xs sm:text-base text-[#6B5E72] font-medium leading-relaxed">
            Every bride is unique! Explore all 14 exclusive HD video reels showcasing authentic Rajputi & Gujarati bridal artistry, hair coutures, and glowing clinical facials by <strong className="text-[#D97D64]">Arti Bhavsar</strong>.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 xs:gap-2 sm:gap-2.5 pb-2 sm:pb-0 sm:justify-center mb-8 sm:mb-12 px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 xs:px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                activeCategory === cat.id
                  ? 'btn-primary-luxe shadow-md scale-105'
                  : 'bg-white text-[#5A4D62] border border-[#D97D64]/20 hover:border-[#D97D64] hover:text-[#D97D64]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Reels Grid (Ultra responsive: 2 columns on mobile, 3 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {filteredVideos.map((video, idx) => {
            const isLiked = likedMap[video.id];
            const isHovered = hoveredVideoId === video.id;

            return (
              <div
                key={video.id}
                onMouseEnter={() => setHoveredVideoId(video.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
                onClick={() => handleOpenModal(video)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden luxe-card bg-black cursor-pointer border-2 border-white hover:border-[#D97D64] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between aspect-[9/16] active:scale-98"
              >
                {/* Video / Poster Background */}
                <div className="absolute inset-0 w-full h-full bg-[#1A1222] overflow-hidden">
                  <video
                    src={video.videoSrc}
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlays for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />
                </div>

                {/* Top Card Badges */}
                <div className="relative z-10 p-2.5 xs:p-3 sm:p-4 flex items-start justify-between gap-1.5">
                  {/* Custom Distinct Tag Pill */}
                  <span
                    className="px-2 xs:px-2.5 py-0.5 rounded-full text-[8.5px] xs:text-[10px] font-extrabold tracking-wide uppercase shadow-md backdrop-blur-md border border-white/20 text-white"
                    style={{ backgroundColor: `${video.accentColor}E6` }}
                  >
                    {video.tag}
                  </span>

                  {/* Duration Badge */}
                  <span className="px-1.5 xs:px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[8.5px] xs:text-[9.5px] text-white font-bold shrink-0">
                    {video.duration}
                  </span>
                </div>

                {/* Center Play Icon Pulse on Hover */}
                <div className="relative z-10 self-center w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#D97D64] transition-all duration-300 shadow-xl">
                  <Play className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                </div>

                {/* Bottom Video Meta */}
                <div className="relative z-10 p-2.5 xs:p-3 sm:p-4 space-y-1 xs:space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[8.5px] xs:text-[10px] text-[#F5DE98] font-bold">
                    <Award className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#F5DE98] shrink-0" />
                    <span className="truncate">{video.artist}</span>
                  </div>

                  <h3 className="font-serif text-xs xs:text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
                    {video.title}
                  </h3>

                  {/* Views & Like stats row */}
                  <div className="pt-1 flex items-center justify-between border-t border-white/20 text-[9px] xs:text-[10px] text-gray-300 font-semibold">
                    <span className="flex items-center gap-1">
                      <Eye className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-gray-300" />
                      {video.views}
                    </span>

                    <button
                      onClick={(e) => handleToggleLike(video.id, e)}
                      className="flex items-center gap-1 hover:text-rose-400 transition-colors"
                      aria-label="Like Video"
                    >
                      <Heart
                        className={`w-3 h-3 xs:w-3.5 xs:h-3.5 transition-transform ${
                          isLiked ? 'fill-rose-500 text-rose-500 scale-125' : 'text-white'
                        }`}
                      />
                      <span>{isLiked ? 'Liked' : video.likes}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All & Custom Book Banner Strip */}
        <div className="mt-8 sm:mt-12 luxe-card p-4 xs:p-6 sm:p-8 rounded-3xl border-2 border-[#D97D64]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-gradient-to-r from-white via-[#FFF0EC] to-white shadow-xl">
          <div className="space-y-1">
            <h4 className="font-serif text-base xs:text-lg sm:text-2xl font-bold text-[#1C1322]">
              Want a Similar Celebrity Makeover for Your Special Day?
            </h4>
            <p className="text-xs sm:text-sm text-[#5A4D62] font-medium">
              Book a private trial or consultation with <strong>Arti Bhavsar</strong> at Nivi Beauty Care, Partapur.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Signature Bridal / Custom Video Makeover')}
            className="btn-primary-luxe w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment for This Look</span>
          </button>
        </div>

      </div>

      {/* Full Immersive Video Reel Modal (Instagram Reels / TikTok experience) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-0 sm:p-4 animate-fadeIn"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all cursor-pointer z-50 active:scale-95"
            aria-label="Close Reel"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Video Nav (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevVideo();
            }}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/35 text-white transition-all cursor-pointer z-50 hover:scale-110 active:scale-90"
            aria-label="Previous Video"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Video Nav (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextVideo();
            }}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/35 text-white transition-all cursor-pointer z-50 hover:scale-110 active:scale-90"
            aria-label="Next Video"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main Reel Player Container */}
          <div
            className="relative w-full max-w-sm sm:max-w-md h-full sm:h-[90vh] sm:rounded-3xl overflow-hidden bg-black flex flex-col justify-between shadow-2xl border-0 sm:border-2 border-[#D97D64]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The HTML5 Video Element */}
            <video
              ref={modalVideoRef}
              src={selectedVideo.videoSrc}
              poster={selectedVideo.poster}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              onClick={togglePlayModal}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />

            {/* Gradient Overlays for Video Controls */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

            {/* Top Modal Header Bar */}
            <div className="relative z-20 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#D97D64] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/1IMAGE.jpg" alt="Arti Bhavsar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Arti Bhavsar</h4>
                  <p className="text-[9px] text-[#F5DE98] font-semibold">🏆 Glam Bliss Award Winner</p>
                </div>
              </div>

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMuteModal}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-all cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F5DE98]" />}
              </button>
            </div>

            {/* Center Play / Pause Indicator */}
            {!isPlaying && (
              <div
                onClick={togglePlayModal}
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-black/30"
              >
                <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white border-2 border-white/50 animate-scaleUp">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Right Side Action Floating Rail */}
            <div className="absolute right-3.5 bottom-28 z-20 flex flex-col items-center gap-4 text-white">
              {/* Like Button */}
              <button
                onClick={() => handleToggleLike(selectedVideo.id)}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      likedMap[selectedVideo.id] ? 'fill-rose-500 text-rose-500' : 'text-white'
                    }`}
                  />
                </div>
                <span className="text-[10px] font-bold">
                  {likedMap[selectedVideo.id] ? 'Liked' : selectedVideo.likes}
                </span>
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={() => handleShareWhatsApp(selectedVideo)}
                className="flex flex-col items-center gap-1 group cursor-pointer"
                title="Share Reel on WhatsApp"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold">Share</span>
              </button>

              {/* Views Count */}
              <div className="flex flex-col items-center gap-0.5 text-gray-300">
                <Eye className="w-4 h-4" />
                <span className="text-[9px] font-bold">{selectedVideo.views}</span>
              </div>
            </div>

            {/* Bottom Details & Booking Action */}
            <div className="relative z-20 p-4 sm:p-5 space-y-2.5 text-white pr-16 pb-safe">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm"
                style={{ backgroundColor: `${selectedVideo.accentColor}E6` }}
              >
                {selectedVideo.tag} • {selectedVideo.categoryLabel}
              </span>

              <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-snug">
                {selectedVideo.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-gray-200 line-clamp-2 leading-relaxed">
                {selectedVideo.description}
              </p>

              {/* 1-Click Book Look Button */}
              <button
                onClick={() => {
                  handleCloseModal();
                  onOpenBooking(selectedVideo.title);
                }}
                className="btn-primary-luxe w-full py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Exact Look With Arti</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
