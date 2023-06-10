/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zareel: ["Great Vibes"],
        roboto: "Roboto",
        poppins: "Poppins",
      },
      screens: {
        sm: "375px",
        md: "734px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
