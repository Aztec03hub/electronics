/**
 * Created by k.danovsky on 12.05.2016.
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function themeLayoutSettings(baConfig) {
  'ngInject';

  var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
  var mobileClass = isMobile ? 'mobile' : '';
  var clientClass = baConfig.theme.EClient ? 'EClient-theme' : '';
  angular.element(document.body).addClass(mobileClass).addClass(clientClass);

  return {
    EClient: baConfig.theme.EClient,
    mobile: isMobile,
  };

}
