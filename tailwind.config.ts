import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f0ff",
          500: "#0c8ce9",
          600: "#0a6fc2",
          700: "#0b5a9c",
          900: "#0a3a66",
        },
        ink: "#0f172a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
