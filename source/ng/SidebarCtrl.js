angular.module('app')
  .controller('SidebarCtrl', [
    '$scope',
    '$window',

    function($scope, $window){
      $scope.showSidebar = $window.localStorage.showSidebar === 'true';
      $scope.toggleSidebar = function(){
        $window.localStorage.showSidebar = $scope.showSidebar = !$scope.showSidebar;
      };
    }
  ]);
