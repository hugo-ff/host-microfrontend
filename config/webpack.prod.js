const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        tvshow: `tvshow@${domain}/tvshow/remoteEntry.js`,
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

module.exports = merge(commonConfig, prodConfig);
