// Webpack configuration for the frontend Web application

var path = require('path');
var webpack = require('webpack');

var appConfig = require('./config');

// the extract-text-webpack-plugin for extracting stylesheets in a separate css file
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

// require CSS autoprefixer for PostCSS
var autoprefixer = require('autoprefixer');

// resolve path to minified angular dist
var pathToAngular = path.resolve(__dirname, 'node_modules/angular/angular.min.js');
//var pathToAngular = path.resolve(__dirname, 'node_modules/angular/angular.js');

// Following Commented is ORIGINAL
/*
var cssLoaders = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: function() {
        return [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ];
      }
    }
  }
];

var lessLoaders = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: function() {
        return [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ];
      }
    }
  },
  {
    loader: 'less-loader'
  }
];//*/

const ExtractCSS = new ExtractTextPlugin({
    filename: '[name].vendor.css'
});

const ExtractSASS = new ExtractTextPlugin({
    filename: '[name].css'
});

// extract css in non watch mode (don't extract in watch mode as we want hot reloading of css)
if (!appConfig.watch) {
// Following Commented is ORIGINAL
/*  cssLoaders = ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: 'css-loader!postcss-loader'
               });

  lessLoaders = ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader!postcss-loader!less-loader'
                });//*/

}

// require the html-webpack-plugin for automatic generation of the index.html file
// of the web application
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var webpackPlugins = [
  // Automatically loaded modules available in all source files of the application
  // (no need to explicitely import them)
  new webpack.ProvidePlugin({
    '$': 'jquery',
    jquery: 'jquery',
    'jQuery': 'jquery',
    'window.jQuery': 'jquery',
    "window.$": "jquery",
    bootstrap: 'bootstrap',
    '_': 'lodash'
  })
];

if (!appConfig.test) {
  let htmlConfig = {
    template: 'src/client/_index.ejs',
    //filename: '../../src/client/index.html',
    //filename: 'client/index.html',
    filename: 'index.html',
    alwaysWriteToDisk: true
  };

  webpackPlugins = webpackPlugins.concat([
    // Explicitely generates the vendors bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    }),

    // Activate
    ExtractCSS,
    ExtractSASS,

    // Copy assets folder
    new CopyWebpackPlugin([{
      from: 'src/client/assets',
      to: 'assets'
    }]),

    // Automatically generate the index.html file including all webpack generated assets
    new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackHarddiskPlugin()
  ]);
}

if (appConfig.watch) {
  webpackPlugins = webpackPlugins.concat([
    // Need to use that plugin in development mode to get hot reloading on source files changes
    new webpack.HotModuleReplacementPlugin({
      quiet: true
    })
  ]);
}

if (!appConfig.watch && !appConfig.test) {
  webpackPlugins = webpackPlugins.concat([
    // Following Commented is ORIGINAL
    /*// Extract stylesheets to separate CSS file in production mode
    new ExtractTextPlugin({
      filename: appConfig.production ? '[name].[contenthash].css' : '[name].css',
      disable: false,
      allChunks: true
    })//*/
  ]);
}

