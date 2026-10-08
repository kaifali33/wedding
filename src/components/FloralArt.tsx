"use client";

import React from "react";

/**
 * High-quality artistic floral SVG elements matching luxury wedding invitation aesthetics:
 * - Pink garden roses
 * - White jasmine/magnolia blossoms
 * - Sage green eucalyptus leaves
 * - Delicate golden branches & berries
 */

export const FloralCornerTopLeft: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 110,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none drop-shadow-sm select-none ${className}`}
  >
    {/* Golden Branch 1 */}
    <path
      d="M5 25 C25 22 55 35 75 60"
      stroke="#D4AF37"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    />
    <circle cx="28" cy="22" r="2.5" fill="#D4AF37" />
    <circle cx="48" cy="32" r="2" fill="#F5E298" />
    <circle cx="68" cy="52" r="2" fill="#D4AF37" />

    {/* Sage Green Leaves */}
    <path
      d="M10 12 C18 10 24 16 22 24 C14 26 8 20 10 12 Z"
      fill="#6B8E67"
      opacity="0.85"
    />
    <path
      d="M32 18 C42 16 48 24 44 32 C36 34 30 26 32 18 Z"
      fill="#88A987"
      opacity="0.9"
    />
    <path
      d="M16 36 C24 38 28 48 24 54 C16 54 12 44 16 36 Z"
      fill="#567852"
      opacity="0.85"
    />
    <path
      d="M50 40 C60 42 66 52 60 60 C52 60 46 50 50 40 Z"
      fill="#7B9D76"
      opacity="0.85"
    />

    {/* White Blossom */}
    <g transform="translate(62, 38)">
      <circle cx="0" cy="0" r="10" fill="#FFFDF9" stroke="#E6D7C3" strokeWidth="0.8" />
      <circle cx="0" cy="0" r="3.5" fill="#F59E0B" />
      <path d="M-8 0 Q0 -6 8 0 Q0 6 -8 0" fill="#FFF8F0" opacity="0.6" />
      <path d="M0 -8 Q-6 0 0 8 Q6 0 0 -8" fill="#FFF8F0" opacity="0.6" />
    </g>

    {/* Main Lush Pink Rose */}
    <g transform="translate(34, 40)">
      {/* Outer Petals */}
      <circle cx="0" cy="0" r="20" fill="#F8B4C0" />
      <path
        d="M-18 -5 C-12 -22 12 -22 18 -5 C24 12 12 24 0 22 C-14 24 -24 12 -18 -5 Z"
        fill="#F48FB1"
        opacity="0.9"
      />
      {/* Middle Petals */}
      <path
        d="M-12 -2 C-8 -15 8 -15 12 -2 C16 10 8 16 0 15 C-8 16 -16 10 -12 -2 Z"
        fill="#EC407A"
        opacity="0.85"
      />
      {/* Inner Swirl */}
      <circle cx="0" cy="0" r="8" fill="#D81B60" />
      <path
        d="M-4 -2 C-2 -7 5 -5 4 0 C3 4 -3 5 -4 -2 Z"
        fill="#880E4F"
        opacity="0.9"
      />
      <circle cx="0" cy="0" r="2.5" fill="#FFEBF0" />
    </g>

    {/* Small Pink Blossom */}
    <g transform="translate(18, 62)">
      <circle cx="0" cy="0" r="9" fill="#FFC1CC" />
      <circle cx="0" cy="0" r="5" fill="#F06292" />
      <circle cx="0" cy="0" r="2" fill="#FFF" />
    </g>

    {/* Golden Filigree Leaf */}
    <path
      d="M2 42 C12 40 18 46 16 52 C8 52 4 48 2 42 Z"
      fill="#D4AF37"
      opacity="0.75"
    />
  </svg>
);

export const FloralCornerTopRight: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 110,
}) => (
  <div style={{ transform: "scaleX(-1)" }} className={className}>
    <FloralCornerTopLeft size={size} />
  </div>
);

export const FloralHeaderDecor: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="160"
    height="28"
    viewBox="0 0 160 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Left Gold Laurel Branch */}
    <path
      d="M20 14 C45 13 60 14 70 14"
      stroke="#D4AF37"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path d="M35 14 C32 8 26 9 28 14" fill="#D4AF37" opacity="0.7" />
    <path d="M48 14 C45 8 39 9 41 14" fill="#D4AF37" opacity="0.7" />
    <path d="M60 14 C57 8 51 9 53 14" fill="#D4AF37" opacity="0.7" />
    <path d="M35 14 C32 20 26 19 28 14" fill="#7B9D76" opacity="0.8" />
    <path d="M48 14 C45 20 39 19 41 14" fill="#7B9D76" opacity="0.8" />
    <path d="M60 14 C57 20 51 19 53 14" fill="#7B9D76" opacity="0.8" />

    {/* Center Rosebud */}
    <g transform="translate(80, 14)">
      <circle cx="0" cy="0" r="6" fill="#F48FB1" />
      <circle cx="0" cy="0" r="3.5" fill="#E91E63" />
      <circle cx="0" cy="0" r="1.5" fill="#FFF" />
      {/* Side Leaves */}
      <path d="M-6 0 C-10 -4 -12 2 -7 3" fill="#6B8E67" />
      <path d="M6 0 C10 -4 12 2 7 3" fill="#6B8E67" />
    </g>

    {/* Right Gold Laurel Branch */}
    <path
      d="M140 14 C115 13 100 14 90 14"
      stroke="#D4AF37"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path d="M125 14 C128 8 134 9 132 14" fill="#D4AF37" opacity="0.7" />
    <path d="M112 14 C115 8 121 9 119 14" fill="#D4AF37" opacity="0.7" />
    <path d="M100 14 C103 8 109 9 107 14" fill="#D4AF37" opacity="0.7" />
    <path d="M125 14 C128 20 134 19 132 14" fill="#7B9D76" opacity="0.8" />
    <path d="M112 14 C115 20 121 19 119 14" fill="#7B9D76" opacity="0.8" />
    <path d="M100 14 C103 20 109 19 107 14" fill="#7B9D76" opacity="0.8" />
  </svg>
);

export const FloatingPetalDecor: React.FC<{
  top: string;
  left: string;
  size?: number;
  rotation?: number;
  opacity?: number;
  color?: string;
}> = ({
  top,
  left,
  size = 14,
  rotation = 25,
  opacity = 0.5,
  color = "#F48FB1",
}) => (
  <div
    className="absolute pointer-events-none select-none z-0"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size * 1.3}px`,
      transform: `rotate(${rotation}deg)`,
      opacity,
      backgroundColor: color,
      borderRadius: "50% 0 50% 50%",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
    }}
  />
);
