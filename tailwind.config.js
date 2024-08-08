/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        papper: "url:('/src/assets/bg-papper.jpg')",
      },
    },
  },
  plugins: [],
};
