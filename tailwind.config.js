/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#155e75',
          light: '#0e7490',
        },
        secondary: {
          DEFAULT: '#064e3b',
          light: '#065f46',
        },
        accent: {
          DEFAULT: '#fbbf24',
          light: '#fcd34d',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4861347/pexels-photo-4861347.jpeg')",
      }
    },
  },
  plugins: [],
};