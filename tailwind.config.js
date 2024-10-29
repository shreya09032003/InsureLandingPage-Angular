/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#138f82',
        'hero-pattern':'#f3f9f8'
      }
    },
  },
  plugins: [],
}

