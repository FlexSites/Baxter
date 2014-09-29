var config = {
    "host": "stevesoelberg.com",
    "title": "Steve Soelberg: Stand-up Comedian & the voice of Ragnar",
    "description": "Steve Soelberg: Stand-up Comedian, & the voice of Ragnar",
    "type": "comedian",
    "entertainerId": "53d1db2b562cdbef37fe0a48",
    "styles": ["http://fonts.googleapis.com/css?family=Pacifico"],
    "scripts": ["//ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js", "/ng/angular-route.js", "/ng/global.js"],
    "aliases": ["steve.omniorders.com"],
    "analytics": "UA-42233857-2",
    "smtpTransport": {
        "service": "Gmail",
        "auth": {
            "user": "stevesoelberg@gmail.com",
            "pass": "dubrbdulbvqwqicq"
        }
    }
};

function itemPromise($q, $route, Model) {

    var id = $route.current.params.id;

    console.log('hit item promise', id);
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

var app = angular.module('comedian', ['ngResource', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider) {

            $httpProvider.interceptors.push('AdminInterceptor');
            $httpProvider.defaults.withCredentials = true;

            angular.forEach([{
                    "url": "/",
                    "templateUrl": "/html/home.html",
                    "title": "Site Admin"
                }, {
                    "url": "/login",
                    "templateUrl": "/html/login.html",
                    "title": "Comedian Login"
                },

                // USERS
                {
                    "url": "/users",
                    "templateUrl": "/html/user/list.html",
                    "title": "User List",
                    "controller": "ListController",
                    "resolve": {
                        items: ['User',
                            function(User) {
                                var users = User.query(function() {
                                    console.log(users);
                                });
                                return users.$promise;
                            }
                        ]
                    }
                }, {
                    "url": "/admin/user/:id?",
                    "templateUrl": "/html/admin/userAddEdit.html",
                    "title": "Edit User",
                    "controller": "UserController"
                },

                // PFOFILE
                {
                    "url": "/profile",
                    "templateUrl": "/html/profile/addEdit.html",
                    "title": "Edit Profile",
                    "controller": "EntertainerController",
                    "resolve": {
                        entertainer: ['$q', '$route', 'Entertainer',
                            function($q, $route, Entertainer) {
                                var obj = Entertainer.get(function() {
                                    console.log(obj);
                                });
                                return obj.$promise;
                            }
                        ]
                    }
                },

                // MEDIA
                {
                    "url": "/media",
                    "templateUrl": "/html/media/list.html",
                    "title": "Edit Media",
                    "controller": "ListController",
                    "resolve": {
                        items: ['Medium',
                            function(Medium) {
                                var media = Medium.query(function() {
                                    console.log(media);
                                });
                                return media.$promise;
                            }
                        ]
                    }
                }, {
                    "url": "/medium/:id?",
                    "templateUrl": "/html/media/addEdit.html",
                    "title": "Edit Medium",
                    "controller": "MediumController",
                    "resolve": {
                        medium: ['$q', '$route', 'Medium', itemPromise]
                    }
                },

                // EVENTS
                {
                    "url": "/events",
                    "templateUrl": "/html/event/list.html",
                    "title": "Event List",
                    "controller": "ListController",
                    "resolve": {
                        items: ['Event',
                            function(Event) {
                                var events = Event.query();
                                return events.$promise;
                            }
                        ]
                    }
                }, {
                    "url": "/event/:id?",
                    "templateUrl": "/html/event/addEdit.html",
                    "title": "Edit Event",
                    "controller": "EventController",
                    "resolve": {
                        event: ['$q', '$route', 'Event', itemPromise]
                    }
                },

                // VENUES
                {
                    "url": "/venue/:id?",
                    "templateUrl": "/html/venue/addEdit.html",
                    "title": "Edit Venue",
                    "controller": "VenueController",
                    "resolve": {
                        venue: ['$q', '$route', 'Venue', itemPromise]
                    }
                }
            ], function(route) {
                var url = route.url;
                delete route.url;

                // if(url!= '/login'){
                //     // Force them to be logged in
                //     route.resolve = angular.extend({
                //         user: ['Auth',function(Auth){
                //             console.log('Auth running');
                //             return Auth.getUser();
                //         }]
                //     },route.resolve);
                // }

                // Default to adminController
                if (!route.controller) route.controller = 'AdminController';

                $routeProvider.when(url, route);
            });
            $routeProvider.otherwise({
                "templateUrl": "/html/home.html",
                "title": "Page not found"
            });
            $locationProvider.html5Mode(true);
        }
    ])
    .factory('User', ['$resource',
        function($resource) {
            return $resource('http://api.comedian.io/users/:id'), {
                id: '@id'
            };
        }
    ])
    .factory('Event', ['$resource',
        function($resource) {
            return $resource('http://api.comedian.io/events/:id', {
                id: '@id'
            });
        }
    ])
    .factory('Venue', ['$resource',
        function($resource) {
            return $resource('http://api.comedian.io/venues/:id', {
                id: '@id'
            });
        }
    ])
    .factory('Medium', ['$resource',
        function($resource) {
            return $resource('http://api.comedian.io/media/:id', {
                id: '@id'
            });
        }
    ])
    .factory('Entertainer', ['$resource',
        function($resource) {
            return $resource('http://api.comedian.io/entertainers/53d1db2b562cdbef37fe0a48');
        }
    ])
    .controller('ListController', ['$http', '$scope', '$routeParams', 'items',
        function($http, $scope, $routeParams, items) {
            $http.get('http://api.comedian.io/auth').success(function() {
                console.log('success', arguments);
            }).error(function() {
                console.log('error', arguments);
            });
            $scope.items = items;
        }
    ]);

