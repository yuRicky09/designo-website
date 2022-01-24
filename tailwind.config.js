module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPeach: "#E7816B",
        secondaryPeach: "#FFAD9B",
        primaryBlack: "#1D1C1E",
        darkGray: "#333136",
        lightGray: "#F1F3F5",
      },
      backgroundImage: {
        "hero-pattern":
          "url('@/assets/shared/desktop/bg-pattern-call-to-action.svg')",
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        popUp: "popUp 0.4s ease-in-out",
        popUpReverse: "popUp 0.4s ease-in-out reverse",
      },
    },
  },
  plugins: [],
};
