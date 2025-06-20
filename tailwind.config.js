module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F54A00",
        brandDark: "#0B254B",
        brandAccent: "#F54A00",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ["Hanken Grotesk", "sans-serif"],
      },
      animation: {
        scroll: "scroll 25s linear infinite",
        scrollReverse: "scrollReverse 25s linear infinite",
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
    },
  },
  plugins: [],
};
