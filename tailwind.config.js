// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html','./src/**/*.{jsx,js}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
     
//     },
//   },
//   plugins: [],
// }

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Helvetica',
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        cool:{
          100: '#15191e'
        },
        test:{
          100:'#d7d7d7'
         
        },
        back:{
          100:'#1d232a'
        },
        bgk:{
          1:'#676767',
          2:'#c7c7c7',
          3:'#ECECEC',
          4:'#d8d8d8',
          5:'#0e9f6e',
          6:'#f0e7db'
        }
      },
      spacing: {
        88: '22rem',
      },
      
    },
   
  
  },
  plugins: [require("daisyui")],
  
};