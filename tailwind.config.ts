import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta del branding de Dentissimo: azul marino + turquesa (logo)
        primary: {
          50: "#eefafc",
          100: "#d6f2f7",
          200: "#b2e6ef",
          300: "#7dd3e2",
          400: "#5bc6d9", // turquesa del logo
          500: "#35abc4",
          600: "#2a8aa5",
          700: "#287086",
          800: "#285b6d",
          900: "#254c5b",
        },
        navy: {
          50: "#f2f3fa",
          100: "#e3e5f3",
          200: "#c9cde8",
          300: "#a3aad6",
          400: "#7880bf",
          500: "#5a61a8",
          600: "#464c8f",
          700: "#3a3f78",
          800: "#2b2f66",
          900: "#212657", // azul marino del logo
          950: "#161940",
        },
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        whatsapp: "#25D366",
        "whatsapp-dark": "#1DA851",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
