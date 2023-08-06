/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      orange: "#ec008c",
      "dark-grey": "#473C33",
      "light-grey": "#473C33",
      light: "#005BAA",
      "light-100": "#F7F7F7",
      brown: "#473C33",
      red: "#850000",
      black: "#000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": 'url("/hero.jpg")',
      },
    },
  },
  plugins: [],
};
