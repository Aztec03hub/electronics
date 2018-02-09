/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import baProgressModalService from './baProgressModal.service';
import baUtilService from './baUtil.service';
import fileReaderService from './fileReader.service';
import PreloaderService from './preloader.service';
import stoppableIntervalService from './stoppableInterval.service';

// Create the module where our functionality can attach to
let servicesModule = angular.module('EClient.theme.services', []);

// Services
servicesModule.factory('baProgressModal', baProgressModalService);
servicesModule.service('baUtil', baUtilService);
servicesModule.service('fileReader', fileReaderService);
servicesModule.service('preloader', PreloaderService);
servicesModule.service('stoppableInterval', stoppableIntervalService);

export default servicesModule;
