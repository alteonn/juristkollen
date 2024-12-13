/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#646cea',
        secondary: {
          DEFAULT: 'hsl(238 30% 96%)',
          foreground: 'hsl(238 15% 30%)'
        },
        muted: {
          DEFAULT: 'hsl(238 20% 96%)',
          foreground: 'hsl(238 10% 45%)'
        },
        background: 'hsl(240 20% 98%)',
        foreground: 'hsl(238 15% 15%)',
        accent: '#646cea'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      boxShadow: {
        'glass': '0 0 20px rgba(100, 108, 234, 0.1)',
        'glass-hover': '0 0 30px rgba(100, 108, 234, 0.15)'
      }
    }
  },
  plugins: []
};