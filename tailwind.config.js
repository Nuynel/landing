/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    './renderer/**/*.{html,js,ts,tsx}',
    './pages/**/*.{html,js,ts,tsx}',
    './src/**/*.{html,js,ts,tsx}'
  ],
  theme: {
    screens: {
      xs: '375px', // iPhone XS
      sm: '430px', // iPhone 14 Pro Max
      md: '768px', // iPad Mini (vertical orientation)
      lg: '1024px', // iPad Mini (horizontal orientation)
      xl: '1440px', // MacBook 13"
      xxl: '1920px'
    },
    extend: {
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      margin: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      colors: {},
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
        feature: ['Silkscreen', 'sans-serif']
      },
    },
  },
  plugins: [
    // require('tailwindcss-animated')
  ],
}

