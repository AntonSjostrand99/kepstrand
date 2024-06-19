import { Bungee } from "next/font/google";
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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-yellow': '#fca311',
        'custom-blue': '#14213d',
        'custom-black': '#000000',
        
      },
      fontFamily: {
        Bungee: ['Bungee', 'serif'],
        AmaticSC: ['Amatic SC', 'sans-serif'],
    
       },
    },
  },
  plugins: [],
};
export default config;
