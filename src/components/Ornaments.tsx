"use client";

import React from "react";

/**
 * Bismillah Calligraphy Component
 */
export const BismillahHeader: React.FC<{ className?: string; light?: boolean }> = ({
  className = "",
  light = true,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div
        className={`font-arabic text-2xl sm:text-3xl md:text-4xl tracking-wide select-none leading-relaxed transition-all duration-300 ${
          light ? "text-wedding-gold-light drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]" : "text-wedding-maroon drop-shadow-sm"
        }`}
        dir="rtl"
        lang="ar"
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </div>
      <p
        className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase font-serif mt-1 ${
          light ? "text-wedding-gold/80" : "text-wedding-maroon/70"
        }`}
      >
        In the name of Allah, the Most Gracious, the Most Merciful
      </p>
    </div>
  );
};

/**
 * Hanging Lantern Component with warm glowing flickering candle flame
 */
export const HangingLantern: React.FC<{
  leftPercent?: number;
  cordLength?: number;
  delay?: number;
  size?: number;
  scale?: number;
}> = ({ leftPercent = 50, cordLength = 80, delay = 0, scale = 1 }) => {
  return (
    <div
      className="absolute top-0 pointer-events-none z-10 origin-top animate-sway"
      style={{
        left: `${leftPercent}%`,
        animationDelay: `${delay}s`,
        transform: `scale(${scale})`,
      }}
    >
      {/* Hanging Cord */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-wedding-gold/80 via-wedding-gold to-wedding-gold/60 mx-auto"
        style={{ height: `${cordLength}px` }}
      />

      {/* Hanging Ring */}
      <div className="w-3.5 h-3.5 border border-wedding-gold/80 rounded-full mx-auto -mt-1.5" />

      {/* Lantern Body */}
      <div className="relative -mt-0.5 flex flex-col items-center">
        {/* Top Dome */}
        <div className="w-8 h-3.5 bg-gradient-to-r from-amber-700 via-wedding-gold to-amber-700 rounded-t-full shadow-sm" />
        {/* Main Lantern Chamber */}
        <div className="w-7 h-9 border border-wedding-gold/70 rounded-b-md relative overflow-hidden bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-black/60 backdrop-blur-[1px] shadow-[0_0_15px_rgba(255,191,0,0.5)]">
          {/* Flame Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-4 bg-amber-300 rounded-full blur-[2px] animate-pulse" />
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          </div>
          {/* Glass Ribs */}
          <div className="absolute inset-0 flex justify-evenly">
            <div className="w-[1px] h-full bg-wedding-gold/40" />
            <div className="w-[1px] h-full bg-wedding-gold/40" />
          </div>
        </div>
        {/* Bottom Finial */}
        <div className="w-1.5 h-3 bg-wedding-gold/80 rounded-b-full shadow" />
        <div className="w-1 h-2 bg-amber-400 rounded-b-full mx-auto" />
      </div>

      {/* Ambient Light Cone */}
      <div className="absolute top-[85%] -left-6 w-20 h-28 bg-radial from-amber-400/20 via-amber-500/5 to-transparent rounded-full blur-md pointer-events-none" />
    </div>
  );
};

/**
 * Islamic Arch Ornament & Decorative Corner
 */
export const FloralCorner: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: number;
}> = ({ position, className = "", size = 64 }) => {
  const rotation =
    position === "top-left"
      ? "rotate-0"
      : position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : "rotate-270";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${rotation} ${className}`}
    >
      <path
        d="M5 5 H45 C45 25 25 45 5 45 V5 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.9" />
      <path
        d="M5 15 C20 15 35 30 35 45"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.6"
      />
      <path
        d="M10 5 C10 20 25 35 40 35"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.6"
      />
      <path
        d="M15 15 Q25 5 35 15 Q45 25 35 35 Q25 45 15 35 Q5 25 15 15 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
};

/**
 * Elegant Floral & Gold Divider
 */
export const FloralDivider: React.FC<{
  className?: string;
  light?: boolean;
}> = ({ className = "", light = false }) => {
  const colorClass = light ? "text-wedding-gold" : "text-wedding-maroon/60";

  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className={`h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent ${light ? "to-wedding-gold" : "to-wedding-gold/70"}`} />
      
      {/* Central Floral Emblem */}
      <div className={`flex items-center gap-1.5 ${colorClass}`}>
        <span className="text-[10px] opacity-70">✦</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="animate-pulse"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
        <span className="text-[10px] opacity-70">✦</span>
      </div>

      <div className={`h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent ${light ? "to-wedding-gold" : "to-wedding-gold/70"}`} />
    </div>
  );
};

/**
 * Royal Wax Seal Stamp with Monogram
 */
export const WaxSeal: React.FC<{
  monogram?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "maroon";
  className?: string;
}> = ({ monogram = "K & N", size = "md", variant = "gold", className = "" }) => {
  const dimensions =
    size === "sm" ? "w-12 h-12 text-xs" : size === "lg" ? "w-24 h-24 text-lg" : "w-16 h-16 text-sm";

  const isGold = variant === "gold";

  return (
    <div
      className={`relative rounded-full flex items-center justify-center font-display font-bold select-none ${
        isGold
          ? "shadow-[0_10px_25px_rgba(212,175,55,0.6),inset_0_2px_5px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(114,78,15,0.8)]"
          : "shadow-[0_8px_20px_rgba(74,14,23,0.5),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
      } ${dimensions} ${className}`}
      style={{
        background: isGold
          ? "radial-gradient(circle at 35% 35%, #FFF2B2 0%, #E5B842 35%, #B8860B 75%, #7C5209 100%)"
          : "radial-gradient(circle at 35% 35%, #8B1E2E 0%, #4A0E17 55%, #24050A 100%)",
        border: isGold ? "2.5px solid #FFF8D6" : "2px solid #D4AF37",
      }}
    >
      {/* Ornate Inner Rim Ring */}
      <div
        className={`absolute inset-1 rounded-full border border-dashed pointer-events-none ${
          isGold ? "border-[#5E3C04]/40" : "border-wedding-gold/50"
        }`}
      />

      {/* Monogram */}
      <div
        className={`tracking-wider ${
          isGold
            ? "text-[#3D0A13] drop-shadow-[0_1px_1px_rgba(255,248,214,0.8)] font-black"
            : "text-wedding-gold-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
        }`}
      >
        {monogram}
      </div>

      {/* Wax drip highlight */}
      <div className="absolute top-1 left-2 w-3.5 h-2 bg-white/40 rounded-full blur-[1px] transform -rotate-45 pointer-events-none" />
    </div>
  );
};

/**
 * Ambient Bokeh & Candle Glow Particles
 */
export const BokehBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Warm candlelight orbs */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-wedding-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3.5s" }} />

      {/* Sparkling particle dots */}
      <div className="absolute top-12 left-10 w-1.5 h-1.5 bg-wedding-gold rounded-full blur-[0.5px] opacity-60 animate-ping" style={{ animationDuration: "4s" }} />
      <div className="absolute top-1/3 right-12 w-2 h-2 bg-wedding-gold-light rounded-full blur-[0.5px] opacity-70 animate-ping" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      <div className="absolute top-2/3 left-8 w-1 h-1 bg-amber-300 rounded-full blur-[0.5px] opacity-60 animate-ping" style={{ animationDuration: "3s", animationDelay: "2s" }} />
      <div className="absolute bottom-24 right-1/3 w-1.5 h-1.5 bg-wedding-gold rounded-full blur-[0.5px] opacity-70 animate-ping" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
    </div>
  );
};
