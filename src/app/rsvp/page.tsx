"use client";

import React from "react";
import RSVPForm from "@/components/RSVPForm";
import { FloralDivider } from "@/components/Ornaments";
import { MailCheck } from "lucide-react";

export default function RSVPPage() {
  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3.5 overflow-hidden select-none">
      {/* Top Header matching reference */}
      <div className="w-full text-center shrink-0 mb-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <MailCheck className="w-3 h-3 text-wedding-gold" />
          <span>Wedding Attendance</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide">
          Please Confirm Your Presence
        </h1>

        <FloralDivider className="my-1.5 scale-75" />

        <p className="font-serif italic text-xs text-wedding-maroon/80 max-w-xs mx-auto">
          Your presence will make our celebration even more special.
        </p>
      </div>

      {/* Controlled Internal Form Area */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar py-1">
        <RSVPForm />
      </div>

      {/* Bottom Guidance Tag */}
      <div className="w-full text-center shrink-0 pt-1.5">
        <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-maroon/60">
          Kausar &amp; Najiya • Shekhpura
        </p>
      </div>
    </div>
  );
}
