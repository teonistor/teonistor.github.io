var tnmod = angular.module('TNmod', ['ngRoute']);
// console.log ('Initiating Angular...')

tnmod.config (['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('home', {templateUrl: 'home.htm', controller: 'mainCtl'})
    .otherwise({templateUrl: 'foo.htm', controller: 'mainCtl'})
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
]);

tnmod.controller ('mainCtl', ['$scope',
  function ($scope) {
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
