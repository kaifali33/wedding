"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Calendar, HeartHandshake, MapPin, MailCheck } from "lucide-react";

export const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Members", href: "/members", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Dua", href: "/dua", icon: HeartHandshake },
    { name: "Venue", href: "/venue", icon: MapPin },
    { name: "RSVP", href: "/rsvp", icon: MailCheck },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="shrink-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-wedding-gold/30 shadow-[0_-2px_15px_rgba(180,140,80,0.1)] pb-safe select-none"
    >
      <div className="flex items-center justify-around px-1 py-1.5 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-200 min-w-[50px] active:scale-95 ${
                isActive
                  ? "text-wedding-maroon font-bold"
                  : "text-[#7A5258] hover:text-wedding-maroon"
              }`}
            >
              {/* Active Golden Bar Indicator */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-0.5 rounded-full bg-wedding-gold shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
              )}

              <div
                className={`p-1 rounded-lg transition-colors ${
                  isActive ? "bg-wedding-maroon/10 border border-wedding-gold/40 shadow-xs" : ""
                }`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform ${
                    isActive ? "scale-110 text-wedding-maroon" : "text-[#7A5258]"
                  }`}
                />
              </div>

              <span
                className={`text-[9px] sm:text-[10px] font-serif tracking-wider mt-0.5 ${
                  isActive ? "font-bold text-wedding-maroon" : "font-normal text-[#7A5258]"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
