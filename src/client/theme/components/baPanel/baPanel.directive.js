/**
 * @author v.lugovsky
 * created on 23.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function baPanelDirective(baPanel, baConfig) {
  'ngInject';

  return angular.extend({}, baPanel, {
    template: function(el, attrs) {
      var res = '<div  class="panel ' + (baConfig.theme.EClient ? 'panel-EClient' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
      res += '" zoom-in ' + (baConfig.theme.EClient ? 'ba-panel-EClient' : '') + '>';
      res += baPanel.template(el, attrs);
      res += '</div>';
      return res;
    }
  });
}
