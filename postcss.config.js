'use strict';

module.exports = {
  input:  'src/japanese-fonts.css',
  dir:    'dist',
  use:    [
    'stylelint',
    'postcss-import',
    'postcss-import-url',
    'postcss-custom-properties',
    'cssnano',
    'postcss-reporter'
  ],
  'postcss-import': {
    plugins: [
      require('stylelint')
    ]
  },
  'postcss-url': {
    url: 'inline'
  },
  'postcss-custom-properties': {
    preserve: true
  },
  cssnano: {
    autoprefixer: {
      browsers: [
        '> 1% in JP'
      ]
    },
    core: (process.env.NODE_ENV === 'production'),
    discardComments: {
      remove: (comment) => { return !(process.env.NODE_ENV === 'production'); }
    }
  },
  'postcss-reporter': {
    clearMessages: true
  }
}
