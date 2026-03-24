/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        panel: "#111111",
        surface: "#1a1a1a",
        cyan: "#00f5ff",
        violet: "#7c3aed",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 245, 255, 0.15)",
        violet: "0 0 35px rgba(124, 58, 237, 0.22)",
      },
      backgroundImage: {
        "terminal-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        drift: "drift 16s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 rgba(0, 245, 255, 0.16), 0 0 24px rgba(0, 245, 255, 0.08)",
          },
          "50%": {
            boxShadow: "0 0 0 rgba(0, 245, 255, 0.26), 0 0 36px rgba(0, 245, 255, 0.18)",
          },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-40px, -20px, 0)" },
        },
      },
    },
  },
  plugins: [],
};
