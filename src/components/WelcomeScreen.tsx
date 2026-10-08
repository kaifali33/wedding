"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HangingLantern, FloralCorner } from "./Ornaments";
import { FloralCornerTopLeft, FloralCornerTopRight } from "./FloralArt";
import { useMusicPlayer } from "./MusicPlayer";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

interface WelcomeScreenProps {
  onOpenInvitation: () => void;
}

// Floating Petal item
interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotateStart: number;
  rotateEnd: number;
  swayDistance: number;
  color: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpenInvitation }) => {
  const [animationStep, setAnimationStep] = useState<number>(0);
  // 0: Idle sealed envelope
  // 1: Button glow & seal sparkle
  // 2: Seal crack & golden burst
  // 3: Envelope flap opening 3D
  // 4: Golden light eruption & card rising
  // 5: Card scaling towards viewer
  // 6: Elegant dissolve into Home
  const { playMusic } = useMusicPlayer();

  // Floating rose and gold petals
  const petals: Petal[] = useMemo(() => {
    const petalColors = [
      "rgba(195, 34, 60, 0.45)",  // Crimson
      "rgba(230, 80, 100, 0.35)", // Rose
      "rgba(255, 175, 190, 0.3)", // Blush pink
      "rgba(212, 175, 55, 0.4)",  // Shimmering gold leaf
    ];
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 92 + 4,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 5,
      rotateStart: Math.random() * 360,
      rotateEnd: Math.random() * 720 + 360,
      swayDistance: (Math.random() - 0.5) * 60,
      color: petalColors[i % petalColors.length],
    }));
  }, []);

  const handleOpenClick = () => {
    if (animationStep > 0) return;

    // Start background music seamlessly
    try {
      playMusic();
    } catch {
      // Audio autoplay policy fallback
    }

    // Step 1: Button softly glows & seal starts sparkling
    setAnimationStep(1);

    // Step 2: Wax seal breaks / sparkles burst
    setTimeout(() => {
      setAnimationStep(2);
      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#D4AF37", "#F5E298", "#8B1E2E", "#FFDF73", "#FFFFFF"],
          disableForReducedMotion: true,
        });
      } catch {
        // Fallback
      }
    }, 450);

    // Step 3: Envelope flap opens with 3D realistic effect
    setTimeout(() => {
      setAnimationStep(3);
    }, 900);

    // Step 4: Golden light erupts, card begins rising out of envelope
    setTimeout(() => {
      setAnimationStep(4);
    }, 1450);

    // Step 5: Card scales towards viewer
    setTimeout(() => {
      setAnimationStep(5);
    }, 2050);

    // Step 6: Screen dissolves smoothly
    setTimeout(() => {
      setAnimationStep(6);
    }, 2550);

    // Step 7: Transition to Home
    setTimeout(() => {
      onOpenInvitation();
    }, 2900);
  };

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden select-none bg-gradient-to-b from-[#24030A] via-[#3B0713] to-[#180206] text-[#FAF6F0] flex flex-col justify-between items-center z-50">
      
      {/* ==================================================
          1. BACKGROUND ATMOSPHERE: CANDLELIGHT, BOKEH, VIGNETTE
          ================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Central Warm Candlelight Halo behind the Envelope */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-radial from-[#F59E0B]/22 via-[#BE185D]/12 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />

        {/* Ambient Golden Glows */}
        <div className="absolute top-6 left-1/4 w-72 h-72 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-rose-500/12 blur-3xl pointer-events-none" />
        
        {/* Soft Vignette around screen edges */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#1A0207]/40 to-[#0F0104]/90 pointer-events-none" />
      </div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        {[
          { top: "14%", left: "22%", size: 4, delay: 0 },
          { top: "26%", left: "74%", size: 5, delay: 1.2 },
          { top: "42%", left: "10%", size: 3, delay: 2.4 },
          { top: "54%", left: "86%", size: 4, delay: 0.8 },
          { top: "68%", left: "24%", size: 5, delay: 1.8 },
          { top: "78%", left: "76%", size: 3, delay: 2.9 },
          { top: "32%", left: "90%", size: 4, delay: 0.5 },
          { top: "62%", left: "12%", size: 4, delay: 1.5 },
        ].map((pt, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-[#F5E298] shadow-[0_0_8px_#D4AF37] animate-ping opacity-60"
            style={{
              top: pt.top,
              left: pt.left,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              animationDuration: `${3.5 + (idx % 3)}s`,
              animationDelay: `${pt.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Rose Petals Layer */}
      <div className="absolute inset-0 pointer-events-none z-2 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{
              y: -40,
              x: petal.left + "%",
              rotate: petal.rotateStart,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: `calc(${petal.left}% + ${petal.swayDistance}px)`,
              rotate: petal.rotateEnd,
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: petal.size,
              height: petal.size * 1.35,
              borderRadius: "50% 0 50% 50%",
              backgroundColor: petal.color,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>

      {/* Hanging Golden Brass Filigree Lanterns at Screen Flanks (Clear Center for Bismillah) */}
      <HangingLantern leftPercent={4} cordLength={52} delay={0.2} scale={0.78} />
      <HangingLantern leftPercent={13} cordLength={34} delay={1.1} scale={0.65} />
      <HangingLantern leftPercent={87} cordLength={34} delay={0.7} scale={0.65} />
      <HangingLantern leftPercent={96} cordLength={52} delay={1.4} scale={0.78} />

      {/* Four Gold Corner Motifs */}
      <FloralCorner position="top-left" className="text-[#D4AF37] absolute top-2.5 left-2.5 opacity-55 pointer-events-none z-10" size={48} />
      <FloralCorner position="top-right" className="text-[#D4AF37] absolute top-2.5 right-2.5 opacity-55 pointer-events-none z-10" size={48} />
      <FloralCorner position="bottom-left" className="text-[#D4AF37] absolute bottom-2.5 left-2.5 opacity-40 pointer-events-none z-10" size={48} />
      <FloralCorner position="bottom-right" className="text-[#D4AF37] absolute bottom-2.5 right-2.5 opacity-40 pointer-events-none z-10" size={48} />

      {/* ==================================================
          2. TOP HEADER HIERARCHY
          - Bismillah Calligraphy
          - WEDDING INVITATION
          - Together with their families
          ================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm pt-4 sm:pt-6 flex flex-col items-center text-center z-10 px-4 shrink-0"
      >
        {/* Sacred Bismillah Calligraphy */}
        <div
          className="font-arabic text-2xl sm:text-3xl text-[#F3D9A0] tracking-wide select-none leading-relaxed drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>

        {/* Gold Accent Divider */}
        <div className="flex items-center gap-2 mt-1 mb-0.5">
          <span className="h-[1px] w-7 sm:w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <h2 className="font-serif text-[#F5E298] tracking-[0.26em] text-[11px] sm:text-xs uppercase font-semibold drop-shadow-sm">
            WEDDING INVITATION
          </h2>
          <span className="h-[1px] w-7 sm:w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Together with their families */}
        <p className="font-serif italic text-[#FFFDF9]/85 text-xs sm:text-[13px] tracking-wide">
          Together with their families
        </p>
      </motion.div>

      {/* ==================================================
          3. CENTERPIECE: REALISTIC LUXURY WEDDING ENVELOPE
          ================================================== */}
      <div className="relative w-full max-w-sm my-auto flex flex-col items-center justify-center z-20 px-3">
        
        <motion.div
          animate={
            animationStep === 0
              ? { scale: [1, 1.015, 1], y: [0, -3, 0] }
              : animationStep >= 4
              ? { scale: 1.03, y: 10 }
              : { scale: 1.02 }
          }
          transition={{
            duration: animationStep === 0 ? 4.5 : 0.5,
            repeat: animationStep === 0 ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="relative w-full aspect-[4/3] max-w-[310px] sm:max-w-[340px]"
        >
          {/* Envelope Golden Aura / Glow */}
          <div
            className={`absolute -inset-4 rounded-3xl transition-all duration-700 blur-2xl ${
              animationStep >= 2
                ? "bg-amber-400/40 shadow-[0_0_80px_rgba(245,158,11,0.6)]"
                : "bg-amber-400/18"
            }`}
          />

          {/* 1. Envelope Back Pocket & Burgundy Interior Lining (Z-0) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F2E9D8] border-2 border-[#D4AF37] shadow-[0_18px_40px_rgba(0,0,0,0.65),0_2px_15px_rgba(212,175,55,0.4)] overflow-hidden z-0">
            {/* Deep Royal Burgundy Interior Pocket Lining */}
            <div className="absolute inset-1.5 rounded-xl bg-gradient-to-b from-[#4A0D1B] via-[#350711] to-[#200308] shadow-inner pointer-events-none">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </div>

          {/* 2. The Inner Wedding Invitation Card (Not clipped, can rise up smoothly!) */}
          <motion.div
            initial={false}
            animate={
              animationStep >= 5
                ? { y: -130, scale: 1.15, opacity: 1, zIndex: 45 }
                : animationStep >= 4
                ? { y: -75, scale: 1.05, opacity: 1, zIndex: 25 }
                : { y: 0, scale: 0.94, opacity: 0.95, zIndex: 10 }
            }
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3.5 inset-y-2 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5EDE0] text-[#4A0D1B] shadow-2xl p-3 flex flex-col items-center justify-between border-2 border-[#D4AF37] overflow-hidden"
          >
            {/* Card Corner Motifs */}
            <FloralCorner position="top-left" className="text-[#D4AF37] absolute top-1 left-1 opacity-75" size={20} />
            <FloralCorner position="top-right" className="text-[#D4AF37] absolute top-1 right-1 opacity-75" size={20} />

            {/* Card Header */}
            <div className="text-center pt-0.5">
              <span className="font-arabic text-xs text-[#B38728] block font-bold leading-none mb-0.5">
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </span>
              <p className="font-serif uppercase tracking-[0.2em] text-[8px] text-[#C99A3A] font-bold">
                WE ARE GETTING MARRIED
              </p>
            </div>

            {/* Groom & Bride */}
            <div className="text-center my-auto py-0.5">
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#4A0D1B] flex items-center justify-center gap-1.5">
                <span>Kausar</span>
                <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 inline-block animate-pulse" />
                <span>Najiya</span>
              </h3>
            </div>

            {/* Date & Venue */}
            <div className="text-center pb-0.5 border-t border-[#D4AF37]/35 pt-1 w-full">
              <p className="font-serif text-[10px] text-[#4A0D1B] font-semibold tracking-wide">
                31 October – 3 November 2026
              </p>
              <p className="text-[9px] font-serif text-[#8B1E2E] italic mt-0.5">
                Shekhpura
              </p>
            </div>

            {/* Golden shimmer light sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent transform -translate-x-full animate-shimmer pointer-events-none" />
          </motion.div>

          {/* 3. Envelope Front Fold Pocket (Z-20, folds over card at rest) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
            {/* Left Cream Fold */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#EFE6D7] to-[#FFFDF9] border-t border-[#D4AF37]/60 shadow-sm"
              style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}
            />
            {/* Right Cream Fold */}
            <div
              className="absolute inset-0 bg-gradient-to-tl from-[#EFE6D7] to-[#FFFDF9] border-t border-[#D4AF37]/60 shadow-sm"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
            />
            {/* Bottom Cream Fold with gold foil edge */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#E8DDD0] via-[#FAF6EE] to-[#FFFDF9] border-t-2 border-[#D4AF37] shadow-[0_-5px_15px_rgba(0,0,0,0.15)]"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 50%)" }}
            />

            {/* Envelope Corner Floral Art */}
            <div className="absolute top-1 left-1 opacity-80 scale-75 origin-top-left pointer-events-none">
              <FloralCornerTopLeft size={58} />
            </div>
            <div className="absolute top-1 right-1 opacity-80 scale-75 origin-top-right pointer-events-none">
              <FloralCornerTopRight size={58} />
            </div>
          </div>

          {/* 4. Radiant Golden Light Burst from inside envelope when flap opens */}
          <AnimatePresence>
            {animationStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-25 flex items-center justify-center pointer-events-none"
              >
                <div className="w-56 h-56 rounded-full bg-gradient-to-r from-amber-300/60 via-[#D4AF37]/70 to-amber-200/50 blur-2xl animate-pulse" />
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/70 via-[#D4AF37]/40 to-transparent blur-md" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 5. Top Envelope Flap (3D flips open, Z-30 closed, Z-5 open) */}
          <motion.div
            initial={false}
            animate={
              animationStep >= 3
                ? { rotateX: 180, zIndex: 5 }
                : { rotateX: 0, zIndex: 30 }
            }
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-x-0 top-0 h-1/2 pointer-events-none rounded-t-2xl overflow-hidden"
          >
            <div
              className="w-full h-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#EFE6D7] border-b-2 border-[#D4AF37] shadow-lg relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            >
              <div
                className="absolute inset-x-2 top-0 h-full border-b border-[#D4AF37]/50"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
            </div>
          </motion.div>

          {/* 6. Burgundy Wax Seal Stamp ("K & N") (Z-40) */}
          <AnimatePresence>
            {animationStep < 4 && (
              <motion.div
                initial={false}
                animate={
                  animationStep === 1
                    ? { scale: [1, 1.25, 1.15], rotate: [0, -6, 6, 0] }
                    : animationStep === 2
                    ? { scale: 0.7, opacity: 0 }
                    : { scale: 1 }
                }
                transition={{ duration: 0.45 }}
                className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  {/* Golden Aura Glow */}
                  <div className="absolute -inset-2.5 rounded-full bg-amber-400/35 blur-md pointer-events-none animate-pulse" />

                  {/* Circular Royal Burgundy Wax Seal */}
                  <div
                    className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full shrink-0 aspect-square flex items-center justify-center select-none shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(0,0,0,0.6)]"
                    style={{
                      background: "radial-gradient(circle at 36% 32%, #8B1E2E 0%, #5E0E1B 45%, #3B0710 80%, #200308 100%)",
                      border: "2.5px solid #D4AF37",
                    }}
                  >
                    {/* Gold Dashed Inner Rim */}
                    <div className="absolute inset-1 rounded-full border border-dashed border-[#F5E298]/60 pointer-events-none" />

                    {/* Monogram */}
                    <div className="font-serif font-bold text-sm sm:text-base tracking-wider text-[#F5E298] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                      K &amp; N
                    </div>

                    {/* Wax drip highlight */}
                    <div className="absolute top-1.5 left-2 w-3 h-1.5 bg-white/35 rounded-full blur-[0.6px] transform -rotate-45 pointer-events-none" />
                  </div>

                  {/* Pulsing ring aura */}
                  <div className="absolute -inset-1.5 rounded-full border border-[#D4AF37] animate-ping opacity-35 pointer-events-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Invitation Message Below Envelope */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStep >= 1 ? 0.2 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-3 sm:mt-4 max-w-xs px-2"
        >
          <p className="font-serif italic text-xs sm:text-[13px] text-[#FFFDF9]/90 leading-relaxed drop-shadow-sm">
            Together with their families,
            <br />
            you are cordially invited to
            <br />
            celebrate the joyful wedding union.
          </p>
        </motion.div>
      </div>

      {/* ==================================================
          4. BOTTOM ACTION: "✨ OPEN INVITATION ✨" BUTTON
          - Wide rounded pill
          - Burgundy/gold luxury style
          - Gold border & soft glow
          ================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xs pb-5 sm:pb-6 z-20 flex flex-col items-center px-4 shrink-0"
      >
        <motion.button
          onClick={handleOpenClick}
          disabled={animationStep > 0}
          whileHover={animationStep === 0 ? { scale: 1.03 } : {}}
          whileTap={animationStep === 0 ? { scale: 0.97 } : {}}
          className={`group relative w-full py-3 sm:py-3.5 px-6 rounded-full font-serif font-bold tracking-[0.2em] text-xs sm:text-sm uppercase transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.45),0_6px_20px_rgba(0,0,0,0.5)] ${
            animationStep > 0
              ? "bg-[#6B1730] text-[#F5E298] opacity-90 cursor-default"
              : "bg-gradient-to-r from-[#4A0D1B] via-[#6B1730] to-[#4A0D1B] text-[#F5E298] hover:shadow-[0_0_35px_rgba(212,175,55,0.65)]"
          }`}
        >
          {/* Inner Gold Foil Rim */}
          <span className="absolute inset-0.5 rounded-full border border-[#D4AF37]/40 pointer-events-none" />

          {/* Shimmer light sweep */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#F5E298]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-2 text-[#FFFDF9] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            <span className="text-[#D4AF37]">✨</span>
            <span>
              {animationStep > 0 ? "Opening Royal Invitation..." : "OPEN INVITATION"}
            </span>
            <span className="text-[#D4AF37]">✨</span>
          </span>
        </motion.button>

        <p className="text-[10px] text-[#F5E298]/75 tracking-widest uppercase mt-2.5 font-serif drop-shadow-sm">
          Tap to unveil the celebration
        </p>
      </motion.div>

      {/* Fullscreen Golden Warm Dissolve Transition into Home */}
      <AnimatePresence>
        {animationStep >= 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#FAF7F2] pointer-events-none"
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default WelcomeScreen;
