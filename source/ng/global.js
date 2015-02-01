
angular.module("app")
    .config(['$httpProvider', function($httpProvider){
        // $httpProvider.interceptors.push('AuthInterceptor');
    }])
    .controller('HeaderCtrl', ['$scope', '$window', '$location', '$route', '$rootScope', function($scope, $window, $location, $route, $rootScope){
        if(!$window.sessionStorage.bearer){
            // $location.path('/login');
        }
        $scope.currentSite = $window.localStorage.currentSite;
        $scope.changeSite = function(){
            $window.localStorage.currentSite = $scope.currentSite;
            $route.reload();
        }
        $rootScope.isAdmin = true;
    }])
    .directive('addItem', ['$parse', function($parse){

        return {
            scope: {
                addItem: '='
            },
            restrict: 'A',
            link:  {
                post: function(scope, elem, attrs) {
                    var modelArray = scope.$eval(attrs.addList);

                    elem.bind('click', function() {            
                        scope.$apply(function () {
                          modelArray.push(scope.addItem);
                        });
                    });
            //      elem.bind('click', function(e){
                        // scope.addList.push(scope.addItem);
                        // e.preventDefault();
                        // e.stopPropagation();
                        // return false;
            //      }).bind('focusout', function(e){
            //          console.log('focus lost');
            //      })
                }
            }
        };
    }])
    .controller('MainController', ['$scope', function($scope) {
        // Main controller
        $scope.remove = function(idx, arr){
            arr.splice(idx, 1);
        }
    }]);