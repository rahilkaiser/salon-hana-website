import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A67097',
        secondary: '#DBD7DB',
        accent: '#F5F5F5',
        background: '#FFFFFF',
        border: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
export default config;
