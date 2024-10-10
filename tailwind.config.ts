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
        "green-dark": "#37523e",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(to bottom, #bbf7d0, #3f593f)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
