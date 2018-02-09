/**
 * @author v.lugovsky
 * created on 23.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function baPanelSelf(baPanel) {
  'ngInject';

  return angular.extend({}, baPanel, {
    link: function(scope, el, attrs) {
      el.addClass('panel panel-white');
      if (attrs.baPanelClass) {
        el.addClass(attrs.baPanelClass);
      }
    }
  });
}
