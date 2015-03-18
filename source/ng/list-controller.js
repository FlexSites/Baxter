angular.module('app')
  .controller('ListCtrl', ['$scope', 'list', function($scope, list){
    $scope.list = list;
  }]);
