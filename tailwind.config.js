/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['"./src/**/*.{html,ts}",'],
  theme: {
    extend: {
      opacity: {
        hovered: '0.08',
        focused: '0.12',
        disabled: '0.12',
        pressed: '0.10',
      },
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    createThemes(
      {
        dark: {
          primary: '#D9D9D9',
          secondary: '#AFAFAF',
          background: '#1E1E1E',
          text: '#FFFFFF'
        },
      },
      {
        strict: true,
      }
    )
  ],
  darkMode: 'class'
}