// Add/Edit Controllers
_.each(['User', 'Venue', 'Medium', 'Entertainer'], function(ctrl) {
    app.controller(ctrl + 'Controller', ['$scope', '$location', ctrl, ctrl.toLowerCase(),
        function($scope, $location, Item, item) {
            console.log('hit controller', ctrl);
            // Add item to current scope
            $scope[ctrl.toLowerCase()] = item;
            console.log(ctrl.toLowerCase(), $scope[ctrl.toLowerCase()]);

            // Save item
            $scope.save = function() {
                console.log('Saving %s', $scope[ctrl.toLowerCase()]);
                $scope[ctrl.toLowerCase()].$save(function() {
                    console.log('Saved', arguments);
                    $location.path('/' + (ctrl == 'Medium' ? 'media' : ctrl.toLowerCase() + 's'));
                });
            };
        }
    ]);
});
// console.log(pluralize('media','car','venue','user','octopus'))
function pluralize(str) {
    if (str.slice(-3) == 'ium') {
        str = str.substr(0, str.length - 3) + 'ia';
    } else {
        str += 's';
    }
    return str;
}
function parseDate(str){
    var m = str.match(/^(\d{1,2})\/(\d{2})\/(\d{2})\s(\d{1,2}):(\d{2}) ([AP]M)$/);
    console.log('parse match', m);

    var month = m[1];
    var day = m[2];
    var year = m[3];
    var hour = m[4];
    var minute = m[5];
    var AM_PM = m[6];

    console.log('AM_PM',AM_PM,hour);
    hour = AM_PM=='PM'?(parseInt(hour)+12).toString():hour;
    console.log('hour',hour);

    var fin = ['20',year,'-',month,'-',day,'T',hour,':',minute,':00']
    console.log(fin.join(''));
    return fin.join('');
}
app.controller('EventController', ['$scope', '$filter', 'Venue', 'event',
    function($scope, $filter, Venue, event) {

        $scope.event = _.defaults(event,{
            _name: '',
            showtimes: [],
            isRecurring: false,
            _type: 'general',
            price: 0,
            venue: {},
            _description: '',
            _facebook: '',
            link: '',
            _video: '',
            _heroes: []
        });

        $scope.getVenues = function(val) {
            console.log('vlah2');
            var venues = Venue.query(function() {
                venues.push({
                    name: 'New Venue'
                });
            });
            return venues.$promise;
        };
        $scope.addShow = function() {
            $scope.event.showtimes.push({
                date: $filter('date')(new Date(),'MM/dd/yy'),
                time: $filter('date')(new Date(),'hh:mm a')
            })
        };
        $scope.save = function() {
            _.each($scope.event.showtimes,function(showtime,i){
                // 2014-08-03T02:00:00.000Z
                $scope.event.showtimes[i].datetime = parseDate(showtime.date+' '+showtime.time);
            });
            console.log('Saving event', $scope.event);
            $scope.event.$save(function() {
                console.log('Saved', arguments);
            }, function(error) {
                // Error handler code
            });
        };
    }
])


