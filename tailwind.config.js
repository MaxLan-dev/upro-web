/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "the-bold-font": ["THE BOLD FONT", "sans-serif"],
        montserrat: [
          "Montserrat",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
        public: ["var(--font-sans)"],
      },
      colors: {
        "upro-green": "#2ae18e",
        "upro-green-dark": "#1fb574",
        "upro-text-primary": "#d7e4d7",
        "upro-text-secondary": "#b8c9b8",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
