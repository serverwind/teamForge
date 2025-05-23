/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkGrey: "#344472",
      grey: "#707070",
      lightGray: "#9C9C9C",
      lightestGrey: "#D1D1D1",
      lightestGrey1: "#F6F6F6",
      darkRed: "#C60E2E",
      red: "#E4163A",
      lightRed: "#FF5761",
      lightestRed: "FF768E",
      blue: "#344472",
      lightBlue: "#F5FBFF",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        gradientGray: "linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%)",
        chevron: "url('./src/assets/chevron.png')",
        remove: "url('./src/assets/remove.png')",
      },
      backgroundColor: {
        dark: "#303030",
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
