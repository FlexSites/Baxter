
angular.module('FlexSite')
  .factory('SiteInterceptor', [
    '$rootScope', 
    '$q', 
    'apiBase', 
    'session',

    function($rootScope, $q, apiBase, session) {
      return {
        'request': function(config) {
          if (config.url.substr(0, apiBase.length) === apiBase){
            config.headers['X-FlexSite'] = session.site;
          }
          return config;
        }
      };
    }])
    .config(['$httpProvider', function($httpProvider){
      $httpProvider.interceptors.push('SiteInterceptor');
    }]);
