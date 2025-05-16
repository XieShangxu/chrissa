/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8a2be2', // Purple
        },
        secondary: {
          DEFAULT: '#4169e1', // Royal Blue
        },
        accent: {
          DEFAULT: '#ff69b4', // Hot Pink
        },
        background: {
          DEFAULT: '#f8f9fa',
        },
        text: {
          DEFAULT: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '0 2px 10px rgba(0, 0, 0, 0.8)',
        'xl': '0 4px 15px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 2px 10px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-xl': {
          'text-shadow': '0 4px 15px rgba(0, 0, 0, 0.9)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}; 