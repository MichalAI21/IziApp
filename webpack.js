const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
  entry: {
    content: './src/content/index.js',
  },
  output: {
    filename: 'bundles/[name].js',
    path: path.join(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', './src'],
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.font\.js/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'webfonts-loader',
            options: { embed: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js)?$|\.(jsx)?$/,
        include: [path.join(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets',
              publicPath: 'assets',
            },
          },
        ],
      },
      {
        // polyfill process into sentence-splitter module to work in the browser
        test: /node_modules\/sentence-splitter\/lib\/(.*)\.js/,
        use: [
          {
            loader: 'imports-loader',
            options: {
              type: 'commonjs',
              imports: ['single process/browser process'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          to: path.join(__dirname, 'build'),
        },
      ],
    }),
    new GenerateJsonPlugin('manifest.json', require('./manifest')),
  ],
};
