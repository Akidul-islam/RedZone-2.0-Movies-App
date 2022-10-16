module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        bShadow:
          "inset 0 0 70px rgba(0, 0, 0, 0.1), 0 0 10px 0 rgba(0, 0, 0, 0.6)",
      },

      backgroundColor: {
        darkOpa: "hsla(0, 0%, 100%, 0.106)",
      },
      colors: {
        Red: "red",
      },
      animation: {
        fade: "fade 0.8s ease-in-out forwards",
        circle: "circle 0.5s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        circle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(390deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
