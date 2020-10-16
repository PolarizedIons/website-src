const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        tailwindcss(),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
            ? [
                  purgecss({
                      content: ['./src/**/*.html', './src/**/*.vue'],
                      defaultExtractor: (content) => {
                          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
                          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
                          return broadMatches.concat(innerMatches);
                      },
                  }),
              ]
            : []),
    ],
};
