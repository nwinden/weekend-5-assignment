var petApp = angular.module('petApp', ['ngRoute']);

//Routes for the site views
petApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "homeController"
    })
    .when('/animal', {
      templateUrl: '/views/animals.html',
      controller: "animalController"
    })
    .when('/favorite', {
      templateUrl: '/views/favorite.html',
      controller: "favoriteController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
