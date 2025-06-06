/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#45C9B1',
          light: '#8DDFD0',
          dark: '#38A491',
        },
        secondary: {
          DEFAULT: '#FFA64D',
          light: '#FFCB99',
          dark: '#FF8B1A',
        },
        background: {
          light: '#F8FCFC',
          DEFAULT: '#F0F7F7',
        },
        text: {
          dark: '#333333',
          DEFAULT: '#555555',
          light: '#777777',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};