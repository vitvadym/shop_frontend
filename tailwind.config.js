/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      accent: '#4219D0',
      secondaryAccent: '#F4BA47',
      primary: '#0F0F11',
      secondary: '#89939A',
      elements: '#E2E6E9',
      red: '#EB5757',
      green: '#27AE60',
      blue: '#0000FF',
      white: '#FFFFFF',
      spaceblack: '#505150',
      black: '#000000',
      pink: '#ff49db',
      yellow: '#FFFF00',
      gold: '#FFD700',
      rosegold: '#E0BFB8',
      sierrablue: '#BFDAF7',
      graphite: '#4B4E53',
      coral: '#FF7F50',
      purple: '#7e5bef',
      midnight: '#000E34',
      spacegray: '#808080',
      silver: '#C0C0C0',
      midnightgreen: '#004953',
    },
  },
  safelist: [
    {
      pattern: /^bg-/,
    },
  ],

  plugins: [],
};
