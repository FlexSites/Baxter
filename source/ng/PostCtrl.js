angular.module('app')
  .controller('PostCtrl', ['$window', '$http', '$scope', '$state', 'Post', 'Medium', 'post', function($window, $http, $scope, $state, Post, Medium, post){

    if(post.publishedDate) post.publishedDate = new Date(post.publishedDate);

    $scope.post = post || new Post();



    if(!post.media && post.mediumIds){
      post.media = post.mediumIds.map(function(id){
        return Medium.get({id: id});
      });
    }

    $scope.removeMedia = function(){
      $scope.post.media = [];
      $scope.post.mediumIds = [];
    };

    $scope.mediaChange = function(medium, isAdded){
      if(!$scope.post.mediumIds) $scope.post.mediumIds = [];
      $scope.post.mediumIds.push(medium.id);
    };

    $scope.selectMedia = function(media){
      console.log('select media', media);
      if(!$scope.post.mediumIds) $scope.post.mediumIds = [];
      if(!$scope.post.media) $scope.post.media = [];
      $scope.post.mediumIds.push(media.id);
      $scope.post.media.push(media);
      $state.go('postEdit');
    };

    $scope.hasPanel = function() {
      return $state.is('postEdit.media');
    };

    var lower = name.toLowerCase();
      $scope[lower] = post || new Post();
      $scope['savePost'] = function(post){
        delete post.media
        if(post.id){
          return post.$upsert(done);
        }
        post.$create(done);
      };
      function done(){
        $state.go('posts');
      }
  }]);
