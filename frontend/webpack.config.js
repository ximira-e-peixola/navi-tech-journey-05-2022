const webpack = require('webpack')
const path = require('path')

const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: './dist'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    fallback: {
      fs: false,
      os: false,
      path: false,
      process: false
    }
  },
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        // relative path is from src
        { from: './src/assets/img/favicon.ico' } // <- your path to favicon
      ]
    })
  ]
}

module.exports = config
