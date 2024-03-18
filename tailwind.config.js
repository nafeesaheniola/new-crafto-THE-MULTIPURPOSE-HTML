/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('/src/images/slider.jpg')",
        'sectionbg': "url('/src/images/section-bg.jpg')",
        
      }
    },
  },
  plugins: [],
}