'use strict';

module.exports = {
  colors: {
    black: '#001100',
    red: '#007700',
    green: '#00BB00',
    yellow: '#007700',
    blue: '#009900',
    magenta: '#00BB00',
    cyan: '#005500',
    white: '#00FF00',
    lightBlack: '#005500',
    lightRed: '#007700',
    lightGreen: '#00BB00',
    lightYellow: '#007700',
    lightBlue: '#009900',
    lightMagenta: '#00BB00',
    lightCyan: '#005500',
    lightWhite: '#00FF00',
  },

  // Default
  backgroundColor: '#001100',
  foregroundColor: '#00BB00',
  cursorColor: '#00FF00',
  borderColor: 'transparent',

  // Accent color
  accentColor: '#00FF00',

  // Other
  inactiveTabTitleColor: 'rgba(0, 255, 0, 0.3)',
  activeTabTitleColor: '#00FF00',

  // css
  css: '',
  termCSS: `
  x-screen {
    background-color: transparent !important;
    text-shadow: 0 0 5px;
  }`,
};
