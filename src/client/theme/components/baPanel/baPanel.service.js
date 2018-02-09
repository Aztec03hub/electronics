/**
 * @author v.lugovsky
 * created on 23.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function baPanelService() {
  'ngInject';

  /** Base baPanel directive */
  return {
    restrict: 'A',
    transclude: true,
    template: function(elem, attrs) {
      var res = '<div class="panel-body" ng-transclude></div>';
      if (attrs.baPanelTitle) {
        var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.baPanelTitle + '</h3></div>';
        res = titleTpl + res; // title should be before
      }

      return res;
    }
  };
}
