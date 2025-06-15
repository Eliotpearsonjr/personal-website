/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media', // enables dark mode via class strategy
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if you're using the app directory
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  