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
        // New Light Mode Color Palette - Ocean Blue Theme
        'ocean': {
          50: '#f0feff',     // Çok açık mavi (96D2D9'dan türetilmiş)
          100: '#e0fcff',    // Açık mavi
          200: '#96D2D9',    // #96D2D9 - En açık
          300: '#3FA8BF',    // #3FA8BF - Açık mavi
          400: '#03738C',    // #03738C - Orta mavi
          500: '#025373',    // #025373 - Koyu mavi
          600: '#012840',    // #012840 - En koyu
          700: '#011d2f',    // Daha koyu variant
          800: '#001520',    // Çok koyu variant
          900: '#000f15',    // Ultra koyu variant
        },
        // Light mode specific colors - Updated
        'neutral-soft': {
          50: '#f0feff',     // Ocean temelli açık
          100: '#e0fcff',    // Ocean temelli 
          200: '#96D2D9',    // Direkt palette rengi
          300: '#3FA8BF',    // Direkt palette rengi
          400: '#03738C',    // Direkt palette rengi
          500: '#025373',    // Direkt palette rengi
          600: '#012840',    // Direkt palette rengi
          700: '#011d2f',    // Koyu variant
          800: '#001520',    // Çok koyu variant
          900: '#000f15',    // Text için
        },
        // Light mode colors - Ocean Theme
        'light': {
          'bg': '#f0feff',        // Ocean-50 - Ana arka plan
          'bg-secondary': '#e0fcff', // Ocean-100 - İkincil arka plan
          'text': '#012840',      // Ocean-600 - Ana metin
          'text-secondary': '#025373', // Ocean-500 - İkincil metin
          'border': '#96D2D9',    // Ocean-200 - Kenarlıklar
          'accent': '#3FA8BF',    // Ocean-300 - Vurgu rengi
          'surface': '#96D2D9',   // Ocean-200 - Yüzeyler
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
      spacing: {
        '112': '28rem',   // 448px for very large logo widths
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
        '160': '40rem',   // 640px for extra large logo widths
      },
      height: {
        '15': '3.75rem',  // 60px for logo heights
        '18': '4.5rem',   // 72px for logo heights
        '20': '5rem',     // 80px for logo heights
        '22': '5.5rem',   // 88px for logo heights
        '24': '6rem',     // 96px for logo heights
        '26': '6.5rem',   // 104px for logo heights
        '30': '7.5rem',   // 120px for logo heights
        '42': '10.5rem',  // 168px for large logo heights
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

