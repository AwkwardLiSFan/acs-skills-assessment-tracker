/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
const { createThemes } = require('tw-colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'bg-card-one',
    'bg-card-two',
    'bg-card-three',
    'bg-card-four'
  ],
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
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    createThemes(
      {
        dark: {
          primary: '#D9D9D9',
          'on-primary': '#1E1E1E',
          secondary: '#AFAFAF',
          background: '#141312',
          text: '#FFFFFF',
          'card-one': '#262626',
          'card-two': '#343434',
          'card-three': '#424242',
          'card-four': '#585858'
        },
      },
      {
        strict: true,
      }
    )
  ],
  darkMode: 'class',
};

