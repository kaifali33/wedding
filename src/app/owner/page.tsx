"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Heart,
  Sparkles,
  Code,
} from "lucide-react";
import { FloralCornerTopLeft, FloralCornerTopRight } from "@/components/FloralArt";

export default function OwnerPage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="h-full w-full bg-[#FFF9F1] flex flex-col p-2.5 sm:p-3.5 overflow-hidden select-none relative">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-radial from-[#F3D9A0]/25 via-[#EFA6B4]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full text-center shrink-0 mb-1 z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6B1730]/10 border border-[#C99A3A]/40 text-[8.5px] sm:text-[9.5px] font-serif uppercase tracking-[0.22em] text-[#C99A3A] font-semibold mb-0.5">
          <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C99A3A]" />
          <span>APPLICATION CREATOR</span>
        </div>

        <h1 className="font-serif text-lg sm:text-2xl font-bold text-[#4A0D20] flex items-center justify-center gap-1.5 leading-tight">
          <span>Designed &amp; Developed with</span>
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 fill-red-600 inline-block animate-pulse" />
        </h1>

        {/* Elegant Gold Divider with Floral Centerpiece */}
        <div className="flex items-center justify-center gap-2 my-0.5">
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#C99A3A]" />
          <div className="flex items-center gap-1 text-[#C99A3A]">
            <span className="text-[7px] opacity-70">✦</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              <circle cx="12" cy="12" r="2.5" fill="#C99A3A" />
            </svg>
            <span className="text-[7px] opacity-70">✦</span>
          </div>
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#C99A3A]" />
        </div>
      </motion.div>

      {/* Main Luxury Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F1] to-[#F8E8E8]/40 border border-[#C99A3A]/45 shadow-[0_8px_25px_rgba(74,13,32,0.08),0_0_15px_rgba(201,154,58,0.1)] p-2.5 sm:p-3.5 flex flex-col justify-between relative z-10"
      >
        {/* Corner Floral Ornaments */}
        <div className="absolute top-0 left-0 pointer-events-none opacity-40">
          <FloralCornerTopLeft size={44} />
        </div>
        <div className="absolute top-0 right-0 pointer-events-none opacity-40">
          <FloralCornerTopRight size={44} />
        </div>

        <div className="flex flex-col items-center text-center w-full my-auto">
          {/* Circular Developer Photo with Antique Gold Border & Soft Glow */}
          <div className="relative mb-1 sm:mb-1.5">
            {/* Soft gold ambient glow */}
            <div className="absolute inset-0 rounded-full bg-[#C99A3A]/30 blur-md scale-110 pointer-events-none" />

            {/* Antique Gold Ring Frame */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#C99A3A] via-[#F3D9A0] to-[#C99A3A] shadow-[0_6px_20px_rgba(201,154,58,0.3)]">
              <div className="p-0.5 rounded-full bg-[#FFF9F1]">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-inner bg-[#4A0D20]">
                  {!imageError ? (
                    <Image
                      src="/images/developer.jpg"
                      alt="Jaid - Full-Stack Web Developer"
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover object-top"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#F3D9A0]">
                      <span className="font-serif text-2xl font-bold">J</span>
                      <span className="text-[7px] uppercase tracking-widest text-[#C99A3A]">Creator</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Delicate Floral / Leaf Accents on Ring */}
            <div className="absolute -bottom-1 -right-0.5 bg-gradient-to-tr from-[#6B1730] to-[#4A0D20] border border-[#F3D9A0] rounded-full p-0.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#F3D9A0]" />
            </div>
          </div>

          {/* Developer Name & Role */}
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0D20] tracking-wide leading-tight">
            Jaid
          </h2>

          <p className="font-serif text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#C99A3A] mt-0.5">
            FULL-STACK WEB DEVELOPER &amp; UI DESIGNER
          </p>

          <p className="font-serif italic text-[11px] sm:text-xs text-[#6B1730]/90 max-w-xs mt-0.5 mb-1.5 px-2">
            &ldquo;Crafting digital experiences with precision, elegance, and soul.&rdquo;
          </p>

          {/* About Developer Section */}
          <div className="w-full bg-[#FFFDF9]/90 rounded-xl p-2 sm:p-2.5 border border-[#C99A3A]/30 shadow-xs mb-2 text-center sm:text-left">
            <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.18em] text-[#6B1730] font-bold block mb-0.5">
              ABOUT THE DEVELOPER
            </span>
            <p className="font-serif text-[11px] sm:text-xs text-[#4A0D20]/85 leading-relaxed">
              Specialized in creating modern, responsive, high-performance web applications and digital invitation experiences. Built with Next.js, TypeScript, and modern animation technologies.
            </p>
          </div>

          {/* Contact Section: Phone Card & WhatsApp CTA ONLY */}
          <div className="w-full space-y-1.5">
            {/* Phone Card */}
            <a
              href="tel:+917857811740"
              className="group w-full flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#FFFDF9] border border-[#C99A3A]/35 hover:border-[#C99A3A] transition-all duration-300 shadow-xs hover:shadow-[0_4px_14px_rgba(201,154,58,0.2)] text-left"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#6B1730] to-[#4A0D20] text-[#F3D9A0] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F3D9A0]" />
                </div>
                <div>
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.18em] font-bold text-[#C99A3A] block">
                    Phone
                  </span>
                  <span className="font-serif text-[11px] sm:text-xs font-bold text-[#4A0D20] tracking-wide block">
                    +91 7857811740
                  </span>
                </div>
              </div>
              <span className="text-[8px] sm:text-[9px] font-serif uppercase tracking-wider text-[#6B1730] font-bold px-2 py-0.5 rounded-full bg-[#C99A3A]/15 border border-[#C99A3A]/30 group-hover:bg-[#C99A3A]/25 transition-colors shrink-0">
                Call Now
              </span>
            </a>

            {/* Primary WhatsApp Action */}
            <a
              href="https://wa.me/917857811740"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#128C7E] hover:from-[#0d7366] hover:to-[#0d7366] text-white font-serif text-[11px] sm:text-xs font-bold tracking-wide shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_18px_rgba(37,211,102,0.45)] transition-all duration-300 transform active:scale-[0.99]"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-transparent group-hover:rotate-6 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Card Ornament & Credit */}
        <div className="w-full text-center shrink-0 pt-1.5 border-t border-[#C99A3A]/20">
          <p className="text-[8.5px] sm:text-[9.5px] font-serif uppercase tracking-[0.18em] text-[#6B1730] font-bold">
            CRAFTED FOR KAUSAR &amp; NAJIYA&apos;S WEDDING ❤️
          </p>
        </div>
      </motion.div>
    </div>
  );
}
