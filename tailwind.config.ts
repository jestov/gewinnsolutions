import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('/img/bg-pattern.svg'), url('/img/climber.jpg')",
      },
      fontFamily: {
        clash: ["Clash Grotesk"],
        clashdisplay: ["Clash Display"],
        archivo: ["Archivo"],
      },
      aspectRatio: {
        vertical: "9 / 13",
      },
      colors: {
        primary: "#111111",
        secondary: "#040404",
        tertiary: "#B6B6B6",
        mainGray: "#B6B6B6",
        secondaryGray: "#C6C6C6",
      },
    },
  },
  plugins: [],
};
export default config;
