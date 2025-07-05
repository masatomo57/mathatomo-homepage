/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#d97706', // amber-600
        secondary: '#374151', // gray-700
        background: {
          main: '#f3f4f6', // gray-100
          tag: '#e5e7eb', // gray-200
          navbar: '#1f2937', // gray-800
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
