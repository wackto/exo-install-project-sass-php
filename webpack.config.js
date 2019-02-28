/* eslint-env node */
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = './assets/';

module.exports = {
  entry: {
    bundle: [path.resolve(src, 'js/index.js'), path.resolve(src, 'scss/global.scss')],
  },
  resolve: {
    modules: [path.resolve(src), path.resolve(`${src}js`), 'node_modules'],
    extensions: ['.js'],
  },
  output: {
    path: path.resolve('./public/build/'),//Edit here
    publicPath: '/public/build/',//Edit here
    filename: '[name].js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(`${src}js`),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(eot|ttf|woff2?|svg|png|jpe?g|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()],
            },
          },
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [

              ],
            },
          },
        ],
      },
    ],
  },
};
