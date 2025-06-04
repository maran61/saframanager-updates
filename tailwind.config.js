/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        safra: {
          yellow: '#FFD700',
          dark: '#121212',
          darker: '#0A0A0A',
        },
      },
      boxShadow: {
        'glow': '0 0 10px rgba(255, 215, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};