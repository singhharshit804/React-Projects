/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-neumorphic': 'inset 8px 8px 16px #6b6b6b, inset -8px -8px 16px #ffffff',
        'outer-neumorphic': '8px 8px 16px #b8bec9, -8px -8px 16px #ffffff',
      }
    },
  },
  plugins: [],
};

