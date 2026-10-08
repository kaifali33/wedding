"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WEDDING_DATA } from "@/data/wedding";

export const DesktopHeader: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Members", href: "/members" },
    { name: "Events", href: "/events" },
    { name: "Dua", href: "/dua" },
    { name: "Venue", href: "/venue" },
    { name: "RSVP", href: "/rsvp" },
    { name: "Contact", href: "/contact" },
    { name: "Owner of App", href: "/owner" },
  ];

  return (
    <header className="hidden md:block sticky top-0 z-40 bg-[#24050A]/95 backdrop-blur-md border-b border-wedding-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Monogram / Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center bg-wedding-maroon text-wedding-gold font-display font-bold text-sm shadow-gold">
            K&amp;N
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-wedding-gold-light group-hover:text-wedding-gold transition-colors tracking-wide">
              {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}
            </span>
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold/70">
              Wedding Celebration {WEDDING_DATA.year}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-serif tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-wedding-gold text-wedding-maroon-deep font-semibold shadow-gold"
                    : "text-wedding-cream/80 hover:text-wedding-gold hover:bg-wedding-gold/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Quick RSVP CTA button */}
        <div className="flex items-center gap-3">
          <Link
            href="/rsvp"
            className="px-5 py-2 rounded-full text-xs font-serif font-semibold uppercase tracking-widest bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold text-wedding-maroon-deep hover:shadow-gold-lg transition-transform active:scale-95"
          >
            RSVP Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
