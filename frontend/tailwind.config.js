import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        midnight: {
          "primary": "#6366f1",           // Indigo for primary accents
          "primary-focus": "#4f46e5",
          "primary-content": "#ffffff",
          "secondary": "#1e293b",         // Dark slate blue
          "accent": "#334155",            // Slate color
          "neutral": "#1e1e2a",           // Very dark blue-gray
          "base-100": "#0f172a",          // Dark blue background
          "base-200": "#0a0f1d",          // Even darker blue
          "base-300": "#161f32",          // Slightly lighter blue for borders
          "base-content": "#e2e8f0",      // Light gray for text
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        }
      }
    ],
  },
};
