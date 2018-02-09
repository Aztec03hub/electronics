/*var globalBootStrapConfig = require('./bootstrap.config');
var fbCssLoader = 'style-loader';
var cssLoaders = 'css-loader!postcss-loader!less-loader';
var cssExtractLoader = require('extract-text-webpack-plugin').extract({
  fallback: fbCssLoader,
  loader: cssExtractLoader
});
globalBootStrapConfig.styleLoader = cssExtractLoader[0].loader +
                                    '?' + JSON.stringify(cssExtractLoader[0].options) +
                                    '!' + fbCssLoader + '!' + cssLoaders;
module.exports = globalBootStrapConfig;
//*/
