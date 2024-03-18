/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/images/slider.jpg')",
        sectionbg: "url('/images/section-bg.jpg')",
      },
    },
  },
  plugins: [],
};
