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
      gray: "#C5C5C5",
      "gray-light": "#B7B5B3",
      light: "#005BAA",
      "light-100": "#F7F7F7",
      "white-light": "#CEE5F2",
      red: "#850000",
      "white-light-s": "#EDF2F4",
      black: "#000",
    },
    extend: {
      fontFamily: {
        bahn: ["var(--font-behan)"],
        b93: ["var(--font-ba93)"],
        kazy: ["var(--font-kazy)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": 'url("/hero2.jpeg")',
        "hero-image-mobile": 'url("/hero3.jpeg")',
      },
    },
  },
  plugins: [],
};
