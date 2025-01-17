/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#F9FAFB",
        mainBackgroundColor: "#FFFFFF",
        columnBackgroundColor: "#FFFBEA",
      },
    },
  },
  plugins: [],
};
