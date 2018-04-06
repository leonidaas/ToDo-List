const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.join(__dirname, '..', 'public');
const entryPath = path.join(__dirname, '..', 'src');

module.exports = {
  entry: {
    app: path.resolve(entryPath) + '/index.js'
  },
  output: {
    path: path.resolve(distPath),
    filename: 'js/bundle.js',
    publicPath: '/public'
  },
  mode: 'development',
  module: {
    rules: [
     {
       test: /\.jsx?$/,
       use: ['babel-loader'],
       exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /favicon\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'favicon.[ext]'
            }
          }
        ]
      },
      {
        type: 'javascript/auto',
        test: /manifest\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'manifest.[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'css/main.css'
      }),
      new HtmlWebpackPlugin({
          favicon: 'src/favicon.ico'
      })
  ]
};
