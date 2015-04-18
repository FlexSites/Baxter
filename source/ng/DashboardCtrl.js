angular.module('app')
  .controller('DashboardCtrl', [
    '$scope',
    '$window',
    'pageCount',
    'eventCount',

    function($scope, $window, pageCount, eventCount){

      console.log('COUNTS', pageCount, eventCount);
      $scope.modules = [
        {
          title: 'Events',
          icon: 'icon-ticket',
          count: eventCount,
          url: 'events'
        },

        {
          title: 'Pages',
          icon: 'icon-files-empty',
          count: pageCount,
          url: 'pages'
        },

        {
          title: 'Subscribers',
          icon: 'icon-file-text',
          url: 'subscribers'
        }
      ];
    }
  ]);
