/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import weatherCtrl from './weather.controller'
import weatherDirective from './weather.directive'

// Create the module where our functionality can attach to
let weatherModule = angular.module('EClient.pages.dashboard.weather', []);

// Controllers
weatherModule.controller('WeatherCtrl', weatherCtrl);

// Directives
weatherModule.directive('weather', weatherDirective);

export default weatherModule;
