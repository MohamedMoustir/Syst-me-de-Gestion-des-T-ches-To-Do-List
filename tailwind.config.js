/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.html", 

  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        custom: ['YourCustomFont', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}

