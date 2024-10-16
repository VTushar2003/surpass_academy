/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        tprimary: "#685F78",
        tsecondary: "#FF4667",
        tthird : "#002058"
      },
    },
  },
  plugins: [],
};
