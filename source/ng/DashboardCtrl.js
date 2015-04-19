angular.module('app')
  .controller('DashboardCtrl', [
    '$scope',
    '$window',
    'pageCount',
    'eventCount',
    'postCount',

    function($scope, $window, pageCount, eventCount, postCount){

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
          title: 'Posts',
          icon: 'icon-files-empty',
          count: postCount,
          url: 'posts'
        },

        {
          title: 'Subscribers',
          icon: 'icon-file-text',
          url: 'subscribers'
        }
      ];
    }
  ]);
