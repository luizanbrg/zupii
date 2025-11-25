/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-teal": "#1FB6A5",
        "secondary-coral": "#FF6B6B",
        "soft-yellow": "#FFD166",
        "navy-dark": "#0B2545",
        "neutral-surface": "#F6F8FB",
        "neutral-muted": "#9AA6C1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 37, 69, 0.08)",
        elevated: "0 20px 40px rgba(11, 37, 69, 0.12)",
      },
      borderRadius: {
        card: "14px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
