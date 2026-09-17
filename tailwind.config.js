/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#101828', lime: '#d7ff45', orange: '#ff6b35' },
      fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'], display: ['var(--font-space)', 'Arial Black', 'sans-serif'] },
      boxShadow: { glow: '0 0 40px rgba(215,255,69,.24)' }
    },
  },
  plugins: [],
};
