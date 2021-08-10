module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          'very-dark-desaturated': 'hsl(238, 29%, 16%)',
          soft: 'hsl(240, 73%, 65%)',
          'very-dark-grayish': 'hsl(237, 12%, 33%)',
          'dark-grayish': 'hsl(240, 6%, 50%)',
          'light-grayish': 'hsl(240, 5%, 91%)',
        },
        red: {
          soft: 'hsl(14, 88%, 65%)',
        },
        violet: {
          soft: 'hsl(273, 75%, 66%)',
        },
      },
      fontFamily: {
        'kumbh-sans': 'Kumbh Sans, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
