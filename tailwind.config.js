module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-purple': '#0c0311',
        'accent-1': '#284B63',
        'accent-2': '#56A3A6',
        primary: '#AC3931',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
