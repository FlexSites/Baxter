angular.module('app')
  .controller('SiteCtrl', ['$scope', '$state', 'Site', 'site', function($scope, $state, Site, site){

    $scope.site = site || new Site();
    siteInit();

    function siteInit(){
      $scope.styleCount = $scope.site.styles.length + 1;
      $scope.scriptCount = $scope.site.scripts.length + 1;

      $scope.site.scripts = formatArray($scope.site.scripts);
      $scope.site.styles = formatArray($scope.site.styles);
    }

    $scope.saveSite = function(site){
      site.styles = parseArray(site.styles);
      site.scripts = parseArray(site.scripts);
      var methodName = '$create';
      if(site.id) methodName = '$upsert';
      return site[methodName]()
        .then(function(){
          $state.go('home');
        }).catch(siteInit);
    };
    function formatArray(arr){
      if (!arr) return [];
      return arr.reduce(function(prev, curr) { return prev + curr + '\n'; }, '');
    }
    function parseArray(str){
      return str.split('\n')
        .filter(function(val){ return !!val; });
    }
  }
]);
