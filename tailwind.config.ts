import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          border: "var(--border-color)",
        },
        saffron: {
          DEFAULT: "#E39A32",
          light: "#FFC264",
          dark: "#B8781B",
          glow: "rgba(227, 154, 50, 0.15)",
        },
        paprika: {
          DEFAULT: "#B34B3C",
          dark: "#8F3A2E",
        },
        ivory: {
          DEFAULT: "var(--text-main)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "saffron-glow": "0 0 25px rgba(227, 154, 50, 0.25)",
        "card-subtle": "var(--shadow-card)",
        "drawer": "-10px 0 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0px, 0)" },
          "50%": { transform: "translate3d(0, -8px, 0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
