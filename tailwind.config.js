/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'var(--color-orange)',
        'black-overlay': 'rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['56px', { lineHeight: '1.2' }],
        'heading-2': ['48px', { lineHeight: '1.2' }],
        'heading-3': ['40px', { lineHeight: '1.2' }],
        'heading-4': ['32px', { lineHeight: '1.2' }],
        'body-lg': ['18px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'body-xs': ['12px', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 20px rgba(253, 59, 59, 0.25)',
        'button-hover': '0 4px 20px rgba(253, 59, 59, 0.35)',
      },
      spacing: {
        'section': '70px',
        'container': '50px',
      },
      screens: {
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
} 