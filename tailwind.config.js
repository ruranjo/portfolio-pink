/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBackground: 'hsl(8, 56%, 95%)', // Define tu color de fondo personalizado aquí
        primary: 'hsl(11, 55%, 14%)',
        secondary: 'hsl(11, 42%, 74%)',
        textColor: 'hsl(26, 96%, 23%)',
      },
    },
  },
  plugins: [],
}

//