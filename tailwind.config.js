/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'display': ['Inter Display', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Brawex brand colors based on the blue logo
        'brawex': {
          50: '#eff9ff',
          100: '#dff2ff', 
          200: '#b8e8ff',
          300: '#78d6ff',
          400: '#2bb8ff', // Primary brand blue
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Soft warm colors for light mode
        'warm': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Light mode specific colors
        'neutral-soft': {
          50: '#fafbfc',
          100: '#f4f6f8',
          200: '#e8ebef',
          300: '#dce1e7',
          400: '#b8c5d1',
          500: '#94a6b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        // Light mode colors - Soft & Comfortable
        'light': {
          'bg': '#f7f8fb',
          'bg-secondary': '#f1f4f8',
          'text': '#1e293b',
          'text-secondary': '#475569',
          'border': '#e1e8ed',
        },
        // Dark mode colors
        'dark': {
          'bg': '#0f172a',
          'bg-secondary': '#1e293b',
          'text': '#f1f5f9',
          'text-secondary': '#94a3b8',
          'border': '#334155',
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

