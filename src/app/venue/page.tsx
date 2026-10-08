"use client";

import React from "react";
import Image from "next/image";
import { WEDDING_DATA } from "@/data/wedding";
import { FloralDivider } from "@/components/Ornaments";
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export default function VenuePage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    WEDDING_DATA.venue.fullAddress
  )}`;

  // Venue gallery photos
  const venuePhotos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3.5 overflow-hidden select-none">
      {/* Top Header matching reference */}
      <div className="w-full text-center shrink-0 mb-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <MapPin className="w-3 h-3 text-wedding-gold" />
          <span>Celebration Location</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide">
          Venue Details
        </h1>

        <FloralDivider className="my-1.5 scale-75" />
      </div>

      {/* Controlled Internal Scrollable Content */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-3 rounded-2xl bg-[#FFFDF9] border border-wedding-gold/50 shadow-card p-3 sm:p-3.5 pr-1">
        {/* Venue Image Banner */}
        <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-wedding-maroon-deep shrink-0 border border-wedding-gold/40">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
            alt="Wedding Venue Shekhpura"
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200408] via-[#200408]/30 to-transparent" />

          <div className="absolute bottom-2 inset-x-3 text-wedding-cream">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-wedding-gold-light drop-shadow">
              {WEDDING_DATA.venue.name}
            </h2>
            <p className="font-serif text-xs text-wedding-cream/90 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-wedding-gold" />
              <span>{WEDDING_DATA.venue.subLocation}</span>
            </p>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-wedding-cream rounded-xl p-3 border border-wedding-gold/30">
          <span className="text-[9px] font-serif uppercase tracking-widest text-wedding-gold-deep font-bold block mb-0.5">
            Full Address
          </span>
          <p className="font-serif text-xs sm:text-sm font-bold text-wedding-maroon">
            {WEDDING_DATA.venue.fullAddress}
          </p>
          <p className="font-serif italic text-[11px] text-wedding-maroon/70 mt-0.5">
            {WEDDING_DATA.venue.directionsNote}
          </p>
        </div>

        {/* Action Buttons: Google Maps & Directions */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-wedding-maroon text-wedding-gold-light hover:bg-wedding-maroon-dark border border-wedding-gold/50 font-serif text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5 text-wedding-gold" />
            <span>Open Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold text-wedding-maroon-deep font-serif text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Map / Landmark Section */}
        <div className="rounded-xl border border-wedding-gold/30 bg-[#F5EDE1] p-3 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-wedding-maroon text-wedding-gold flex items-center justify-center mb-1 shadow">
            <Compass className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-xs text-wedding-maroon">
            Near Shekhpura Jama Masjid
          </h4>
          <p className="font-serif text-[10px] text-wedding-maroon/70 max-w-xs mt-0.5">
            Ample guest parking and easy landmark access for arriving guests.
          </p>
        </div>

        {/* Venue Gallery Section */}
        <div className="pt-2 border-t border-wedding-gold/20">
          <div className="flex items-center gap-1.5 text-wedding-gold-deep mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-wedding-maroon">
              Venue Gallery
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {venuePhotos.map((photo, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-wedding-gold/30">
                <Image
                  src={photo}
                  alt={`Venue photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 430px) 50vw, 200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Conditional Venue Owner Section (only if provided) */}
        {WEDDING_DATA.venue.ownerInfo?.show && (
          <div className="pt-2 border-t border-wedding-gold/30">
            <div className="rounded-xl bg-wedding-cream p-3 border border-wedding-gold/30">
              <div className="flex items-center gap-1.5 text-wedding-gold-deep mb-1">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-wedding-maroon">
                  Owner of Venue / Location
                </h4>
              </div>
              <p className="font-serif text-[10px] text-wedding-maroon/70 mb-1">
                {WEDDING_DATA.venue.ownerInfo.note}
              </p>
              <div className="text-[11px] font-serif text-wedding-maroon">
                <span className="font-bold">{WEDDING_DATA.venue.ownerInfo.name}</span>
                {WEDDING_DATA.venue.ownerInfo.phone && (
                  <span className="block text-wedding-maroon/70">{WEDDING_DATA.venue.ownerInfo.phone}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Guidance Tag */}
      <div className="w-full text-center shrink-0 pt-1.5">
        <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-maroon/60">
          Shekhpura • All 5 Functions Held at this Venue
        </p>
      </div>
    </div>
  );
}
