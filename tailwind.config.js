/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const { createThemes } = require('tw-colors');
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
    },
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      }
    },
    extend: {
      fontSize: {
        '2xs': ['10px', '13px']
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        '.h1': {
          fontSize: '3rem',
          lineHeight: '3rem',
          fontWeight: config('theme.fontWeight.black')
        },
        '.h2': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: config('theme.fontWeight.black')
        },
        '.h3': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: config('theme.fontWeight.black')
        },
        '.text-large': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem'
        },
        '.text-medium': {
          fontSize: '1rem',
          lineHeight: '1.5rem'
        },
        '.text-small': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem'
        },
        '.text-smaller': {
          fontSize: '0.75rem',
          lineHeight: '1rem'
        },
        '.text-smallest': {
          fontSize: '0.625rem',
          lineHeight: '0.8125rem'
        },
        '.text-bold': { fontWeight: config('theme.fontWeight.bold') },
        '.text-label': { fontWeight: config('theme.fontWeight.medium'), letterSpacing: '.03rem' }
      });
    }),
    createThemes(
      {
        light: {
          neutral: {
            lowest: colors.white,
            lower: colors.stone[100],
            low: colors.stone[200],
            medium: colors.stone[400],
            hight: colors.stone[600],
            highter: colors.stone[700],
            hightest: colors.stone[950]
          },
          brand: {
            lowest: '#FFF5EC',
            lower: '#FFE8D3',
            low: '#FFAB6D',
            medium: '#FF3F03',
            hight: '#CC2802',
            highter: '#821E0C',
            hightest: '#460B04'
          },
          success: {
            lowest: colors.green[50],
            lower: colors.green[100],
            low: colors.green[300],
            medium: colors.green[500],
            hight: colors.green[700],
            highter: colors.green[900],
            hightest: colors.green[950]
          },
          danger: {
            lowest: colors.red[50],
            lower: colors.red[100],
            low: colors.red[300],
            medium: colors.red[500],
            hight: colors.red[700],
            highter: colors.red[900],
            hightest: colors.red[950]
          },
          warning: {
            lowest: colors.orange[50],
            lower: colors.orange[100],
            low: colors.orange[300],
            medium: colors.orange[500],
            hight: colors.orange[700],
            highter: colors.orange[900],
            hightest: colors.orange[950]
          }
        },
        dark: {
          neutral: {
            lowest: colors.white,
            lower: colors.stone[100],
            low: colors.stone[200],
            medium: colors.stone[400],
            hight: colors.stone[600],
            highter: colors.stone[700],
            hightest: colors.stone[950]
          },
          brand: {
            lowest: '#FFF5EC',
            lower: '#FFE8D3',
            low: '#FFAB6D',
            medium: '#FF3F03',
            hight: '#CC2802',
            highter: '#821E0C',
            hightest: '#460B04'
          },
          success: {
            lowest: colors.green[50],
            lower: colors.green[100],
            low: colors.green[300],
            medium: colors.green[500],
            hight: colors.green[700],
            highter: colors.green[900],
            hightest: colors.green[950]
          },
          danger: {
            lowest: colors.red[50],
            lower: colors.red[100],
            low: colors.red[300],
            medium: colors.red[500],
            hight: colors.red[700],
            highter: colors.red[900],
            hightest: colors.red[950]
          },
          warning: {
            lowest: colors.orange[50],
            lower: colors.orange[100],
            low: colors.orange[300],
            medium: colors.orange[500],
            hight: colors.orange[700],
            highter: colors.orange[900],
            hightest: colors.orange[950]
          }
        }
      },
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark'
        }
      }
    )
  ]
}