module.exports = {
  webpackConfig: {
    // Cache generated modules and chunks to improve performance for multiple incremental builds.
    cache: true,
    resolve: {
      // Replace modules by other modules or paths.
      alias: {
        // set angular to the minified dist for faster build
        'angular': pathToAngular,

        // define aliases for jquery-ui modules in order to use gridstack with freshly released jquery-ui 1.12
        /*'jquery-ui/core': path.resolve(__dirname, 'node_modules/jquery-ui/ui/core.js'),
        'jquery-ui/data': path.resolve(__dirname, 'node_modules/jquery-ui/ui/data.js'),
        'jquery-ui/disable-selection': path.resolve(__dirname, 'node_modules/jquery-ui/ui/data.js'),
        'jquery-ui/focusable': path.resolve(__dirname, 'node_modules/jquery-ui/ui/focusable.js'),
        'jquery-ui/form': path.resolve(__dirname, 'node_modules/jquery-ui/ui/form.js'),
        'jquery-ui/ie': path.resolve(__dirname, 'node_modules/jquery-ui/ui/ie.js'),
        'jquery-ui/keycode': path.resolve(__dirname, 'node_modules/jquery-ui/ui/keycode.js'),
        'jquery-ui/labels': path.resolve(__dirname, 'node_modules/jquery-ui/ui/labels.js'),
        'jquery-ui/jquery-1-7': path.resolve(__dirname, 'node_modules/jquery-ui/ui/jquery-1-7.js'),
        'jquery-ui/plugin': path.resolve(__dirname, 'node_modules/jquery-ui/ui/plugin.js'),
        'jquery-ui/safe-active-element': path.resolve(__dirname, 'node_modules/jquery-ui/ui/safe-active-element.js'),
        'jquery-ui/safe-blur': path.resolve(__dirname, 'node_modules/jquery-ui/ui/safe-blur.js'),
        'jquery-ui/scroll-parent': path.resolve(__dirname, 'node_modules/jquery-ui/ui/scroll-parent.js'),
        'jquery-ui/tabbable': path.resolve(__dirname, 'node_modules/jquery-ui/ui/tabbable.js'),
        'jquery-ui/unique-id': path.resolve(__dirname, 'node_modules/jquery-ui/ui/unique-id.js'),
        'jquery-ui/version': path.resolve(__dirname, 'node_modules/jquery-ui/ui/version.js'),
        'jquery-ui/widget': path.resolve(__dirname, 'node_modules/jquery-ui/ui/widget.js'),
        'jquery-ui/widgets/draggable': path.resolve(__dirname, 'node_modules/jquery-ui/ui/widgets/draggable.js'),
        'jquery-ui/widgets/droppable': path.resolve(__dirname, 'node_modules/jquery-ui/ui/widgets/droppable.js'),
        'jquery-ui/widgets/mouse': path.resolve(__dirname, 'node_modules/jquery-ui/ui/widgets/mouse.js'),
        'jquery-ui/widgets/resizable': path.resolve(__dirname, 'node_modules/jquery-ui/ui/widgets/resizable.js'),//*/

        // Other
        'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
        'jquery-ui': path.resolve(__dirname, 'node_modules/jquery-ui-dist/jquery-ui.js'),
        'jquery.easing': path.resolve(__dirname, 'node_modules/jquery.easing/jquery.easing.1.3.js'), // KEEP THIS VERSION
        'jquery.transit': path.resolve(__dirname, 'node_modules/jquery.transit/jquery.transit.js'),
        'moment': path.resolve(__dirname, 'node_modules/moment/moment.js'),
        //'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js'),
        'bootstrap-dropdown': path.resolve(__dirname, 'node_modules/bootstrap/js/dropdown.js'),
        //'bootstrap-select': path.resolve(__dirname, 'node_modules/bootstrap-select/dist/js/bootstrap-select.js'),
        //'bootstrap-switch': path.resolve(__dirname, 'node_modules/bootstrap-switch/dist/js/bootstrap-switch.js'),
        //'bootstrap-tagsinput': path.resolve(__dirname, 'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js'),
        'angular-ui-bootstrap': path.resolve(__dirname, 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'),
        'angular-progress-button-styles': path.resolve(__dirname, 'node_modules/angular-progress-button-styles-npm/dist/angular-progress-button-styles.min.js'),
        // Other-Non-Core
        'rangy-core': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-core.js'),
        'rangy-classapplier': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-classapplier.js'),
        'rangy-highlighter': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-highlighter.js'),
        'rangy-selectionsaverestore': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-selectionsaverestore.js'),
        'rangy-serializer': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-serializer.js'),
        'rangy-textrange': path.resolve(__dirname, 'node_modules/rangy/lib/rangy-textrange.js'),
        'textAngular-sanitize': path.resolve(__dirname, 'node_modules/textangular/dist/textAngular-sanitize.js'),
        'ngSanitize': path.resolve(__dirname, 'node_modules/textangular/dist/textAngular-sanitize.js'),
        'textAngularSetup': path.resolve(__dirname, 'node_modules/textangular/dist/textAngularSetup.js'),
        'textAngular': path.resolve(__dirname, 'node_modules/textangular/dist/textAngular.umd.js'),
        'xeditable': path.resolve(__dirname, 'node_modules/angular-xeditable/dist/js/xeditable.js'),
        'smart-table': path.resolve(__dirname, 'node_modules/angular-smart-table/dist/smart-table.js'),

        // CSS Aliases
        //'bootstrap-css': path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
        //'bootstrap-select-css': path.resolve(__dirname, 'node_modules/bootstrap-select/dist/css/bootstrap-select.css'),
        //'bootstrap-switch-css': path.resolve(__dirname, 'node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css'),
        //'bootstrap-tagsinput-css': path.resolve(__dirname, 'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'),
      },
      // The root directory (absolute path) that contains the application modules,
      // enables to import modules relatively to it
      modules: [
      path.resolve(__dirname, 'src/client'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve('./')
      ]
    },
    // Application entry points
    entry: {
      // Generate a vendors bundle containing external modules used in every part of the application.
      // It is a good practice to do so as the code it contains is unlikely to change during the application lifetime.
      // This will allow you to do updates to your application, without requiring the users to download the vendors bundle again
      // See http://dmachat.github.io/angular-webpack-cookbook/Split-app-and-vendors.html for more details
      vendors: [
        // Following are mine...
        'jquery',
        'jquery-ui',
        'jquery.easing',
        'jquery.transit',
        'bootstrap',
        'bootstrap-dropdown',
        'bootstrap-select',
        'bootstrap-switch',
        'bootstrap-tagsinput',
        //
        'angular',
        // Following are mine...
        'angular-animate',
        'angular-messages',
        'angular-aria',
        'angular-cookies',
        'angular-resource',
        'angular-ui-bootstrap',
        'angular-ui-sortable',
        '@uirouter/core',
        //
        '@uirouter/angularjs',
        //'gridstack/dist/gridstack.all',
        'lodash',
        'd3',
        //!appConfig.watch ? 'bootstrap-webpack!./bootstrap.config.extract.js' : 'bootstrap-webpack!./bootstrap.config.js', 'bootstrap_dropdowns_enhancement/dist/js/dropdowns-enhancement'
      ],
      // The frontend application entry point (bootstrapApp.js)
      // In development mode, we also add webpack-dev-server specific entry points
      app: (!appConfig.watch ? [] : ['webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:' + appConfig.ports.devServer
      ]).concat(['./src/client/app.js']),
      // Polyfills:
      polyfills: './src/client/polyfills.js',
    },
    // The output configuration of the build process
    output: {
      // Directory that will contain the frontend application assets
      // (except when using the webpack-dev-server in development as all generated files are stored in the dev-server memory)
      path: path.join(__dirname, 'build/client'),
      // Patterns of the names of the files to generate.
      // In production, we concatenate the content hash of each file for long term caching
      // See https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.rgsrbt29e
      filename: appConfig.production ? "[name].[chunkhash].js" : "[name].js",
      chunkFilename: appConfig.production ? "[id].[chunkhash].js" : "[id].js",
      pathinfo: true, // show module paths in the bundle, handy for debugging
      publicPath: '/'
    },
    // Specific module loaders for the frontend
    module: {
      rules: [
        // Load html files as raw strings, then run through ng-template loader for building the angular template cache
        {
          test: /\.html$/,
          exclude: /node_modules/,
          //exclude: /index\.html/,
          use: [{
              loader: 'ngtemplate-loader',
              options: 'relativeTo=' + (path.resolve(__dirname, './src/')) + '/'
            },{
              loader: 'raw-loader'
            }
          ]
        },

        // Add exports loader for angular
        {
          test: /angular\.min\.js$/,
          use: [{
              loader: 'exports-loader',
              options: 'angular'
          },{
              loader: 'exports-loader',
              options: 'window.angular'
          }]
        },

        // Add expose loader for jquery
        {
          test: require.resolve('jquery'),
          use: [{
              loader: 'expose-loader',
              options: 'jQuery'
          },{
              loader: 'expose-loader',
              options: '$'
          }]
        },

        // Following Commented is ORIGINAL
        /*// Load css files through the PostCSS preprocessor first, then through the classical css and style loader.
        // In production mode, extract all the stylesheets to a separate css file (improve loading performances of the application)
        {
          test: /\.css$/,
          use: cssLoaders
        },
        {
          test: /\.less$/,
          use: lessLoaders
        },//*/

        {
            // CSS LOADER for 'app.vendor.css'
            // Reference: https://github.com/webpack/css-loader
            // Allow loading css through js
            //
            // Reference: https://github.com/postcss/postcss-loader
            // Postprocess your css with PostCSS plugins
            // The array of loaders are processed in reverse order:
            // 1) postcss-loader
            // 2) css-loader: Parses the CSS into JavaScript and resolves any dependencies
            // 3) style-loader: Outputs our CSS into a <style> tag in the document
            // Original: use: ['raw-loader', 'css-loader', 'postcss-loader']
            test: /\.css$/,
            use: ExtractCSS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                        minimize: false,
                        modules: false,
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: function() {
                            return [
                                autoprefixer({
                                    browsers: ['last 2 versions']
                                })
                            ];
                        }
                    }
                }]
            }),
        },

        {
            // SASS LOADER for 'app.css'
            // Reference: https://github.com/jtangelder/sass-loader
            // The array of loaders are processed in reverse order:
            // 1) sass-loader: Transforms Sass into CSS
            // 2) css-loader: Parses the CSS into JavaScript and resolves any dependencies
            // 3) style-loader: Outputs our CSS into a <style> tag in the document
            // Original: 'raw-loader', 'sass-loader'
            //use: [ 'style-loader', 'css-loader', 'sass-loader'],
            // Via: https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/
            test: /\.(scss|sass)$/,
            use: ExtractSASS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                    }
                }, {
                    loader: 'resolve-url-loader',
                    options: {}
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        outputStyle: 'compact',
                        precision: 10,
                        sourceComments: false,
                    },
                }],
            }),
        },

        // Following is ORIGINAL
        // Loaders for the font files (bootstrap, font-awesome, ...)
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/font-woff',
                fallback: 'file-loader'
              }
            }
          ]
        }, //*/
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/octet-stream',
                fallback: 'file-loader'
              }
            }
          ]
        }, //*/
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
              }
            }
          ]
        }, //*/
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'image/svg+xml',
                fallback: 'file-loader'
              }
            }
          ]
        },//*/

        /*{
          test: /\.(png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader'
              }
            }
          ]
        },//*/

        {
            // ASSET LOADER
            // Reference: https://github.com/webpack/file-loader
            // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
            // You can add here any file extension you want to get copied to your output
            test: /\.(png|jpg|jpeg|gif)([\?]?.*)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]' // NOTE: Comment this out during 'dist' build ORIGINAL
                }
            }],
        },//*/

        /*{
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // where the fonts will go
              publicPath: '../' // override the default path
            }
          }]
        },//*/

      ],
      // Disable parsing of the minified angular dist as it is not needed and it speeds up the webpack build
      noParse: [new RegExp(pathToAngular)]
    },
    // to avoid errors when bundling unit tests
    node: {
      fs: "empty",
      // Following is Custom
      global: true,
      process: true,
      crypto: false,
      clearImmediate: false,
      setImmediate: false
    },
    // Webpack plugins used for the frontend
    plugins: webpackPlugins
  },
  loadersOptions: {
    options: {
      // CSS preprocessor configuration (PostCSS)
      /*postcss: [
        // use autoprefixer feature (enable to write your CSS rules without vendor prefixes)
        // see https://github.com/postcss/autoprefixer
        autoprefixer()
      ],//*/
    }
  }
};
