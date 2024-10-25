/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'arima':["Arima",'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
};
