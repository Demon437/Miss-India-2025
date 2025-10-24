/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo Colors - Exact 4 colors
        oldGold: {
          50: '#fef8e8',
          100: '#fef0c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d6ac45', // Primary Old Gold
          600: '#c19a3a',
          700: '#a67f2f',
          800: '#8b6524',
          900: '#704b19',
        },
        celtic: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#b9e5b9',
          300: '#86d186',
          400: '#4db84d',
          500: '#1b3521', // Primary Celtic
          600: '#162a1a',
          700: '#111f13',
          800: '#0c140c',
          900: '#070a07',
        },
        ecruWhite: {
          50: '#fefefd',
          100: '#fefdfb',
          200: '#fdfbf7',
          300: '#fcf9f3',
          400: '#f7f6ef',
          500: '#f2f1da', // Primary Ecru White
          600: '#d9d8c4',
          700: '#c0bfae',
          800: '#a7a698',
          900: '#8e8d82',
        },
        korma: {
          50: '#fef7ed',
          100: '#fdeed6',
          200: '#fbd9ad',
          300: '#f8c484',
          400: '#f5af5b',
          500: '#81490f', // Primary Korma
          600: '#6d3c0c',
          700: '#592f09',
          800: '#452206',
          900: '#311503',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
