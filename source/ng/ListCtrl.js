angular.module('app')
  .controller('ListCtrl', ['$scope', 'FlexSiteResource', 'list', function($scope, FlexSiteResource, list){
    $scope.list = list;

    $scope.remove = function(item){
    };
  }]);
