'use strict'

import './app.scss';

// Import CSS
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'angular-toastr/dist/angular-toastr.css';
import 'animate.css/animate.css';
// OLD PROPER BOOTSTRAP CSS IMPORTS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput.css';
//
import 'fullcalendar/dist/fullcalendar.css';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinFlat.css';
import 'textangular/dist/textAngular.css';
import 'angular-xeditable/dist/css/xeditable.css';
import 'ui-select/dist/select.css';
import 'qtip2/dist/jquery.qtip.css';
import 'jstree/dist/themes/default/style.css'; // Normal Style
//import 'jstree/dist/themes/default-dark/style.css'; // Dark Style

// Import Sass, Causes 'app.css' creation
import './sass/main.scss';

import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import 'angular-ui-sortable';
import ngTouch from 'angular-touch';

// General Imports
import 'angular-toastr';
import 'angular-xeditable';
import 'angular-smart-table';
import 'jquery-slimscroll';
import 'angular-slimscroll-npm';
import 'jstree';
import 'ng-js-tree';
import 'angular-progress-button-styles-npm';
import 'qtip2';
import 'angular-validation-match';
import 'ion-rangeslider';
import 'fullcalendar';
import 'ui-select';
import 'moment';

// Import app config/files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
//import appRun  from './config/app.run';

// Import our app functionaity
import './theme';
import './pages';

// Create and bootstrap application
const requires = [
  ngAnimate,
  ngMessages,
  ngCookies,
  ngResource,
  ngSanitize,
  'ui.bootstrap',
  'ui.sortable',
  uiRouter,
  ngTouch,
  'toastr',
  // Following are testers, could organize properly later
  'smart-table',
  'xeditable',
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  //
  'EClient.theme',
  'EClient.pages',
];

// Mount on window for testing
angular.module('EClient', requires);

angular.module('EClient').constant('AppConstants', constants);

angular.module('EClient').config(appConfig);
