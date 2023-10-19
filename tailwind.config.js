/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        // "border-t": "inset 0px 1px 0px #E5E5E5",
        "border-r": "inset -1px 0px 0px #E5E5E5",
        // "border-b": "inset 0px -1px 0px #E5E5E5",
        // "border-l": "inset 1px 0px 0px #E5E5E5",
        // card: "0 2px 1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
