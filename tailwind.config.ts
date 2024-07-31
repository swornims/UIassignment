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
        customColor: "#3949AB",
      },
      spacing: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
      },
      boxShadow: {
        "3xl": "35px 0 60px -10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
