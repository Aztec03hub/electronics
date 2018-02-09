/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

export default function uiConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ui', {
      url: '/ui',
      template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
      abstract: true,
      title: 'UI Features',
      sidebarMeta: {
        icon: 'ion-android-laptop',
        order: 100,
      },
    });

}
