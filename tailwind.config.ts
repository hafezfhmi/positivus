import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191A23",
      },
      fontSize: {
        "h1-mob": "2.6875rem",
      },
    },
  },
  plugins: [],
};
export default config;
