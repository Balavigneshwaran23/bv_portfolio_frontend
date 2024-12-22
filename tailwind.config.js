/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Animations
      animation: {
        dash: 'dash 1.5s ease-in-out infinite',
        floating: 'float 3s ease-in-out infinite',
        bounceSmooth: 'bounceSmooth 0.8s ease-in-out infinite',
        hoverSpinScale: 'spinScale 0.8s ease-in-out',
      },

      // Keyframes
      keyframes: {
        dash: {
          '0%': { strokeDashoffset: '282.6' },
          '50%': { strokeDashoffset: '141.3', transform: 'rotate(45deg)' },
          '100%': { strokeDashoffset: '0', transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinScale: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.25) rotate(360deg)' },
        },
      },

      // Custom Colors
      colors: {
        orange1: '#FF7E00',
        dimorange: '#F97316',
        gray1: '#613F00',
        orange: {
          500: '#ff6a00',
        },
      },

      // Custom Font Families
      fontFamily: {
        logofont: ['"Great Vibes"', 'cursive'],
        boldfont: ['"Black Ops One"', 'sans-serif'],
        classicfont: ['"Cantata One"', 'serif'],
        displayfont: ['"DM Serif Display"', 'serif'],
        textfont: ['"DM Serif Text"', 'serif'],
        modernfont: ['"Do Hyeon"', 'sans-serif'],
        sportyfont: ['"Racing Sans One"', 'sans-serif'],
      },

      // Background Images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
};
