/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pixelify Sans', 'sans-serif'],
        pixel: ['Pixelify Sans', 'sans-serif']
      },
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
} 