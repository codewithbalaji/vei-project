/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'colorChange': 'colorChange 3s linear infinite',
        marquee: 'marquee 15s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #e50042, #f56fc9 0, #28a3f7 0, rgba(245,64,113,.701) 0, #b7b5e8 63%, #729be4 100%, rgba(236,50,50,.648) 0)',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#22c55e' },   // green-500
          '50%': { color: '#f43f5e'  },  // blue-500
          '100%': { color: '#f59e0b' }, // yellow-500
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}