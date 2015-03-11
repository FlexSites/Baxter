var app = angular.module('app', ['FlexSite', 'ui.router']);

app.controller('HeadController', ['Site', 'User', 'Page', '$scope', '$log', function($scope, $log, Site, User, Page){


var sites = Site.find;
console.log(sites);
// console.log(instanceof Page === "Resource");
// var page = Page.query();
// console.log(page);

}]);
