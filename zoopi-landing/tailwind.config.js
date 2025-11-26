/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette Zoopi officielle extraite de la charte graphique
        "primary-blue": "#2B5A9E", // Bleu principal (fond)
        "dark-blue": "#1E4A7C", // Bleu foncé (boutons)
        "light-sand": "#E8D4B8", // Beige/sable plus prononcé (était #F5E6D3)
        cream: "#FFF8ED", // Crème très clair
        white: "#FFFFFF", // Blanc pur
        "text-dark": "#1A1A1A", // Texte sombre
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
