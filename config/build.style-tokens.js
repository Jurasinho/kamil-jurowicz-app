const StyleDictionary = require('style-dictionary')
  .extend({
    source: ['src/style-tokens/**/*.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        builtPath: 'dist/style-tokens/scss/',
        files: [
          {
            destination: '_colors.scss',
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
