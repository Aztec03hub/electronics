// Gulp configuration for building a full stack javascript application (server + client)
// through the use of the awesome module bundler Webpack

var argv = require('minimist')(process.argv.slice(2));

if (argv['NODE_ENV'] != null) {
  process.env.NODE_ENV = argv['NODE_ENV'];
}

// determine if we are in production mode by checking the value of the NODE_ENV environment variable
var appConfig = require('./config');
var webpackConfigs = require('./webpack-configs');

var frontendConfig = webpackConfigs.frontendConfig;
var backendConfig = webpackConfigs.backendConfig;

// require needed node modules
var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var colors = require('colors');
var del = require('del');
var fs = require('fs');
var forever = require('forever');

// Modules required to create a progress bar adding some feedback
// to each compilation performed by webpack
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var ProgressBar = require('progress');

// dependencies only needed in development mode
if (!appConfig.production) {

  // nodemon for automatically restart the server when its source files
  // have changed
  var nodemon = require('nodemon');
  // webpack-dev-server for hot reloading of the web application when its source files
  // changed
  var WebpackDevServer = require('webpack-dev-server');

//  var KarmaServer = require('karma').Server;

  var gulpMocha = require('gulp-mocha');
}

var buildError = false;

// Callback function called when webpack has terminated a build process
function onBuild(done) {
  return function(err, stats) {
    if (err) {
      buildError = true;
      console.log(err.red);
    } else {
      buildError = buildError || stats.compilation.errors.length > 0;
      console.log(stats.toString({
        colors: true
      }));
    }
    if (done) {
      done();
    }
  }
};

// Display a progress bar in the console output when compiling a webpack project
function webpackProgress(compiler, headingMessage) {
  var bar = new ProgressBar(' '+ headingMessage + ' [:bar] :percent : :message', {
    complete: '=',
    incomplete: ' ',
    width: 50,
    total: 100
  });
  var lastPercentage = 0;
  compiler.apply(new ProgressPlugin(function(percentage, msg) {
    if (percentage > lastPercentage) {
      bar.update(percentage, {'message' : msg});
      lastPercentage = percentage;
    } else {
      bar.update(lastPercentage, {'message' : msg});
    }
    if (lastPercentage === 1) {
      lastPercentage = 0;
    }
  }));
}

// ===================================================================================

// Gulp task to build the frontend bundle
gulp.task('frontend-build', function(done) {
  // First, clean the previous frontend build
  del(['build/client/**/*']);
  var compiler = webpack(frontendConfig);
  webpackProgress(compiler, 'Compiling frontend');
  compiler.run(onBuild(done));
});

// Gulp task to start a Webpack development server to get hot reloading
// of the frontend when source files change
gulp.task('frontend-watch', function(done) {
  // First, clean the previous frontend build
  del(['build/client/**/*']);

  var initialCompile = true;
  var compiler = webpack(frontendConfig);
  webpackProgress(compiler, 'Compiling frontend');
  compiler.plugin('done', function(stats) {
    buildError = stats.compilation.errors.length > 0;
    if (initialCompile) {
      console.log(('Webpack Dev Server listening at localhost:' + appConfig.ports.devServer).green.bold);
      initialCompile = false;
      done();
    }
  });

  new WebpackDevServer(compiler, {
    contentBase: 'build/client',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(appConfig.ports.devServer, 'localhost', function(err, result) {
    if (err) {
      console.log(err);
    }
  });

});

// ===================================================================================

// Gulp task to build the backend bundle
gulp.task('backend-build', ['frontend-build'], function(done) {
  // First, clean the previous backend build
  del(['build/server/**/*']);
  var compiler = webpack(backendConfig);
  webpackProgress(compiler, 'Compiling backend');
  compiler.run(onBuild(done));
});

// Gulp task to watch any changes on source files for the backend application.
// The server will be automatically restarted when it happens.
gulp.task('backend-watch', ['frontend-watch'], function(done) {
  // First, clean the previous backend build
  del(['build/server/**/*']);
  var firedDone = false;
  var compiler = webpack(backendConfig);
  webpackProgress(compiler, 'Compiling backend');
  compiler.watch(100, function(err, stats) {
    onBuild()(err, stats);
    if (!firedDone) {
      firedDone = true;
      done();
    }
    nodemon.restart();
  });
});

// ===================================================================================

// Gulp task to build the frontend and backend bundles
gulp.task('build', ['backend-build']);

// Gulp task to start the application in development mode :
// hot reloading of frontend + automatic restart of the backend if needed
gulp.task('watch', ['backend-watch'], function() {
  // Don't start the express server as there was some errors during the webpack compilation
  if (buildError) process.exit();
  var firstStart = true;
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/server/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    if (firstStart) {
      console.log('Starting express server !'.green.bold);
      firstStart = false;
    } else {
      console.log('Restarting express server !'.green.bold);
    }
  });
});

var serverMonitor = null;

// Gulp task to start the application in production mode :
// the server is launched through the forever utility.
// It allows to automatically restart it when a crash happens.
gulp.task('run', ['build'], function(done) {
  // Don't start the express server as there was some errors during the webpack compilation
  if (buildError) process.exit();

  serverMonitor = new(forever.Monitor)('build/server/backend.js', {
    'silent': false
  });

  serverMonitor.on('restart', function() {
    console.error('Forever restarting server script attempt #' + serverMonitor.times);
  });

  serverMonitor.on('exit:code', function(code) {
    console.error('Forever has detected server script exited with code ' + code);
  });

  serverMonitor.start();
  forever.startServer(serverMonitor);

});

// ===================================================================================

// Gulp task that run the frontend unit tests through karma then exit
//gulp.task('test-frontend', function (done) {
//  new KarmaServer({
//    configFile: __dirname + '/karma.config.frontend.js',
//    singleRun: true
//  }, function() {
//    done();
//    process.exit();
//  }).start();
//});

// Gulp task to build the backend unit tests bundle
//gulp.task('test-backend-build', function(done) {
//  // First, clean the previous backend uni tests build
//  del(['build/server-tests/**/*']);
//  var compiler = webpack(backendConfig);
//  webpackProgress(compiler, 'Compiling backend tests');
//  compiler.run(onBuild(done));
//});

// Gulp task that run the backend unit tests through mocha then exit
//gulp.task('test-backend', ['test-backend-build'], function() {
//  gulp.src('build/server-tests/backend-tests.js', {read: false})
//      .pipe(gulpMocha({reporter: 'nyan'}))
//      .once('error', function() {
//        process.exit(1);
//      })
//      .once('end', function() {
//        process.exit();
//      });
//});

// ===================================================================================

// Gulp task to beautify js source files trough js-beautify
// Configuration can be found in the .jsbeautifyrc file

var prettify = require('gulp-jsbeautifier');

var paths = {
  frontendScripts: ['src/client/**/*.js'],
  backendScripts: ['src/server/**/*.js'],
};

gulp.task('beautify-js', function() {
  gulp.src(paths.frontendScripts.concat(paths.backendScripts), {
      base: './'
    })
    .pipe(prettify({
      config: path.join(__dirname, '.jsbeautifyrc'),
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest('./'))
});

// ===================================================================================

// Ensure that all child processes are killed when hitting Ctrl+C in the console
process.on('SIGINT', function() {
  if (serverMonitor) {
    serverMonitor.child.kill('SIGTERM');
  }
  process.exit();
});
