/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s infinite",
        "ping-slow": "ping 3s infinite",
      },
      boxShadow: {
        glow: "0 0 15px rgba(99, 102, 241, 0.5)",
      },
    },
  },
  plugins: [],
};
