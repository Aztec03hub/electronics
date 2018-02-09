/**
 * @author Phil LaFayette
 * created on 11/15/2017
 */
'use strict'

import templateUrl from './modals.html';

import basicModal from './modalTemplates/basicModal.html';

export default function modalsConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('ui.modals', {
      url: '/modals',
      templateUrl: templateUrl,
      controller: 'ModalsPageCtrl',
      title: 'Modals',
      sidebarMeta: {
        order: 300,
      },
    });

}
