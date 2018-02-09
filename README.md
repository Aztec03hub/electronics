Stack Directory Structure:
root/
  src/
    client/
      article/
        article.config.js
        article.controller.js
        article.html
        index.js
      components/
        index.js
      config/
        app.config.js
        app.constants.js
        app.run.js
      home/
        home.config.js
        home.controller.js
        home.html
        index.js
      layout/
        app-view.html
        footer.component.js
        footer.html
        header.component.js
        header.html
        index.js
      profile/
        index.js
        profile.config.js
        profile.controller.js
        profile.html
      services/
        index.js
      app.css
      app.js
      index.ejs
    server/

/////////////
SublimeText RegEx:
-*/node_modules/*, -*/server/*, -ToDo.todo, -README.md, -package-lock.json, -package.json,-.jsbeautifyrc, -.jsbeautifyrc.orig,



/////////////
# Yet another full stack javascript boilerplate for building wep applications using gulp + webpack + bootstrap + angular + express

That repository contains the result of my experiments of using [webpack](https://github.com/webpack/webpack) for building a web application
using full stack javascript, i.e. a backend server application powered by [node.js](https://nodejs.org/en/) coupled to a frontend GUI application
executed in the browser. It aims to provide a state of the art workflow for building such applications
in an efficient way, from development to production.

A simple demo application using that workflow for its build process is provided  as an example:
  * its backend part is powered by the [express framework](http://expressjs.com/) for [node.js](https://nodejs.org/en/)
  * its frontend part is powered by [angular](https://angularjs.org/) and [bootstrap](http://getbootstrap.com/)

I used the [backend-with-webpack](https://github.com/jlongster/backend-with-webpack) project from [James Long](https://github.com/jlongster)
 as a starting point, thanks to him for that great work.

This is still a work in progress and is likely to evolve over time.

## Features

Below is a list of features offered by that workflow:

  * Use [gulp](http://gulpjs.com/) as a task runner for its simplicity of use
  * Use [webpack](https://webpack.github.io/) to bundle the backend and frontend parts of the application
  * Example of the [code splitting feature](https://webpack.github.io/docs/code-splitting.html) offered by [webpack](https://webpack.github.io/)
  * Automatically apply [jshint](http://jshint.com/) on all source files when building the application
  * [ECMAScript 6](http://es6-features.org/) (aka ES6 or ES2015) support thanks to [babel](https://babeljs.io/)
  * Development server for the frontend application with hot reloading (through [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html))
  * Automatic restart of the backend application in development mode (trough the use of [nodemon](http://nodemon.io/)
  by watching source files changes
  * Automatic styleheets extraction to external files through the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)
  (except when using the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as we want css hot reloading)
  * Production builds with [long term caching](https://webpack.github.io/docs/long-term-caching.html)
  and assets minification (through [UglifyJs](http://lisperator.net/uglifyjs/)).
  * Experiment [ES6](http://es6-features.org/) syntax with [angular](https://angularjs.org/) 1.x
  (in particular use classes for all [angular](https://angularjs.org/) components)
  * Use [webpack dynamic requires](https://webpack.github.io/docs/context.html) to ease the integration of new [angular](https://angularjs.org/) components
  * Dynamic loading of [angular](https://angularjs.org/) modules trough the use of [angular-ui-router](https://github.com/angular-ui/ui-router), [oclazyload](https://oclazyload.readme.io/) and [webpack bundle-loader](https://github.com/webpack/bundle-loader) : load web application components only when their use is requested (ideal when targetting mobile devices).
  * Unit tests for the frontend part of the application through the use of [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/). Those tests are also bundled by [webpack](https://webpack.github.io/).
  * Code coverage for the frontend unit tests thanks to [babel-istanbul](https://github.com/jmcriffey/babel-istanbul)
  * Unit tests for the backend part of the application using [Mocha](https://mochajs.org/), [should.js](https://github.com/shouldjs/should.js) and [supertest](https://github.com/visionmedia/supertest). Those tests are also bundled by [webpack](https://webpack.github.io/).
  * Optional use of [js-beautify](https://github.com/beautify-web/js-beautify) to prettify javascript source files

## Installation

To use it, just clone this repository and install the [npm](https://www.npmjs.com/) dependencies:

```shell
$ git clone https://github.com/anlambert/webpack-gulp-es6-angular-express
$ cd webpack-gulp-es6-angular-express
$ npm install
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run start-dev`.

* `build` - generate a minified production build with stylesheets extraction to the build folder.
* `build-dev` - generate a development build (no minification) to the build folder.
* `start` - build and start the application in production mode. Open up http://localhost:4000/ in your browser to see it in action.
* `start-dev` - build and start the application in development mode. No assets will be generated to the build/website folder
  as we use the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) in order to get hot reloading on source files changes.
  Open up http://localhost:4000/ in your browser to see it in action.
* `test-frontend` - execute the unit tests in [PhantomJS](http://phantomjs.org/) for the frontend part of the application by starting a [Karma](https://karma-runner.github.io/0.13/index.html) server. Code coverage is also computed when running that script, open `coverage/html/index.html` to look at the report.
* `test-backend` - execute the unit tests in for the backend part of the application trough [Mocha](https://mochajs.org/).
* `beautify` - beautify source code files (javascript only for the moment).

See what each script does by looking at the `scripts` section in [package.json](./package.json).

## References

Some useful references and repositories about working with [angular](https://angularjs.org/) and [webpack](https://github.com/webpack/webpack) I found by digging on the subject:

  * [Backend Apps with Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)
  * [Angular Webpack Cookbook](http://dmachat.github.io/angular-webpack-cookbook/)
  * [Single Page Modules with Webpack](http://dontkry.com/posts/code/single-page-modules-with-webpack.html)
  * [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.3ojwvxkul)
  * [Awesome AngularJS](https://github.com/gianarb/awesome-angularjs)
  * [Simple example on how to use Webpack, Angular and ocLazyLoad](https://github.com/voidberg/webpack-angularjs-lazyload)
  * [Lazy loading avec WebPack & AngularJS](http://blog.xebia.fr/2016/03/08/lazy-loading-avec-webpack-angularjs/) (in french)
  * [Free version of the book about webpack by SurviveJS](http://survivejs.com/webpack/introduction/)

For those interested by working with [angular](https://angularjs.org/) and [ES6](http://es6-features.org/), you can also check those ones :

  * [Exploring ES6 Classes In AngularJS 1.x](http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x%20nice)
  * [An experiment in using ES6 features with AngularJS 1.x ](https://github.com/michaelbromley/angular-es6)
  * [Starter for Angular + ES6 + (Webpack or JSPM) by Angular-Class](https://github.com/angular-class/NG6-starter)

Regarding the integration of [webpack](https://github.com/webpack/webpack), [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/) to run the unit tests but also their code coverage, I took my inspiration from the [ES6 Karma Jasmine Webpack Boilerplate](https://github.com/zyml/es6-karma-jasmine-webpack-boilerplate) project from [Melvin Lee](https://github.com/zyml).

I also strongly recommend to watch that brilliant talk on [webpack](https://github.com/webpack/webpack) by Alexandrine Boissiere : [Efficient Static Assets Pipeline with Webpack](https://www.youtube.com/watch?v=w1dAb_Umt8o).

## License

The MIT License (MIT)

Copyright (c) 2015 Antoine Lambert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
