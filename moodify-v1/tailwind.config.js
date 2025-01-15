/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        button: '#FEEF52',
        'button-border': '#000000',
        sadbg: '#CFE4FF',
        sadfont: '#3486CE',
        saddark:"#2082FF",
        happybg: '#FEEF52',
        happyfont: '#3677B0',
        happydark:'#FFEA00',
        angrybg: '#FF6969',
        angryfont: '#FCEE8E',
        angrydark: '#CF3C3C',
        lovebg: '#FE7FA1',
        lovefont: '#38ADA5',
        lovedark:'#F13465'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        praise: ['Praise', 'cursive'],
      },
      animation: {
        'pulsate-fwd': 'pulsate-fwd 2.5s ease-in-out infinite both',
        'text-pop-up-top': 'text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'card-pop-up': 'card-pop-up 0.3s ease-in-out both',
      },
      keyframes: {
        'pulsate-fwd': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        'text-pop-up-top': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'card-pop-up': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 8px 8px rgba(255, 217, 0, 0.49)' },
        },
      },
      backgroundImage: {
        'footer-pattern': "url('./images/footer-bg.png')",
      },
      boxShadow: {
        hard: '4px 4px 0px 0px black',
        hardbutton: '3px 3px 0px 0px black',
      },
    },
  },
  plugins: [],
};
