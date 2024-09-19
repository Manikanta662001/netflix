/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1050px",
      },
      colors: {
        "dark-grey": "rgb(25 25 25)",
        "header-color": "#e50914",
        "header-hover": "rgb(193, 17, 25);",
        "light-grey": "#5b5b5b",
        "card-color": "#1e162b",
        "error-color": "red",
        "dark-blue": "#191a3d",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(149deg,#192247 0%,#210e17 96.86%)",
      },
    },
  },
  plugins: [],
};
