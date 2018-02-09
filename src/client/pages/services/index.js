/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import broadcastService from './broadcast.service';
import sensorDataUpdaterService from './sensorDataUpdater.service';

// Create the module where our functionality can attach to
let servicesModule = angular.module('EClient.pages.services', []);

// Services/Factories
servicesModule.factory('broadcastSvc', broadcastService);
servicesModule.factory('sensorDataUpdater', sensorDataUpdaterService);

export default servicesModule;
