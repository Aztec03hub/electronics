/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import angular from 'angular';

// Import module config/files
import msgCenterCtrl from './msgCenter.controller';
import msgCenterDirective from './msgCenter.directive';

// Create the module where our functionality can attach to
let msgCenterModule = angular.module('EClient.theme.components.msgCenter', []);

// Controllers
msgCenterModule.controller('MsgCenterCtrl', msgCenterCtrl);

// Directives
msgCenterModule.directive('msgCenter', msgCenterDirective);


export default msgCenterModule;
