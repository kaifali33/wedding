"use client";

import React, { useState, useEffect } from "react";
import AppTopBar from "./AppTopBar";
import BottomNavigation from "./BottomNavigation";
import WelcomeScreen from "./WelcomeScreen";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const opened = sessionStorage.getItem("wedding_invitation_opened");
    if (opened === "true") {
      setIsOpened(true);
    }
  }, []);

  const handleOpenInvitation = () => {
    sessionStorage.setItem("wedding_invitation_opened", "true");
    setIsOpened(true);
  };

  const handleReplayInvitation = () => {
    sessionStorage.removeItem("wedding_invitation_opened");
    setIsOpened(false);
  };

  // SSR Loading placeholder to avoid flash of wrong content
  if (!isMounted) {
    return (
      <div className="fixed inset-0 w-screen h-[100dvh] bg-gradient-to-b from-[#2E070F] via-[#480B15] to-[#1F0307] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-wedding-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  // 1. BEFORE OPENING:
  // Render ONLY the Welcome Screen in true full viewport (100vw x 100dvh).
  // NO Bottom Navigation, NO Top Bar, NO main application framing.
  if (!isOpened) {
    return (
      <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden z-50">
        <WelcomeScreen onOpenInvitation={handleOpenInvitation} />
      </div>
    );
  }

  // 2. AFTER OPENING:
  // Render the Main Application Shell with AppTopBar, Viewport Content, and BottomNavigation.
  return (
    <div className="w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between bg-wedding-cream text-wedding-maroon-deep relative overflow-hidden select-none">
      {/* Responsive Centered Shell */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto h-full flex flex-col justify-between relative overflow-hidden">
        {/* Main App Top Bar with hamburger drawer & music toggle */}
        <AppTopBar onReplayInvitation={handleReplayInvitation} />

        {/* Main Screen Viewport */}
        <main className="flex-1 h-full min-h-0 overflow-hidden relative w-full flex flex-col">
          {children}
        </main>

        {/* Fixed Bottom Navigation (Home | Members | Events | Gallery | Venue | RSVP) */}
        <BottomNavigation />
      </div>
    </div>
  );
}
