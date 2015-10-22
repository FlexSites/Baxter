angular.module('app')
  .controller('PageCtrl', ['$window', '$http', '$scope', '$state', 'Page', 'Medium', 'page', function($window, $http, $scope, $state, Page, Medium, page){
    $scope.page = page || new Page();

    if(!page.media && page.mediumIds){
      page.media = page.mediumIds.map(function(id){
        return Medium.get({id: id});
      });
    }

    $scope.addData = function(){
      if (!$scope.page.data) $scope.page.data = [];
      $scope.page.data = $scope.page.data.filter(function(d) {
        return !!d.name;
      });
      $scope.page.data.push({});
    }

    $scope.addData();

    $scope.removeMedia = function(){
      $scope.page.media = [];
      $scope.page.mediumIds = [];
    };

    $scope.mediaChange = function(medium, isAdded){
      if(!$scope.page.mediumIds) $scope.page.mediumIds = [];
      $scope.page.mediumIds.push(medium.id);
    };

    $scope.selectMedia = function(media){
      console.log('select media', media);
      if(!$scope.page.media) $scope.page.media = [];
      $scope.page.media.push(media);
      $state.go('pageEdit');
    };

    $scope.hasPanel = function() {
      return $state.is('pageEdit.media');
    };

    var lower = name.toLowerCase();
      $scope[lower] = page || new Page();
      $scope.savePage = function(page){
        page.data = page.data.filter(function(d){ return !!d.name; });
        if(page.id){
          return page.$upsert(done);
        }
        page.$create(done);
      };
      function done(){
        $state.go('pages');
      }
  }]);
