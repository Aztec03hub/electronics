function toastrLibConfig(toastrConfig) {
  'ngInject';

  angular.extend(toastrConfig, {
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            timeOut: 5000,
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });

}

export default toastrLibConfig;
