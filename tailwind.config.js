/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
