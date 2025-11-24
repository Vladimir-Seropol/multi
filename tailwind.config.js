/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-primary", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(254, 89, 0, 1)",
        textGray: "rgba(153, 153, 153, 1)",
        textDark: "rgba(51, 51, 51, 1)",
        borderGray: "rgba(238, 238, 238, 1)",
      },
      borderRadius: {
        card: "20px",
        button: "12px",
      },
      boxShadow: {
        card: "0px 4px 25px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
}
