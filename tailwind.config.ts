import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",   // Màu xám đen (chữ chính)
        secondary: "#f9f8f6", // Màu kem sáng (nền chính)
        accent: "#2c4c3b",    // Màu xanh rêu (điểm nhấn)
        gold: "#d4af37",      // Màu vàng đồng sang trọng
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;