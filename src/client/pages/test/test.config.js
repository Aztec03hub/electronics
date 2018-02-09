/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import templateUrl from './test.html';

export default function testConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: templateUrl,
      title: 'Test Page',
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 300,
      },
    });

}
