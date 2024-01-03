const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

module.exports = {
  mode: 'production',
  performance: {
    hints: false,
  },
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'host.microfrontend.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        movie: `movie@[movieUrl]/remoteEntry.js`,
        tvShow: `tvShow@[tvShowUrl]/remoteEntry.js`,
      },
      shared: {
        ...dependencies,
        react: { singleton: true, eager: true, requiredVersion: dependencies.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};
