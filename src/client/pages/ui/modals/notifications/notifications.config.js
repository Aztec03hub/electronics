/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import templateUrl from './notifications.html';

export default function notificationsConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ui.modals.notifications', {
      url: '/notifications',
      //templateUrl: require('./notifications.html'),
      templateUrl: templateUrl,
      controller: 'NotificationsCtrl',
      title: 'Notifications',
      sidebarMeta: {
        order: 400,
      },
    });

}
