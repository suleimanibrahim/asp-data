import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        'project-bg': "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://blog.axway.com/wp-content/uploads/2019/07/GettyImages-1156783188-1.jpgAPI-Mashup-1.jpg')",
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderDotted: {
          '0%': { 'border-style': 'dotted' },
          '50%': { 'border-style': 'solid' },
          '100%': { 'border-style': 'dotted' },
        },
      },
      animation: {
        rotate: 'rotate 2s linear infinite',
        borderDotted: 'borderDotted 1s infinite',
      },
      boxShadow: {
        'custom': 'rgba(1, 1, 1, 0.05) 1px 1px 5px 0px',
      },
      fontFamily: {
        sans: ["var(--inter-font)"],
        migra: "var(--migra-font)",
        archivo: ['"Archivo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
