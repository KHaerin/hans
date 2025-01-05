/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in the root directory
    "./src/**/*.{html,js}" // All HTML and JS files in the `src` folder and its subfolders
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welkam': "url('/images/welkam.jpg')"
      }
    },
  },
  plugins: [],
};