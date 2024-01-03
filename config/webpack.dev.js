const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../package.json');

const devConfig = {
  mode: 'development',
  performance: {
    hints: false,
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        tvshow: 'tvshow@http://localhost:3002/remoteEntry.js',
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
  ],
};

module.exports = merge(commonConfig, devConfig);
