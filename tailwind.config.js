module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
	white: '#FFFFFF',
	black: '#000000',
	orange: '#FB7844',
	'orange-37': '#FB78445E',
	'orange-15': '#FB784426',
	'gray-dark': '#777777',
	'gray-light': '#9B9B9B',
	'gray-37': '#7777775E',
    },
    boxShadow: {
	pry: '0px -5px 25px rgba(0, 0, 0, 0.15)',
	sec: '0px 4px 43px rgba(251, 120, 68, 0.37)',
    },
    fontSize: {
	sm: ['0.813em', { lineHeight: '0.938em', letterSpacing: '0.055em'}],
	lg: ['1.25em', { lineHeight: '1.443em', letterSpacing: '0.055em'}],
	xl: ['1.563em', { lineHeight: '1.803em', letterSpacing: '0.055em'}],    
    },
    fontFamily: {
	montserrat: 'Montserrat, sans-serif',
	karla: 'Karla, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
