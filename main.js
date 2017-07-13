var tnmod = angular.module('TNmod', ['ngRoute']);
// console.log ('Initiating Angular...')

tnmod.config (['$routeProvider',
  function ($routeProvider) {
    $routeProvider.otherwise({templateUrl: 'foo.htm', controller: 'mainCtl'})
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
