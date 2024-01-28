/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xlsm: '200px',
        xsm: '300px',
        sm: '400px',
        md: '768px',
        lg: '1100px',
        xl: '1400px',

      },
    },
  },
  plugins: [],
};
