/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          brand: "#4B166E"
        },
        yellow: {
          brand: "#FFF200"
        },
        gold: {
          brand: "#D99A00"
        },
        ink: "#1F2937",
        mist: "#F8F9FC"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 41, 55, 0.10)"
      }
    }
  },
  plugins: []
};