app

.controller('AdminController', ['$rootScope', '$scope', '$http',
    function($rootScope, $scope, $http) {
        // $rootScope.user = $scope.user = user;
        // console.log($rootScope.user);
    }
])
    .controller('Login', ['$scope', '$http',
        function($scope, $http) {
            console.log('Login controller used');
            $scope.login = function(type) {
                console.log('clicked login', type);
                $http.get('/auth/' + type).success(function(data) {
                    console.log('Auth data', data);
                });
            }
        }
    ])
    .controller('EmailList', ['$scope', '$http',
        function($scope, $http) {
            $scope.subscriber = {
                email: '',
                zip: '',
                name: ''
            };
            var that = this;
            this.submitted = false;
            $scope.saveData = function() {
                console.log('Hey', this.subscriber);
                $http.post('/mail', $scope.subscriber)
                    .success(function(data) {
                        that.submitted = true;
                        that.message = data.message;
                    });
            };
        }
    ])
    .controller('ContactForm', ['$scope', '$http',
        function($scope, $http) {
            $scope.contact = {
                name: '',
                phone: '',
                email: '',
                message: ''
            };
            this.submitted = false;
            var that = this;
            $scope.saveData = function() {
                $http.post('/mail/send', $scope.contact)
                    .success(function(data) {
                        that.submitted = true;
                        that.message = data.message;
                    });
            };
        }
    ])
    .run(['$location', '$rootScope', 'Auth',
        function($location, $rootScope, Auth) {
            // $rootScope.bgClass = 'bg-home';
            $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
                if (current) {
                    document.title = current.$$route.title;
                    $rootScope.bgClass = current.$$route.bgClass;
                }
            });
            $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
                if (rejection.redirect) {
                    $location.path(rejection.redirect);
                }
            });
            // $rootScope.$on('$routeChangeStart', function(event) {
            //     if(/^\/admin/.test($location.$$path)){
            //         if (!Auth.isLoggedIn()) {
            //             console.log('DENY');
            //             event.preventDefault();
            //             $location.path('/login');
            //         } else {
            //             console.log('ALLOW');
            //             $location.path('/home');
            //         }
            //     }
            // });
        }
    ])
    .factory('Auth', function($q, $http) {
        var _user = {};
        return {
            getUser: function() {
                var deferred = $q.defer();
                if (_user.loggedIn === true) {
                    console.log('Local cache');
                    deferred.resolve(_user);
                } else {
                    $http.get('http://api.comedian.io/auth').success(function(user) {
                        console.log('Hit server');
                        if (user.loggedIn) {
                            _user = user;
                            deferred.resolve(user);
                        } else {
                            deferred.reject({
                                redirect: '/login'
                            });
                        }
                    });
                }
                return deferred.promise;
            },
            setUser: function(aUser) {
                user = aUser;
            },
            isLoggedIn: function() {
                return (user) ? user : false;
            }
        }
    })

// register the interceptor as a service
.factory('AdminInterceptor', ['$location', '$q',
    function($location, $q) {
        return {
            // optional method
            'request': function(config) {
                // do something on success
                console.log('request', config);
                return config;
            },

            // optional method
            'requestError': function(rejection) {
                // do something on error
                console.log('request error', config);
                return $q.reject(rejection);
            },



            // optional method
            'response': function(response) {
                // do something on success
                console.log('response', response);
                return response;
            },

            // optional method
            'responseError': function(rejection) {
                // do something on error
                console.log('response error', rejection);
                if (rejection.status === 401) {
                    console.log('Unauthorized. Redirecting...');
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
    }
]);
