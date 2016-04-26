'use strict';

module.exports = {
  input:  'src/*.css',
  dir:    'dist',
  use:    [
    'postcss-import',
    'postcss-import-url',
    'postcss-custom-properties',
    'postcss-normalize-charset',
    'autoprefixer',
    'postcss-reporter'
  ],
  'postcss-import': {
    plugins: [
      require('stylelint')
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
