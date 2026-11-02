/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D18',
          900: '#0A1628',
          850: '#0E1E36',
          800: '#142948',
          700: '#1E3A63',
          600: '#2A4E82',
        },
        ivory: {
          50: '#FCFBF7',
          100: '#F7F5EE',
          200: '#EFECE1',
          300: '#E2DECD',
          400: '#C7C1AD',
        },
        emerald: {
          850: '#054737',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
        },
        gold: {
          700: '#B45309',
          600: '#D97706',
          500: '#F59E0B',
          400: '#FBBF24',
          300: '#FCD34D',
          100: '#FEF3C7',
          50: '#FFFBEB',
        },
        stone: {
          850: '#21201D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(10, 22, 40, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(10, 22, 40, 0.07)',
        'soft-lg': '0 16px 36px -6px rgba(10, 22, 40, 0.10)',
        'card-hover': '0 20px 40px -8px rgba(10, 22, 40, 0.12)',
      }
    },
  },
  plugins: [],
}
