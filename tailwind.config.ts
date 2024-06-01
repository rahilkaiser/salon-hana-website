import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
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
    backgroundImage: {
      'hero-pattern': "url('/images/background.png')",
    },
    fontFamily: {
      // serif: ['Merriweather', 'serif'],
       serif: ['Spectral+SC', 'serif'],
      // notoserif: ['"Noto Serif Display"', 'serif'],

    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
