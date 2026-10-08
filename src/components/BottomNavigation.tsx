"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  HeartHandshake,
  MapPin,
  MailCheck,
  Code2,
} from "lucide-react";

export const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Members", href: "/members", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Dua", href: "/dua", icon: HeartHandshake },
    { name: "Venue", href: "/venue", icon: MapPin },
    { name: "RSVP", href: "/rsvp", icon: MailCheck },
    { name: "Owner", href: "/owner", icon: Code2 },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="shrink-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-wedding-gold/30 shadow-[0_-2px_15px_rgba(180,140,80,0.1)] pb-safe select-none w-full"
    >
      <div className="flex items-center justify-between w-full px-0.5 sm:px-1 py-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-0.5 sm:py-1 px-0.5 rounded-lg transition-all duration-200 flex-1 min-w-0 active:scale-95 ${
                isActive
                  ? "text-wedding-maroon font-bold"
                  : "text-[#7A5258] hover:text-wedding-maroon"
              }`}
            >
              {/* Active Golden Bar Indicator */}
              {isActive && (
                <span className="absolute -top-1 w-5 sm:w-6 h-0.5 rounded-full bg-wedding-gold shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
              )}

              <div
                className={`p-0.5 sm:p-1 rounded-md transition-colors ${
                  isActive ? "bg-wedding-maroon/10 border border-wedding-gold/40 shadow-xs" : ""
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                    isActive ? "scale-110 text-wedding-maroon" : "text-[#7A5258]"
                  }`}
                />
              </div>

              <span
                className={`text-[8px] sm:text-[9.5px] font-serif tracking-tight leading-none mt-0.5 truncate max-w-full text-center ${
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
