var tnmod = angular.module('TNmod', ['ngRoute']);
// console.log ('Initiating Angular...')

tnmod.config (['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {templateUrl: 'home.htm', controller: 'home'})
    .otherwise({templateUrl: 'foo.htm', controller: 'stories'});
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
]);

tnmod.controller ('home', ['$scope', '$location',
  function ($scope, $location) {
    $scope.where = 'Home controller at ' + $location.absUrl();
    $scope.isNavActive = function (str) {
      if (str === 'Home') return 'active';
      return '';
    };
    $scope.fruit = [
      {name: 'Banana', score: 7},
      {name: 'Avocado', score: 10}
    ];
    $scope.bar = 'sh';
    $scope.stories = [
      'bar.html'
    ];
  }
]);

tnmod.controller ('stories', ['$scope', '$location',
  function ($scope, $location) {
    $scope.where = 'Stories controller at ' + $location.absUrl();
    $scope.fruit = [
      {name: 'Banana', score: 7},
      {name: 'Avocado', score: 10}
    ];
    $scope.bar = 'sh';
    $scope.stories = [
      'bar.html'
    ];
  }
]);
