/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F54A00",
        white: "#FFFFFF",
        darkBlue: "#0B254B",
        lightBrand: "#FDC5AA",
        lightGray: "#6B7280",
        lightPink: "#FFF8F5",
        lightestPink: "#FBFBFB",
        lightestPinkTransparent: "#F54A0014",
        darkGray: "#111111",
        lightestGray: "#E3E8EA",
        offGray: "#EBEBEB",
        darkGray: "#1E1E1E",
        lightBlack: "#0A0A0A",
        gray: "#525252",
        darkestGray: "#374151",
        grayish: "#807E7E"
      },
      borderColor: {
        burntOrange: "#c43b00",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        scrollReverse: "scrollReverse 25s linear infinite",
        'spin-slow': 'spin 4s linear infinite',
      },
      transitionDuration: {
        600: "600ms",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      letterSpacing: {
        '-0.64': '-0.64px',
      },
    },
  },
}
