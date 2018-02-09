/**
 * @author a.demeshko
 * created on 3/1/16
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

export default function preloader($q) {
  'ngInject';

  return {
    loadImg: function(src) {
      var d = $q.defer();
      var img = new Image();
      img.src = src;
      img.onload = function() {
        d.resolve();
      };
      return d.promise;
    },
    loadAmCharts: function() {
      var d = $q.defer();
      AmCharts.ready(function() {
        d.resolve();
      });
      return d.promise;
    }
  };
}
