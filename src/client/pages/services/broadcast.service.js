/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

export default function broadcastSvc($rootScope) {
  'ngInject';

  var sharedService = {};

  sharedService.broadcastMsg = function(msg) {
    $rootScope.$broadcast(msg);
  };

  return sharedService;

}
