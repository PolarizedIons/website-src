/* eslint-disable global-require */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./src/tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};
