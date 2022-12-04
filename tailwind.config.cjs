/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.8rem',
        sm: '1.5rem',
        lg: '2.8rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
