// Common Webpack configuration for the frontend and the backend
// Webpack documentation can be found at https://webpack.github.io/docs/

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

var appConfig = require('./config');

var webpackPlugins = [
  // define a global __PROD__ variable indicating if the application is
  // executed in production mode or not
  new webpack.DefinePlugin({
    __PROD__: appConfig.production,
    __WATCH__: appConfig.watch,
    __TEST__ : appConfig.test
  }),
  // When there are errors while compiling this plugin skips the emitting phase (and recording phase),
  // so there are no assets emitted that include errors.
  new webpack.NoEmitOnErrorsPlugin()

];

// Recommended webpack plugins when building the application for production  :
if (!appConfig.test) {
  webpackPlugins = webpackPlugins.concat([
    // Generate a JSON file in the build folder containing compilation statistics
    new StatsPlugin('stats.json', {
      chunkModules: true,
      source: false
    })
  ]);
}

if (appConfig.test) {
  webpackPlugins = webpackPlugins.concat([
    // Ensure that only a single chunk is generated for the unit tests bundle
    // that will be executed trough Karma.
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    // Ignore the fsevents module when bundling the unit tests to avoid a webpack warning about it
    new webpack.IgnorePlugin(/fsevents/)
  ]);
}

if (appConfig.production) {
  webpackPlugins = webpackPlugins.concat([
    // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    // You can pass an object containing UglifyJs options.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: true
    })
  ]);
}

module.exports = {
  webpackConfig: {
    // Developer tool to enhance debugging.
    // In production, a SourceMap is emitted.
    // In development, each module is executed with eval and //@ sourceURL
    devtool: appConfig.production ? '#source-map' : /*'eval',*/ 'cheap-module-source-map',

    resolve: {
      // Replace modules by other modules or paths.
      alias: {
        // alias the config file
        'config': path.resolve(__dirname, 'config.js')
      }
    },

    // common module loaders
    module: {
      rules: [
        // use babel loader in order to use es6 syntax in js files,
        // use ng-annotate loader to automatically inject angular modules dependencies
        // (explicit annotations are needed though with es6 syntax)
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              }
            },
          ]
        },
        // use json loader to automatically parse JSON files content when importing them
        {
          test: /\.json$/,
          use: [
            {
              loader: 'json-loader'
            }
          ]
        }
      ]
    },

    plugins: webpackPlugins
  },
  loadersOptions : {
    debug: !appConfig.production,
    options: {

    }
  }
};
