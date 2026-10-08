import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wedding: {
          maroon: {
            DEFAULT: "#4A0E17",
            deep: "#24050A",
            dark: "#350810",
            light: "#6A1A24",
            accent: "#8B2332",
          },
          gold: {
            DEFAULT: "#D4AF37",
            deep: "#997A15",
            light: "#F5E298",
            shimmer: "#FFDF73",
            muted: "#C5A059",
            foil: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
          },
          cream: {
            DEFAULT: "#FAF6F0",
            dark: "#F0E8DC",
            light: "#FFFDF9",
            rose: "#FBF3F0",
          },
          emerald: {
            DEFAULT: "#1B3B2B",
            light: "#2C5E45",
          },
          blush: {
            DEFAULT: "#F7E7E6",
            accent: "#E8C5C8",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        display: ["var(--font-display)", "Cinzel", "Playfair Display", "serif"],
        script: ["var(--font-script)", "Great Vibes", "Alex Brush", "cursive"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        arabic: ["var(--font-arabic)", "Amiri", "Traditional Arabic", "serif"],
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 30px -4px rgba(212, 175, 55, 0.35)',
        'maroon': '0 8px 32px 0 rgba(36, 5, 10, 0.37)',
        'card': '0 10px 30px -5px rgba(74, 14, 23, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.15)',
        'envelope': '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'sway': 'sway 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
