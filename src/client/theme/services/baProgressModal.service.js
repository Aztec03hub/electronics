/**
 * @author n.poltoratsky
 * created on 27.06.2016
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict'

//import templateUrl from './pages/ui/modals/progressModal/progressModal.html';

export default function baProgressModal($uibModal) {
  'ngInject';

  var methods = {};
  var progress = 0;
  var max = 100;
  var opened = false;

  return {
    setProgress: function(value) {
      if (value > max) {
        throw Error('Progress can\'t be greater than max');
      }
      progress = value;
    },
    getProgress: function() {
      return progress;
    },
    open: function() {
      if (!opened) {
        methods = $uibModal.open({
          animation: true,
          templateUrl: templateUrl,
          size: 'sm',
          keyboard: false,
          backdrop: 'static'
        });
        opened = true;
      } else {
        throw Error('Progress modal opened now');
      }

    },
    close: function() {
      if (opened) {
        methods.close();
        opened = false;
      } else {
        throw Error('Progress modal is not active');
      }

    }
  };
}
