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
        "pages-intro":
          "url('@/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "pages-intro-tablet":
          "url('@/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        "call-to-action":
          "url('@/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "web-design": "url('@/assets/home/mobile/image-web-design.jpg')",
        "web-design-tablet": "url('@/assets/home/tablet/image-web-design.jpg')",
        "web-design-desktop":
          "url('@/assets/home/desktop/image-web-design-small.jpg')",
        "web-design-desktop-big":
          "url('@/assets/home/desktop/image-web-design-large.jpg')",
        "app-design": "url('@/assets/home/mobile/image-app-design.jpg')",
        "app-design-tablet": "url('@/assets/home/tablet/image-app-design.jpg')",
        "app-design-desktop":
          "url('@/assets/home/desktop/image-app-design.jpg')",
        "graphic-design":
          "url('@/assets/home/mobile/image-graphic-design.jpg')",
        "graphic-design-tablet":
          "url('@/assets/home/tablet/image-graphic-design.jpg')",
        "graphic-design-desktop":
          "url('@/assets/home/desktop/image-graphic-design.jpg')",
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
