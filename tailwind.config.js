/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e84a5f',
          light: '#f8c8dc',
        },
        secondary: '#ffb6c1',
        accent: '#ff8ba7',
        cream: '#fffaf0',
        dark: '#4a4a4a',
        timeline: '#f9d5e5',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 9s ease-in-out infinite',
        floatFast: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
};