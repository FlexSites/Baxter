angular.module('app')
  .controller('SiteCtrl', ['$scope', '$state', 'Site', 'site', function($scope, $state, Site, site){


    $scope.site = site || new Site();

    $scope.site.scripts = formatArray(formatValues($scope.site.scripts||[]));
    $scope.site.styles = formatArray(formatValues($scope.site.styles||[]));

    $scope.formatArray = formatArray;
    $scope.saveSite = function(site){
      site.styles = compact(parseValues(site.styles||[]));
      site.scripts = compact(parseValues(site.scripts||[]));
      if(site.id){
        return site.$upsert(function(){
          $state.go('sites');
        });
      }
      site.$create(function(){
          $state.go('sites');
      });
    };
    function formatArray(arr){
      var newArr = compact(arr);
      newArr.push({value: ''});
      return newArr;
    }
    function formatValues(arr){
      return arr.map(function(item){
        return {value: item};
      });
    }
    function parseValues(arr){
      return arr.map(function(item){
        return item.value;
      });
    }
    function compact(arr){
      return arr.filter(function(item){
        if(typeof item === 'object') return !!item.value;
        return !!item;
      });
    }
  }
]);
