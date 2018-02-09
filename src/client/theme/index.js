/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';
import 'angular-toastr';

// Import module config/files
import {
  layoutSizes,
  layoutPaths,
  colorHelper
} from './theme.constants';
import themeConfig from './theme.config';
import themeConfigProvider from './theme.configProvider';
import themeRun from './theme.run';
import themeService from './theme.service';

// Import module functionality
import './components';
import './directives'
import './filters';
import './inputs';
import './services';

// Create the module where our functionality can attach to
let themeModule = angular.module('EClient.theme', [
  'toastr',
  'EClient.theme.components',
  'EClient.theme.directives',
  'EClient.theme.filters',
  'EClient.theme.inputs',
  'EClient.theme.services'
]);

// Constants
themeModule.constant('layoutSizes', layoutSizes);
themeModule.constant('layoutPaths', layoutPaths);
themeModule.constant('colorHelper', colorHelper);

// Config
themeModule.config(themeConfig);

// Providers
themeModule.provider('baConfig', themeConfigProvider);

// Run
themeModule.run(themeRun);

// Services
themeModule.service('themeLayoutSettings', themeService);

export default themeModule;
