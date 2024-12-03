/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      // Existing animation and keyframes
      animation: {
        floating: "float 3s ease-in-out infinite", 
        bounceSmooth: 'bounceSmooth 0.8s ease-in-out infinite',
        hoverSpinScale: "spinScale 0.8s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinScale: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "100%": { transform: "scale(1.25) rotate(360deg)" },
        },
      },
      
      // Custom colors
      colors: {
        orange1: '#FF7E00',
        dimorange: '#F97316',
        gray1: '#613F00',
      },

      // Custom font families
      fontFamily: {
        logofont: ['"Great Vibes"', 'cursive'],
        boldfont: ['"Black Ops One"', 'sans-serif'],
        classicfont: ['"Cantata One"', 'serif'],
        displayfont: ['"DM Serif Display"', 'serif'],
        textfont: ['"DM Serif Text"', 'serif'],
        modernfont: ['"Do Hyeon"', 'sans-serif'],
        sportyfont: ['"Racing Sans One"', 'sans-serif'],
      },

      // Custom orange shades
      orange: {
        500: '#ff6a00',
      },

      // Custom background image
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
