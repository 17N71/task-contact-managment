/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f6f6f6",
      },
      height: {
        "70h": "4.375rem",
      },
      maxWidth: {
        wsm: "21.5rem",
      },
    },
  },
  plugins: [],
};
