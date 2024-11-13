/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "12px": "12px",
        "32px": "32px",
        "40px": "40px",
      },
      padding: {
        "5px": "5px",
        "10px": "10px",
        "22px": "22px",
        "60px": "60px",
        "73px": "73px",
        "131.5px": "131.5px",
      },
      borderRadius: {
        "5px": "5px",
        "10px": "10px",
      },
      margin: {
        "5px": "5px",
        "18px": "18px",
        "33px": "33px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
