function AppConfig($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider, $urlMatcherFactoryProvider, baSidebarServiceProvider) {
  'ngInject';

  $urlMatcherFactoryProvider.strictMode(false);

  /*
    If you don't want hashbang routing, uncomment this line.
    This will be using hashbang routing though :)
  */
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.geoplugin.net/**',
    'http://localhost/**',
    'http://127.0.0.1/**',
    'http://localhost:3002/**',
    'http://localhost:9002/**',
    'http://0.0.0.0/**',
  ]);

}

export default AppConfig;
