/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night'],
  },
};
