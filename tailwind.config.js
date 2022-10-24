/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
      themes: [
        {
          mytheme: {
          
 "primary": "#a281e8",
          
 "secondary": "#5bd6d8",
          
 "accent": "#fcbfcf",
          
 "neutral": "#19161D",
          
 "base-100": "#E9E7E9",
          
 "info": "#4DA3E0",
          
 "success": "#188167",
          
 "warning": "#A68B08",
          
 "error": "#FA726B",
          },
        },
      ],
  },
   plugins: [require("daisyui")],
}
