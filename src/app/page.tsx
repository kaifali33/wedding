"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WEDDING_DATA, WEDDING_HERO_IMAGE } from "@/data/wedding";
import Countdown from "@/components/Countdown";
import {
  FloralCornerTopLeft,
  FloralCornerTopRight,
  FloralHeaderDecor,
  FloatingPetalDecor,
} from "@/components/FloralArt";
import { Calendar, MapPin, ChevronRight, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-full w-full bg-[#FAF7F2] text-[#4A0E17] flex flex-col justify-between overflow-hidden select-none relative">
      
      {/* Background Subtle Romantic Radial Blush & Floating Petals */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[450px] h-[350px] bg-radial from-[#FFEBF0]/70 via-[#FFF2F5]/40 to-transparent blur-2xl" />
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-radial from-[#FFF0F3]/60 via-[#FAF7F2]/30 to-transparent blur-2xl" />
        
        {/* Soft Scattered Floating Petals */}
        <FloatingPetalDecor top="36%" left="8%" size={14} rotation={35} opacity={0.4} color="#F48FB1" />
        <FloatingPetalDecor top="42%" left="88%" size={16} rotation={-45} opacity={0.45} color="#F06292" />
        <FloatingPetalDecor top="62%" left="4%" size={12} rotation={60} opacity={0.35} color="#FFB2C9" />
        <FloatingPetalDecor top="78%" left="92%" size={15} rotation={-25} opacity={0.4} color="#F48FB1" />
        <FloatingPetalDecor top="90%" left="15%" size={13} rotation={40} opacity={0.3} color="#E91E63" />
      </div>

      {/* Main Continuous Canvas Viewport (Scrollable if needed on smaller screens, fits within viewport on standard devices) */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-between p-3 sm:p-4 space-y-2.5 z-10">
        
        {/* ==================================================
            1. LARGE COUPLE HERO ARTWORK (Upper 35–40% of Screen)
            Main invitation artwork with lush floral decorations
            and a soft bottom fade dissolving into invitation background
            ================================================== */}
        <div className="relative w-full h-48 sm:h-56 shrink-0 overflow-hidden rounded-3xl shadow-sm border border-[#F3D5DB]/60">
          
          {/* Couple Photo (Same project image) */}
          <Image
            src={WEDDING_HERO_IMAGE}
            alt={`${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name} Wedding`}
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 100vw, 640px"
            className="object-cover object-[center_28%]"
          />

          {/* Soft Bottom Fade dissolving photo seamlessly into invitation canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/45 to-transparent pointer-events-none" />

          {/* Lush Floral Corner Decorations Framing the Artwork */}
          <FloralCornerTopLeft className="absolute -top-1 -left-1 z-10" size={92} />
          <FloralCornerTopRight className="absolute -top-1 -right-1 z-10" size={92} />

          {/* Monogram Badge at Bottom of Artwork */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xs border border-[#D4AF37] px-4 py-0.5 rounded-full shadow-xs flex items-center justify-center gap-1.5 z-20">
            <span className="font-serif font-extrabold text-xs tracking-widest text-[#4A0E17]">
              K &amp; N
            </span>
          </div>
        </div>

        {/* ==================================================
            2. WEDDING INVITATION TEXT SECTION
            Continuous digital card layout directly below hero fade
            ================================================== */}
        <div className="w-full flex flex-col items-center text-center shrink-0 pt-0.5 pb-1">
          
          {/* "Together" in romantic cursive calligraphy */}
          <span className="font-script text-3xl sm:text-4xl text-[#B8860B] leading-none drop-shadow-xs">
            Together
          </span>

          {/* Heart Flourish Divider */}
          <div className="flex items-center justify-center gap-2 my-1 text-rose-500">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* "WE ARE GETTING MARRIED" */}
          <p className="font-serif uppercase tracking-[0.25em] text-[10px] sm:text-[11px] text-[#8B1E2E] font-bold leading-none">
            We Are Getting Married
          </p>

          {/* "Kausar ❤️ Najiya" */}
          <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide text-[#4A0E17] flex items-center justify-center gap-2 mt-1 leading-tight">
            <span>{WEDDING_DATA.groom.name}</span>
            <span className="font-script text-xl text-rose-600 leading-none">❤️</span>
            <span>{WEDDING_DATA.bride.name}</span>
          </h1>

          {/* GROOM: KAUSAR • BRIDE: NAJIYA */}
          <p className="font-serif text-[10.5px] uppercase tracking-widest text-[#7A4048] font-bold mt-0.5">
            Groom: {WEDDING_DATA.groom.name} &nbsp;•&nbsp; Bride: {WEDDING_DATA.bride.name}
          </p>

          {/* Date & Venue */}
          <div className="flex items-center justify-center gap-2.5 text-xs font-serif mt-1.5 text-[#8B1E2E]">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
              <span className="font-bold text-[11px]">31 October – 3 November 2026</span>
            </div>
            <span className="text-[#D4AF37]/60">•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
              <span className="font-bold text-[11px]">Shekhpura</span>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. REAL LIVE COUNTDOWN (Dynamic, 4 Boxes, Zero-State)
            ================================================== */}
        <div className="w-full shrink-0">
          <Countdown />
        </div>

        {/* ==================================================
            4. OUR WEDDING EVENTS ("♡ Our Wedding Events ♡")
            ================================================== */}
        <div className="w-full shrink-0 flex flex-col">
          
          {/* Section Heading in Script with Floral Accents */}
          <div className="flex flex-col items-center mb-1 px-1">
            <div className="flex items-center justify-between w-full">
              <h2 className="font-script text-2xl sm:text-3xl font-bold text-[#4A0E17]">
                ♡ Our Wedding Events ♡
              </h2>
              <Link
                href="/events"
                className="text-[10px] font-serif uppercase tracking-wider text-[#B8860B] font-bold hover:text-[#4A0E17] transition-colors"
              >
                View All (5) →
              </Link>
            </div>
            {/* Subtle Floral Sprig Divider */}
            <FloralHeaderDecor className="mt-0.5" />
          </div>

          {/* Five Compact Event Cards */}
          <div className="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar pr-0.5">
            {WEDDING_DATA.events.map((evt) => (
              <Link
                key={evt.id}
                href={`/events/${evt.slug}`}
                className="flex items-center justify-between p-1.5 sm:p-2 rounded-2xl bg-gradient-to-r from-[#FFFDFD] via-[#FFF9FA] to-[#FFF4F6] border border-[#F3D9DE] hover:border-[#D4AF37]/70 shadow-xs transition-all active:scale-[0.99] group"
              >
                {/* Left: Thumbnail & Name/Date */}
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/50 shadow-xs">
                    <Image
                      src={evt.image}
                      alt={evt.name}
                      fill
                      unoptimized
                      sizes="40px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="text-left overflow-hidden">
                    <h3 className="font-serif text-xs font-bold text-[#4A0E17] truncate group-hover:text-[#8B1E2E]">
                      {evt.name} {evt.id === "madwa" ? "🌸" : ""}
                    </h3>
                    <p className="font-serif text-[10px] text-[#8B1E2E]/85 font-medium">
                      {evt.date} {WEDDING_DATA.year}
                    </p>
                  </div>
                </div>

                {/* Right: Sleek Circular Arrow Button */}
                <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-200 text-[#8B1E2E] group-hover:bg-[#4A0E17] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
