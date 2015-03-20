angular.module('app')
  .controller('PageCtrl', ['$window', '$scope', '$state', 'Page', 'page', function($window, $scope, $state, Page, page){
    $scope.page = page || new Page();
  }]);
