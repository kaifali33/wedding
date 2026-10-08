"use client";

import React from "react";
import Link from "next/link";
import { WEDDING_DATA } from "@/data/wedding";
import { BismillahHeader, FloralDivider } from "./Ornaments";
import { Heart, Sparkles, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C0407] text-wedding-cream border-t border-wedding-gold/30 pt-12 pb-24 md:pb-12 px-4 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-wedding-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <BismillahHeader light={true} className="mb-4" />

        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-wedding-gold-light mt-2">
          {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}
        </h2>

        <p className="font-serif italic text-xs sm:text-sm text-wedding-cream/80 max-w-md mt-2">
          &ldquo;And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts.&rdquo;
        </p>
        <span className="text-[10px] font-serif text-wedding-gold/60 mt-1 uppercase tracking-widest">
          Surah Ar-Rum (30:21)
        </span>

        <FloralDivider light={true} className="my-6 w-full max-w-xs" />

        {/* Quick Venue & Date Recap */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-serif text-wedding-cream/90 mb-6">
          <div className="flex items-center gap-1.5 bg-wedding-maroon/60 px-3 py-1.5 rounded-full border border-wedding-gold/30">
            <MapPin className="w-3.5 h-3.5 text-wedding-gold" />
            <span>{WEDDING_DATA.venue.name}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-wedding-maroon/60 px-3 py-1.5 rounded-full border border-wedding-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-wedding-gold" />
            <span>{WEDDING_DATA.datesSummary}</span>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-serif text-wedding-gold-light/80 mb-8 max-w-md">
          <Link href="/" className="hover:text-wedding-gold transition-colors">
            Home
          </Link>
          <Link href="/members" className="hover:text-wedding-gold transition-colors">
            Members
          </Link>
          <Link href="/events" className="hover:text-wedding-gold transition-colors">
            Events
          </Link>
          <Link href="/gallery" className="hover:text-wedding-gold transition-colors">
            Gallery
          </Link>
          <Link href="/venue" className="hover:text-wedding-gold transition-colors">
            Venue
          </Link>
          <Link href="/rsvp" className="hover:text-wedding-gold transition-colors">
            RSVP
          </Link>
          <Link href="/contact" className="hover:text-wedding-gold transition-colors">
            Contact
          </Link>
          <Link
            href="/owner"
            className="text-wedding-gold font-semibold underline underline-offset-4 hover:text-white transition-colors"
          >
            Owner of Application
          </Link>
        </div>

        {/* Bottom Credits & Developer link */}
        <div className="pt-6 border-t border-wedding-gold/20 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-wedding-cream/60 font-serif gap-3">
          <p>
            Wedding Celebration &copy; {WEDDING_DATA.year}. All rights reserved.
          </p>

          <Link
            href="/owner"
            className="flex items-center gap-1.5 text-wedding-gold/90 hover:text-wedding-gold transition-colors"
          >
            <span>Designed &amp; Developed with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span className="underline underline-offset-2">View Developer Profile</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
