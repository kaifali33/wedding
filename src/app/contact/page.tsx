"use client";

import React from "react";
import { WEDDING_DATA } from "@/data/wedding";
import { FloralDivider } from "@/components/Ornaments";
import { Phone, MessageCircle, Mail, MapPin, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3.5 overflow-hidden select-none">
      {/* Top Header matching reference */}
      <div className="w-full text-center shrink-0 mb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <Phone className="w-3 h-3 text-wedding-gold" />
          <span>Guest Assistance</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide flex items-center justify-center gap-1.5">
          <span>Get In Touch</span>
          <Heart className="w-5 h-5 text-red-600 fill-red-600 inline-block animate-pulse" />
        </h1>

        <FloralDivider className="my-1.5 scale-75" />

        <p className="font-serif italic text-xs text-wedding-maroon/75 max-w-xs mx-auto">
          We warmly look forward to assisting you for all celebration arrangements.
        </p>
      </div>

      {/* 3 Action Cards matching reference: Call Us, WhatsApp, Email */}
      <div className="w-full my-auto flex flex-col gap-2.5">
        {/* Call Us */}
        <a
          href={`tel:${WEDDING_DATA.contact.phone}`}
          className="p-3.5 rounded-2xl bg-white border border-wedding-gold/50 shadow-card flex items-center justify-between hover:border-wedding-gold active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-wedding-maroon text-wedding-gold flex items-center justify-center shadow">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-sm font-bold text-wedding-maroon block">
                Call Us
              </h3>
              <span className="font-serif text-xs text-wedding-maroon/70 block">
                {WEDDING_DATA.contact.phone}
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-wedding-maroon text-wedding-gold-light font-serif text-[10px] uppercase tracking-wider font-semibold shadow-xs">
            Call
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={WEDDING_DATA.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-white border border-emerald-500/40 shadow-card flex items-center justify-between hover:border-emerald-600 active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-sm font-bold text-wedding-maroon block">
                WhatsApp
              </h3>
              <span className="font-serif text-xs text-wedding-maroon/70 block">
                Chat &amp; Location Details
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-serif text-[10px] uppercase tracking-wider font-semibold shadow-xs">
            Message
          </span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${WEDDING_DATA.contact.email}`}
          className="p-3.5 rounded-2xl bg-white border border-wedding-gold/50 shadow-card flex items-center justify-between hover:border-wedding-gold active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-wedding-gold text-wedding-maroon flex items-center justify-center shadow">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-sm font-bold text-wedding-maroon block">
                Email
              </h3>
              <span className="font-serif text-xs text-wedding-maroon/70 block truncate max-w-[170px]">
                {WEDDING_DATA.contact.email}
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon font-serif text-[10px] uppercase tracking-wider font-semibold group-hover:bg-wedding-maroon group-hover:text-wedding-gold transition-colors">
            Mail
          </span>
        </a>

        {/* Venue Address Guidance Box */}
        <div className="p-3 rounded-2xl bg-wedding-cream-rose/70 border border-wedding-gold/40 text-center">
          <p className="font-serif italic text-[11px] text-wedding-maroon/80 mb-1">
            {WEDDING_DATA.contact.supportNote}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-wedding-maroon">
            <MapPin className="w-3.5 h-3.5 text-wedding-gold" />
            <span>{WEDDING_DATA.contact.address}</span>
          </div>
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
