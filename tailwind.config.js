/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      backgroundImage: {
        gradientColor: 'linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)'
      },
      colors: {
        primaryColor: '#091242',
        titleColor: '#1C1F35',
        paragraphColor: '#666C89',
        yellowColor: '#FFB629',
        whiteColor: '#FFFFFF',
        borderColor: '#273270',
        secondaryColor: '#111C55',
        secondaryYellowColor: '#F6B426',
        addonColor: '#041C3780',
        grayColor: '#E8E8E880',
        lineColor: '#D8D8D8',
        secondlineColor: '#D4D4D4',
        userColor: '#F4F4F4',
        inputColor: '#4E5683',
        buttonColor: '#23212A',
        footerColor: '#8388A7'  
      },
      container: {
        padding: {
          DEFAULT: '0.5rem',
          sm:'1rem'
        }
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: [],
}



