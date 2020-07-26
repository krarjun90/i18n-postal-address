/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const babelOptions = require('./babel.config')

const { NODE_ENV } = process.env

const mode = NODE_ENV || 'development'

module.exports = {
  context: path.join(__dirname, 'lib'),
  entry: './postal-address.ts',
  mode,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'postal-address.js',
    library: 'PostalAddress',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /.(j|t)s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
    ],
  },
}
