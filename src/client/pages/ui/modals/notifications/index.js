/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import notificationsConfig from './notifications.config';
import notificationsCtrl from './notifications.controller';

// Create the module where our functionality can attach to
let notificationsModule = angular.module('EClient.pages.ui.modals.notifications', []);

// Import our config file
notificationsModule.config(notificationsConfig);

// Controllers
notificationsModule.controller('NotificationsCtrl', notificationsCtrl);

export default notificationsModule;
