/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    textColor: (theme) => theme('colors'),
    extend: {
      fontFamily: {
        sans: ['Varela Round', 'sans-serif']
      },
      colors: {
        primary: {
          lighter: '#41ba7f',
          light: '#29b16f',
          DEFAULT: '#12A960',
          dark: '#109856',
          darker: '#0e874c'
        },
        secondary: {
          lighter: '#ffbb32',
          light: '#ffb319',
          DEFAULT: '#FFAB00',
          dark: '#e59900',
          darker: '#cc8800'
        },
        info: {
          lighter: '#D0F2FF',
          light: '#74CAFF',
          DEFAULT: '#1890FF',
          dark: '#0C53B7',
          darker: '#04297A'
        },
        success: {
          lighter: '#E9FCD4',
          light: '#AAF27F',
          DEFAULT: '#54D62C',
          dark: '#229A16',
          darker: '#08660D'
        },
        warning: {
          lighter: '#FFF7CD',
          light: '#FFE16A',
          DEFAULT: '#FFC107',
          dark: '#B78103',
          darker: '#7A4F01'
        },
        error: {
          lighter: '#FFE7D9',
          light: '#FFA48D',
          DEFAULT: '#FF4842',
          dark: '#B72136',
          darker: '#7A0C2E'
        },
        scale: {
          100: '#fbfcfd',
          200: '#f8f9fa',
          300: '#f1f3f5',
          400: '#eceef0',
          500: '#e6e8eb',
          600: '#dfe3e6',
          700: '#d7dbdf',
          800: '#c1c8cd',
          900: '#889096',
          1000: '#7e868c',
          1100: '#687076',
          1200: '#11181c'
        }
      }
    }
  },
  plugins: []
}
