var webpack = require('webpack');
var DeepMerge = require('deep-merge');

// Utility functions to merge an object into another
var deepmerge = DeepMerge(function(target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

var defaultConfig = require('./webpack.config.common');

var config = function(overrides) {
  return deepmerge(defaultConfig, overrides || {});
};

var frontendConfig = config(require('./webpack.config.frontend'));
frontendConfig.webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin(deepmerge(defaultConfig.loadersOptions, frontendConfig.loadersOptions)));

// Webpack configuration for the backend server application
var backendConfig = config(require('./webpack.config.backend'));
backendConfig.webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin(deepmerge(defaultConfig.loadersOptions, backendConfig.loadersOptions)));

module.exports = {
  // Webpack configuration for the frontend Web application
  frontendConfig: frontendConfig.webpackConfig,
  backendConfig: backendConfig.webpackConfig
};
