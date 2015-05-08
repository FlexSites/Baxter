angular.module('app')
  .controller('PageCtrl', ['$window', '$http', '$scope', '$state', 'Page', 'Medium', 'page', function($window, $http, $scope, $state, Page, Medium, page){
    $scope.page = page || new Page();

    $scope.mediaChange = function(medium, isAdded){
      if(!$scope.page.mediumIds) $scope.page.mediumIds = [];
      $scope.page.mediumIds.push(medium.id);
    };

    var lower = name.toLowerCase();
      $scope[lower] = page || new Page();
      $scope['savePage'] = function(page){
        if(page.id){
          return page.$upsert(done);
        }
        page.$create(done);
      };
      function done(){
        $state.go('pages');
      }
  }]);
