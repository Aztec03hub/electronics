/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import testConfig from './test.config';

import templateUrl from './templtest.html';

// Import module functionality

// Create the module where our functionality can attach to
let testModule = angular.module('EClient.pages.test', []);

// Import our config file
testModule.config(testConfig);

export default testModule;
