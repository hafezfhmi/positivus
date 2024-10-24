import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        "p-dark": "#191A23",
        "p-green": "#B9FF66",
        "p-grey": "#F3F3F3",
      },
      fontSize: {
        h1: "3.75rem",
        h2: "2.5rem",
        h3: "1.875rem",
        h4: "1.25rem",
        "h1-mob": "2.6875rem",
        "h2-mob": "2.25rem",
        "h3-mob": "1.625rem",
        "h4-mob": "1.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
