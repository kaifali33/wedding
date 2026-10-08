"use client";

import React from "react";
import { WEDDING_DATA } from "@/data/wedding";
import MemberCard from "@/components/MemberCard";
import { FloralDivider } from "@/components/Ornaments";
import { Users } from "lucide-react";

export default function MembersPage() {
  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3.5 overflow-hidden select-none">
      {/* Top Header */}
      <div className="w-full text-center shrink-0 mb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <Users className="w-3 h-3 text-wedding-gold" />
          <span>Honoured Family</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide">
          Groom&apos;s Family
        </h1>

        <FloralDivider className="my-1.5 scale-75" />

        {/* Specified warm family invite note */}
        <p className="font-serif text-xs sm:text-sm text-wedding-maroon/85 font-medium leading-relaxed max-w-xs mx-auto">
          &ldquo;All our family members warmly invite you to join us and celebrate our special day. ❤️&rdquo;
        </p>
      </div>

      {/* Member Cards Grid (Controlled Internal Scroll Area) */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar py-1">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {WEDDING_DATA.familyMembers.map((member) => (
            <MemberCard key={member.id} member={member} className="p-3 sm:p-4" />
          ))}
        </div>
      </div>

      {/* Bottom Guidance Tag */}
      <div className="w-full text-center shrink-0 pt-1.5">
        <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-maroon/60">
          Shekhpura, Near Shekhpura Jama Masjid
        </p>
      </div>
    </div>
  );
}
