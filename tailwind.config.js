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
    },
  },
  plugins: [],
};
