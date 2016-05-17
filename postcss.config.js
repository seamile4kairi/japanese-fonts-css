'use strict';

module.exports = {
  input:  'src/*.css',
  dir:    'dist',
  use:    [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-normalize-charset',
    'autoprefixer',
    'postcss-reporter'
  ],
  'postcss-import': {
    plugins: [
      require('postcss-import-url'),
      require('postcss-copy')({
        src:  './src',
        dest: './dist',
        template: file => {
          return `assets/${file.name}.${file.ext}`;
        },
        relativePath: (dir, file, result, opts) => {
          return opts.dest;
        }
      })
    ]
  },
  'postcss-custom-properties': {
    preserve: true
  },
  autoprefixer: {
    browsers: [
      '> 1% in JP'
    ]
  },
  'postcss-reporter': {
    clearMessages: true
  }
}
