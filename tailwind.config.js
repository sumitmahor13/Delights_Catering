/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./public/Assets/Login.jpg')",
        'signup': "url('./public/Assets/SignUp.jpg')",
        'frame': "url('./src/imges/TestimonialFrame.jpg')"
      },
    },
  },
  plugins: [],
}