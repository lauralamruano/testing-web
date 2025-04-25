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
        // redefining your “green-gradient” token as pure white:
        "green-dark": "#37523e",
        "green-gradient": "#ffffff",
      },
      backgroundImage: {
        // remove or leave only real gradients here
        // e.g. "green-gradient": "linear-gradient(to right, #37523e 0%, #78e08f 100%)"
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
