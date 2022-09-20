const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env')

const config = {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true
      }
    })
  ]
};

module.exports = config;
