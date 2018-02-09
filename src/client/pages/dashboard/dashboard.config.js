/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import templateUrl from './dashboard.html';

export default function DashboardConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: templateUrl,
      title: 'Dashboard',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0,
      },
    });

}
