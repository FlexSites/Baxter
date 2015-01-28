function itemPromise($q, $route, Model) {
    var id = $route.current.params.id;
    console.log("hit item promise", id);
    if (id) {
        var obj = Model.get({
            id: id
        }, function() {
            console.log(obj);
        });
        return obj.$promise;
    } else {
        var deferred = $q.defer();
        deferred.resolve(new Model());
        return deferred.promise;
    }
}

var resolutions = {
    "/users": {
        items: [ "User", function(User) {
            var users = User.query(function() {
                console.log(users);
            });
            return users.$promise;
        } ]
    },
    "/profile": {
        entertainer: [ "$q", "$route", "Entertainer", function($q, $route, Entertainer) {
            var obj = Entertainer.get({id: function() {
                console.log(obj);
            });
            return obj.$promise;
        } ]
    },
    "/media": {
        items: [ "Medium", function(Medium) {
            var media = Medium.query(function() {
                console.log(media);
            });
            return media.$promise;
        } ],
        type: function(){return 'Medium';}
    },
    "/medium/:id?": {
        medium: [ "$q", "$route", "Medium", itemPromise ]
    },
    "/events": {
        items: [ "Event", function(Event) {
            var events = Event.query();
            return events.$promise;
        } ]
    },
    "/event/:id?": {
        event: [ "$q", "$route", "Event", itemPromise ]
    },
    "/venue/:id?": {
        venue: [ "$q", "$route", "Venue", itemPromise ]
    }
};

//var hosts = <<&hosts>>;

//console.log("host type", hosts[window.location.hostname]);

var app = angular.module("app", [ "ngResource", "ngRoute", "interceptors"]).config([ "$routeProvider", "$locationProvider", "$httpProvider", function($routeProvider, $locationProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    angular.forEach(<<&routes>>, function(route) {
        var url = route.url;
        delete route.url;
        if(resolutions[url]){
            route.resolve = resolutions[url];
        }
        if (!route.controller) route.controller = "AdminController";
        $routeProvider.when(url, route);
    });
    $routeProvider.otherwise({
        templateUrl: "/html/home.html",
        title: "Page not found"
    });
    $locationProvider.html5Mode(true);
} ])

.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.host = $location.hostname;
}])
// Auth interceptor
.config(['$httpProvider',function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
}])

.factory("User", [ "$resource", function($resource) {
    return $resource("http://<<env>>api.comedian.io/users/:id"), {
        id: "@id"
    };
}]).factory("Venue", [ "$resource", function($resource) {
    return $resource("http://<<env>>api.comedian.io/venues/:id", {
        id: "@id"
    });
} ]).factory("Medium", [ "$resource", function($resource) {
    return $resource("http://<<env>>api.comedian.io/media/:id", {
        id: "@id"
    });
} ]).controller("ListController", [ "$http", "$scope", "$routeParams", "items", 'type', function($http, $scope, $routeParams, items, type) {
    $scope.items = items;
    $scope.delete = function(item){
        if(window.confirm('Are you sure you want to delete this video?')){
            item.$delete(function(item){
                _.each($scope.items,function(obj,i){
                    if(obj.id === item.id){
                        $scope.items.splice(i,1);
                        return false;
                    }
                })
            });
        }
    }
} ]);

app.controller('MainController', [function(){

}]);

_.each([ "User", "Venue", "Medium" ], function(ctrl) {
    app.controller(ctrl + "Controller", [ "$scope", "$location", ctrl, ctrl.toLowerCase(), function($scope, $location, Item, item) {
        console.log("hit controller", ctrl);
        $scope[ctrl.toLowerCase()] = item;
        console.log(ctrl.toLowerCase(), $scope[ctrl.toLowerCase()]);
        $scope.save = function() {
            console.log("Saving %s", $scope[ctrl.toLowerCase()]);
            $scope[ctrl.toLowerCase()].$save(function() {
                console.log("Saved", arguments);
                $location.path("/" + (ctrl == "Medium" ? "media" : ctrl.toLowerCase() + "s"));
            });
        };
    } ]);
});

function pluralize(str) {
    if (str.slice(-3) == "ium") {
        str = str.substr(0, str.length - 3) + "ia";
    } else {
        str += "s";
    }
    return str;
}

function parseDate(str) {
    var m = str.match(/^(\d{1,2})\/(\d{2})\/(\d{2})\s(\d{1,2}):(\d{2}) ([AP]M)$/);
    console.log("parse match", m);
    var month = m[1];
    var day = m[2];
    var year = m[3];
    var hour = m[4];
    var minute = m[5];
    var AM_PM = m[6];
    console.log("AM_PM", AM_PM, hour);
    hour = AM_PM == "PM" ? (parseInt(hour) + 12).toString() : hour;
    console.log("hour", hour);
    var fin = [ "20", year, "-", month, "-", day, "T", hour, ":", minute, ":00" ];
    console.log(fin.join(""));
    return fin.join("");
}

app.controller("AdminController", [ "$rootScope", "$scope", "$http", function($rootScope, $scope, $http) {} ])
.controller("Login", [ "$scope", "$http", function($scope, $http) {
    console.log("Login controller used");
    $scope.login = function(type) {
        console.log("clicked login", type);
        $http.get("/auth/" + type).success(function(data) {
            console.log("Auth data", data);
        });
    };
} ]).controller("EmailList", [ "$scope", "$http", function($scope, $http) {
    $scope.subscriber = {
        email: "",
        zip: "",
        name: ""
    };
    var that = this;
    this.submitted = false;
    $scope.saveData = function() {
        console.log("Hey", this.subscriber);
        $http.post("/mail", $scope.subscriber).success(function(data) {
            that.submitted = true;
            that.message = data.message;
        });
    };
} ]).controller("ContactForm", [ "$scope", "$http", function($scope, $http) {
    $scope.contact = {
        name: "",
        phone: "",
        email: "",
        message: ""
    };
    this.submitted = false;
    var that = this;
    $scope.saveData = function() {
        $http.post("/mail/send", $scope.contact).success(function(data) {
            that.submitted = true;
            that.message = data.message;
        });
    };
} ]).run([ "$location", "$rootScope", function($location, $rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        if (current) {
            document.title = current.$$route.title;
            $rootScope.bgClass = current.$$route.bgClass;
        }
    });
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        if (rejection.redirect) {
            $location.path(rejection.redirect);
        }
    });
} ]).factory("AdminInterceptor", [ "$location", "$q", function($location, $q) {
    return {
        request: function(config) {
            console.log("request", config);
            return config;
        },
        requestError: function(rejection) {
            console.log("request error", config);
            return $q.reject(rejection);
        },
        response: function(response) {
            console.log("response", response);
            return response;
        },
        responseError: function(rejection) {
            console.log("response error", rejection);
            if (rejection.status === 401) {
                console.log("Unauthorized. Redirecting...");
                $location.path("/login");
            }
            return $q.reject(rejection);
        }
    };
} ]);