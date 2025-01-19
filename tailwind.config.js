import daisyui from 'daisyui';
import scrollbarHide from 'tailwind-scrollbar-hide';
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  fontFamily: {
    Poppins: ['Poppins', 'sans-serif']
  },
  backgroundImage: {
    heroImage: "url('assets/heroImage.svg')",
  },
  extend: {
 
    dropShadow: {
      '2xl': '0 6px 3px rgba(0, 0, 0, 0.15)',
    },
    colors: {
      primary: '#3A0CA3',
      mainText: '#0B090A',
      secondaryText: '#2B2B2B',
      color1: '#4361EE',
      color3:'808080'
    }
  },
};
export const plugins = [
  scrollbarHide,
  daisyui,
];