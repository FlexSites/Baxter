angular.module('app')
  .controller('PageCtrl', ['$window', '$http', '$scope', '$state', 'Page', 'Medium', 'page', function($window, $http, $scope, $state, Page, Medium, page){
    $scope.page = page || new Page();

    if(!page.media && page.mediumIds){
      page.media = page.mediumIds.map(function(id){
        return Medium.get({id: id});
      });
    }

    console.log(page);
    if (page.data && !page.data.length) {
      $scope.page.data = [];
      $scope.page.data.push({});
    }

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
      if(!$scope.page.mediumIds) $scope.page.mediumIds = [];
      if(!$scope.page.media) $scope.page.media = [];
      $scope.page.mediumIds.push(media.id);
      $scope.page.media.push(media);
      $state.go('pageEdit');
    };

    $scope.hasPanel = function() {
      return $state.is('pageEdit.media');
    };

    var lower = name.toLowerCase();
      $scope[lower] = page || new Page();
      $scope['savePage'] = function(page){
        delete page.media
        if(page.id){
          return page.$upsert(done);
        }
        page.$create(done);
      };
      function done(){
        $state.go('pages');
      }
  }]);
