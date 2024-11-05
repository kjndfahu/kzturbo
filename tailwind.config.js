/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        xlbvp: "1600px",
        xl: "1500px",
        lgbvp: "1100px",
        lg: "900px",
        mdbvp: "700px",
        md: "500px",
        smbvp: "450px",
        sm: "380px"
      }
    },
  },
  plugins: [],
}