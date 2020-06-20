const StyleDictionary = require('style-dictionary')
  .extend({
    source: ['./src/**/*.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        builtPath: './dist/scss/',
        files: [
          {
            destination: './dist/scss/_colors.scss',
            format: 'scss/variables',
            filter: {
              type: 'color',
            },
          },
        ],
      },
    },
  });

StyleDictionary.buildAllPlatforms();

console.log('style-tokens built');
