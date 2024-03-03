/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#767676",
        textColor: "#6D6D6D",
      },
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        dot: "url('/dot.png')",
        roundDot: "url('/rounddot.png')",
      },
    },
  },
  plugins: [],
};
