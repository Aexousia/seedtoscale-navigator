/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accel: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#F5F5F5',
        }
      },
      fontFamily: {
        'suisse': ['Suisse Intl', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
