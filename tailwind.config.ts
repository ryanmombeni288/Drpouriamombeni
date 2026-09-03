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
        navy: {
          950: "#070c14",
          900: "#0b1324",
          850: "#101b33",
          800: "#152445",
          700: "#1e3360",
          600: "#2d4b8a",
        },
        accent: {
          DEFAULT: "#c59b27",
          light: "#d9b349",
          dark: "#a57f18",
          subtle: "#fdf8ec",
        },
        surface: {
          light: "#ffffff",
          muted: "#f8fafc",
          subtle: "#f1f5f9",
          border: "#e2e8f0",
          darkborder: "#1e293b",
        }
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "system-ui", "-apple-system", "sans-serif"],
        en: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
