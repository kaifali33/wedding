"use client";

import React from "react";
import { FloralCorner } from "./Ornaments";
import { Sparkles } from "lucide-react";

export const DuaCardScene: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto my-3 px-2 py-4 select-none">
      {/* =========================================================================
          BACKGROUND AMBIENCE & TABLETOP SURFACE
          Warm cream marble / table surface with soft radial glow
          ========================================================================= */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-[#F9F5EE] via-[#F4EDE2] to-[#ECE1D0] border border-wedding-gold/25 shadow-[inset_0_2px_12px_rgba(200,160,100,0.15),0_12px_30px_-10px_rgba(80,40,20,0.12)] overflow-hidden">
        {/* Subtle marble vein highlights */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,35,50,0.1) 0%, transparent 50%)",
          }}
        />

        {/* Soft tabletop shadow horizon near bottom */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#DECBB5]/40 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          WOODEN EASEL STAND (Tripod Wood Frame behind Card)
          ========================================================================= */}
      <div className="absolute inset-x-0 top-1 bottom-4 pointer-events-none -z-5 flex items-center justify-center">
        <svg
          viewBox="0 0 360 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[480px] drop-shadow-md"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Rich Timber Wood Grain Gradients */}
            <linearGradient id="woodVertical" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5A2B" />
              <stop offset="25%" stopColor="#B38048" />
              <stop offset="60%" stopColor="#9C6B37" />
              <stop offset="85%" stopColor="#C4935B" />
              <stop offset="100%" stopColor="#75471D" />
            </linearGradient>

            <linearGradient id="woodHorizontal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C4935B" />
              <stop offset="30%" stopColor="#9C6B37" />
              <stop offset="70%" stopColor="#8A5A2B" />
              <stop offset="100%" stopColor="#673E16" />
            </linearGradient>

            <linearGradient id="brassJoint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8D6E1A" />
            </linearGradient>

            <filter id="easelShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#3A1D0E" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Rear Center Leg (extends down behind card) */}
          <path
            d="M 174 20 L 186 20 L 184 460 L 176 460 Z"
            fill="url(#woodVertical)"
            opacity="0.85"
          />

          {/* Left Angled Leg */}
          <path
            d="M 170 30 L 180 30 L 72 470 L 58 470 Z"
            fill="url(#woodVertical)"
            filter="url(#easelShadow)"
          />

          {/* Right Angled Leg */}
          <path
            d="M 180 30 L 190 30 L 302 470 L 288 470 Z"
            fill="url(#woodVertical)"
            filter="url(#easelShadow)"
          />

          {/* Top Apex Mast & Brass Knob */}
          <rect x="172" y="6" width="16" height="36" rx="2" fill="url(#woodVertical)" />
          <circle cx="180" cy="18" r="6" fill="url(#brassJoint)" stroke="#5A3A10" strokeWidth="1" />
          <circle cx="180" cy="18" r="2.5" fill="#FFF8E1" />

          {/* Horizontal Wooden Ledge / Crossbar Supporting the Card */}
          <g filter="url(#easelShadow)">
            <rect x="42" y="380" width="276" height="14" rx="2" fill="url(#woodHorizontal)" />
            {/* Ledge front lip */}
            <rect x="44" y="374" width="272" height="7" rx="1.5" fill="url(#woodHorizontal)" />
            {/* Brass fixing bolts on shelf */}
            <circle cx="92" cy="387" r="2.5" fill="url(#brassJoint)" />
            <circle cx="268" cy="387" r="2.5" fill="url(#brassJoint)" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LEFT DECORATIVE FLOWERS (Soft white/cream garden roses & eucalyptus)
          ========================================================================= */}
      <div className="absolute -left-2.5 sm:-left-4 bottom-5 sm:bottom-7 pointer-events-none z-20 w-24 sm:w-28 drop-shadow-md">
        <svg viewBox="0 0 110 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Eucalyptus Sprig */}
          <path d="M 50 110 C 45 70 20 50 15 25" stroke="#7B9D76" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 35 75 C 22 72 18 60 25 54 C 33 50 40 60 35 75 Z" fill="#88A987" opacity="0.95" />
          <path d="M 42 55 C 30 50 28 38 36 34 C 44 32 50 42 42 55 Z" fill="#6B8E67" opacity="0.95" />
          <path d="M 22 36 C 10 32 12 20 20 18 C 28 18 30 28 22 36 Z" fill="#9FBFA0" opacity="0.9" />

          {/* Golden Baby's Breath / Stems */}
          <path d="M 45 95 C 30 80 15 85 10 75" stroke="#C99A3A" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10" cy="74" r="2.5" fill="#F5E298" />
          <circle cx="18" cy="79" r="2" fill="#D4AF37" />
          <circle cx="28" cy="85" r="2" fill="#F5E298" />

          {/* Main Cream / Soft White Garden Rose */}
          <g transform="translate(62, 78)">
            {/* Soft pinkish outer shadow petals */}
            <circle cx="0" cy="0" r="26" fill="#F5ECE2" stroke="#E6D7C3" strokeWidth="0.8" />
            <path
              d="M -22 -6 C -18 -26 14 -26 22 -6 C 26 12 12 24 0 24 C -16 24 -26 12 -22 -6 Z"
              fill="#FFFDF9"
              opacity="0.95"
            />
            {/* Mid Petals */}
            <path
              d="M -14 -4 C -10 -18 10 -18 14 -4 C 18 8 10 16 0 16 C -10 16 -18 8 -14 -4 Z"
              fill="#FAF2E8"
            />
            {/* Soft blush pink inner swirl */}
            <path
              d="M -8 -2 C -6 -12 6 -12 8 -2 C 10 6 6 10 0 10 C -6 10 -10 6 -8 -2 Z"
              fill="#F9D7DC"
            />
            <circle cx="0" cy="0" r="4.5" fill="#EFA6B4" />
            <circle cx="0.5" cy="-0.5" r="2" fill="#D47788" />
          </g>

          {/* Secondary Ivory Blossom */}
          <g transform="translate(36, 96)">
            <circle cx="0" cy="0" r="14" fill="#F7EFE4" stroke="#E6D7C3" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="9" fill="#FFFDF9" />
            <circle cx="0" cy="0" r="3.5" fill="#F5D0A9" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          RIGHT WARM CANDLE (Glass Votive with warm golden flame & ambient glow)
          ========================================================================= */}
      <div className="absolute -right-2 sm:-right-3.5 bottom-6 sm:bottom-8 pointer-events-none z-20 w-16 sm:w-20 flex flex-col items-center">
        {/* Ambient Candle Radial Glow on table and card */}
        <div className="absolute -top-12 -left-10 w-36 h-36 rounded-full bg-radial from-amber-400/35 via-amber-300/15 to-transparent blur-xl pointer-events-none" />

        <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
          <defs>
            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="30%" stopColor="#FFF7E6" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FFECB3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="100%" stopColor="#F5E8D3" />
            </linearGradient>
          </defs>

          {/* Candle Flame Glow Halo */}
          <circle cx="30" cy="22" r="14" fill="#F59E0B" opacity="0.25" filter="blur(3px)" className="animate-pulse" />

          {/* Outer Tear-Drop Flame */}
          <path
            d="M 30 10 C 26 18 22 24 24 28 C 26 32 34 32 36 28 C 38 24 34 18 30 10 Z"
            fill="#FBBF24"
            className="animate-pulse"
          />
          {/* Inner Golden Core */}
          <path
            d="M 30 16 C 28 21 26 25 27 27 C 28 29 32 29 33 27 C 34 25 32 21 30 16 Z"
            fill="#FEF08A"
          />
          {/* Flame Wick */}
          <path d="M 30 27 L 30 33" stroke="#451A03" strokeWidth="1.4" strokeLinecap="round" />

          {/* Glass Votive Cup */}
          <rect x="12" y="32" width="36" height="48" rx="5" fill="url(#glassGradient)" stroke="#E5C378" strokeWidth="1.2" />

          {/* Creamy Wax level inside cup */}
          <rect x="14" y="42" width="32" height="36" rx="3" fill="url(#waxGradient)" />

          {/* Glass Base highlight */}
          <rect x="15" y="76" width="30" height="3" rx="1.5" fill="#D4AF37" opacity="0.7" />
          <path d="M 16 36 L 16 75" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
        </svg>
      </div>

      {/* =========================================================================
          THE INVITATION CARD (Cream Paper on Easel)
          ========================================================================= */}
      <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px] z-10 transition-transform duration-300">
        {/* Realistic Card Drop Shadow onto the easel and table */}
        <div className="absolute inset-0 rounded-2xl bg-[#3C1E0A]/18 blur-md translate-y-3 scale-[0.98] pointer-events-none" />

        {/* The Card Container */}
        <div
          className="relative rounded-2xl bg-[#FFFDF9] border border-[#E6D7C3] p-4 sm:p-5 shadow-[0_16px_36px_-10px_rgba(74,14,23,0.18),0_4px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(201,154,58,0.25)] flex flex-col items-center text-center overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(#EDE3D4 0.6px, transparent 0.6px), radial-gradient(#F7EFE4 0.6px, #FFFDF9 0.6px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        >
          {/* Ornate Gold Inset Border Line */}
          <div className="absolute inset-2 sm:inset-2.5 rounded-xl border border-wedding-gold/50 pointer-events-none" />
          <div className="absolute inset-[11px] sm:inset-[13px] rounded-lg border border-wedding-gold/25 pointer-events-none" />

          {/* Elegant Floral Corner Accents */}
          <FloralCorner position="top-left" size={26} className="text-wedding-gold absolute top-2 left-2 opacity-75" />
          <FloralCorner position="top-right" size={26} className="text-wedding-gold absolute top-2 right-2 opacity-75" />
          <FloralCorner position="bottom-left" size={26} className="text-wedding-gold absolute bottom-2 left-2 opacity-75" />
          <FloralCorner position="bottom-right" size={26} className="text-wedding-gold absolute bottom-2 right-2 opacity-75" />

          {/* Subtle Top Warm Amber Glow on Card */}
          <div className="absolute -top-10 inset-x-0 h-24 bg-gradient-to-b from-[#F3D9A0]/20 to-transparent pointer-events-none" />

          {/* ===================================================================
              CARD CONTENT - STRICTLY AS SPECIFIED
              =================================================================== */}
          <div className="relative z-10 w-full px-1 py-1">
            {/* 1. BISMILLAH CALLIGRAPHY */}
            <div
              className="font-arabic text-xl sm:text-2xl text-[#6B1730] tracking-wide select-none leading-relaxed drop-shadow-xs mb-1.5"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            {/* Small Gold Divider Star */}
            <div className="flex items-center justify-center gap-1.5 my-1">
              <span className="w-8 h-[0.8px] bg-gradient-to-r from-transparent to-wedding-gold" />
              <Sparkles className="w-3 h-3 text-wedding-gold" />
              <span className="w-8 h-[0.8px] bg-gradient-to-l from-transparent to-wedding-gold" />
            </div>

            {/* 2. THE WEDDING OF */}
            <p className="font-serif text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8A5A44] font-semibold mt-1 mb-1">
              THE WEDDING OF
            </p>

            {/* 3. KAUSAR & NAJIYA */}
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#4A0D20] leading-tight mb-1.5 drop-shadow-xs">
              KAUSAR &amp; NAJIYA
            </h1>

            {/* 4. ALHAMDULILLAH FOR THIS BEAUTIFUL BEGINNING */}
            <p className="font-serif text-[10.5px] sm:text-xs tracking-[0.18em] uppercase text-[#8A5A44] font-medium leading-relaxed max-w-xs mx-auto mb-1">
              ALHAMDULILLAH FOR THIS BEAUTIFUL BEGINNING
            </p>

            {/* 5. 31 OCTOBER — 3 NOVEMBER 2026 */}
            <div className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-[#6B1730]/6 border border-wedding-gold/35 my-1.5">
              <span className="font-serif text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#6B1730]">
                31 OCTOBER — 3 NOVEMBER 2026
              </span>
            </div>

            {/* Elegant Ornamental Separation Line */}
            <div className="flex items-center justify-center gap-2 my-2.5 max-w-[200px] mx-auto">
              <span className="flex-1 h-[0.7px] bg-gradient-to-r from-transparent via-wedding-gold/70 to-wedding-gold" />
              <span className="w-1.5 h-1.5 rotate-45 bg-wedding-gold" />
              <span className="flex-1 h-[0.7px] bg-gradient-to-l from-transparent via-wedding-gold/70 to-wedding-gold" />
            </div>

            {/* 6. ISLAMIC DUA (ARABIC) */}
            <div
              className="font-arabic text-lg sm:text-xl md:text-[22px] text-[#4A0D20] leading-loose select-none my-1.5 px-2 font-medium"
              dir="rtl"
              lang="ar"
            >
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </div>

            {/* 7. ENGLISH TRANSLATION */}
            <div className="font-serif text-[10.5px] sm:text-[11.5px] tracking-[0.14em] uppercase text-[#6B1730] font-semibold leading-relaxed max-w-[290px] mx-auto my-2 space-y-0.5">
              <p>MAY ALLAH BLESS YOU BOTH,</p>
              <p>SHOWER HIS BLESSINGS UPON YOU,</p>
              <p>AND UNITE YOU BOTH IN GOODNESS.</p>
            </div>

            {/* Delicate Bottom Separator */}
            <div className="flex items-center justify-center gap-1.5 my-2">
              <span className="w-6 h-[0.6px] bg-wedding-gold/60" />
              <span className="text-[9px] text-wedding-gold">✦</span>
              <span className="w-6 h-[0.6px] bg-wedding-gold/60" />
            </div>

            {/* 8. THANK YOU FOR BEING PART OF OUR SPECIAL DAY */}
            <p className="font-serif text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase text-[#8A5A44] font-medium leading-relaxed">
              THANK YOU FOR BEING PART OF OUR SPECIAL DAY
            </p>

            {/* 9. DUAAS ARE APPRECIATED */}
            <p className="font-serif text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase text-[#8A5A44] font-semibold mt-0.5">
              DUAAS ARE APPRECIATED.
            </p>

            {/* 10. KEEP US IN YOUR PRAYERS 🤍 */}
            <p className="font-serif text-[10px] sm:text-[11px] tracking-[0.14em] text-[#6B1730] font-semibold mt-1 flex items-center justify-center gap-1">
              <span>KEEP US IN YOUR PRAYERS</span>
              <span>🤍</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCardScene;
