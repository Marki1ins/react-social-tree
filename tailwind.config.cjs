/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      blue: '#0C8CE9',

      bege: '#FAF7FD',
      purple: '#BB99DD',

    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}
