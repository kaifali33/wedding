"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WEDDING_DATA } from "@/data/wedding";
import { FloralDivider } from "@/components/Ornaments";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3.5 overflow-hidden select-none">
      {/* Top Header */}
      <div className="w-full text-center shrink-0 mb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <Sparkles className="w-3 h-3 text-wedding-gold" />
          <span>Celebration Timeline</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide">
          Our Wedding Functions
        </h1>

        <FloralDivider className="my-1.5 scale-75" />

        <p className="font-serif italic text-xs text-wedding-maroon/75">
          5 joyous ceremonies uniting Kausar &amp; Najiya
        </p>
      </div>

      {/* Vertical List of Compact Event Cards (Controlled Internal Scroll) */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-2.5 pr-0.5">
        {WEDDING_DATA.events.map((evt) => (
          <div
            key={evt.id}
            className="rounded-2xl bg-[#FFFDF9] border border-wedding-gold/50 shadow-card p-2.5 sm:p-3 flex items-center gap-3 transition-all hover:border-wedding-gold"
          >
            {/* LEFT: Small Event Image */}
            <div className="relative w-20 h-24 sm:w-24 sm:h-26 rounded-xl overflow-hidden shrink-0 border border-wedding-gold/40 bg-wedding-maroon-deep shadow-sm">
              <Image
                src={evt.image}
                alt={evt.name}
                fill
                sizes="96px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1 inset-x-1 text-center">
                <span className="text-[8px] font-serif uppercase tracking-widest text-wedding-gold-light font-bold bg-black/60 px-1.5 py-0.5 rounded-full backdrop-blur-xs block truncate">
                  {evt.tag.split("•")[0].trim()}
                </span>
              </div>
            </div>

            {/* RIGHT: Event Name, Date, Day, Time Placeholder, Venue & View Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
              <div>
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h3 className="font-serif text-sm font-bold text-wedding-maroon truncate">
                    {evt.name}
                  </h3>
                </div>

                {evt.subtitle && (
                  <p className="text-[10px] font-serif text-wedding-gold-deep font-semibold truncate mb-1">
                    {evt.subtitle}
                  </p>
                )}

                {/* Date & Day */}
                <div className="flex items-center gap-1.5 text-[11px] font-serif text-wedding-maroon/90 font-medium">
                  <Calendar className="w-3 h-3 text-wedding-gold shrink-0" />
                  <span className="truncate">{evt.fullDateText}</span>
                </div>

                {/* Time Placeholder */}
                <div className="flex items-center gap-1.5 text-[10px] font-serif text-wedding-maroon/60 mt-0.5">
                  <Clock className="w-3 h-3 text-wedding-gold shrink-0" />
                  <span className="italic truncate">{evt.timePlaceholder}</span>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-1.5 text-[10px] font-serif text-wedding-maroon/80 mt-0.5">
                  <MapPin className="w-3 h-3 text-wedding-gold shrink-0" />
                  <span className="truncate">{evt.venue}</span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-2 pt-1.5 border-t border-wedding-gold/20 flex justify-end">
                <Link
                  href={`/events/${evt.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wedding-maroon text-wedding-gold-light hover:bg-wedding-maroon-dark font-serif text-[10px] font-semibold uppercase tracking-wider shadow-sm transition-all active:scale-95"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Guidance Tag */}
      <div className="w-full text-center shrink-0 pt-1.5">
        <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-maroon/60">
          Shekhpura, Near by Shekhpura Jama Masjid
        </p>
      </div>
    </div>
  );
}
