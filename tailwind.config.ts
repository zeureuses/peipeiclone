import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#FF0000",
        customGreen: "#E2B11E",
        customWhite: "#fff",
        customBlack: "#000",
      },
      animation: {
        floating: "float 2s linear infinite",
        floatingRight: "floatRight 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
          "100%": { transform: "translateY(0)" },
        },
        floatRight: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
