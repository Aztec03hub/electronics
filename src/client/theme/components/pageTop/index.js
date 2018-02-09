/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import pageTopCtrl from './pageTop.controller';
import pageTopComponent from './pageTop.component';

// Create the module where our functionality can attach to
let pageTopModule = angular.module('EClient.theme.components.pageTop', []);

// Controllers
pageTopModule.controller('PageTopCtrl', pageTopCtrl);

// Components
pageTopModule.component('pageTop', pageTopComponent);

export default pageTopModule;
