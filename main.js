// Let us begin with some all-useful functions.
function isAnyNavActive (whichPage) {
  return function (whichNav) {
  console.log('Gone through ' + whichNav + whichPage)
    if (whichPage == whichNav) return 'active';
    return '';
  }
}

function hashCode (code) {
  // TODO
}

// And now Angular stuff.
var tnmod = angular.module('TNmod', ['ngRoute']);

tnmod.config (['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'home.htm', controller: 'home'})
      .when('/home', {templateUrl: 'home.htm', controller: 'home'})
      .when('/stories', {templateUrl: 'stories.htm', controller: 'stories'})
      .when('/treasure', {templateUrl: 'treasure.htm', controller: 'treasure'})
      .otherwise({templateUrl: '4O4.htm'});
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
]);

// tnmod.run(['$rootScope', function ($rootScope) {
//
//   $rootScope.activeNav = ['', '', ''];
// }])

tnmod.controller ('home', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    // $scope.where = 'Home controller at ' + $location.absUrl();
    $scope.isNavActive = isAnyNavActive ('home');
    $scope.isNavActiveH = 'active'

    $rootScope.activeNav = ['active', '', ''];
    // $scope.fruit = [
    //   {name: 'Banana', score: 7},
    //   {name: 'Avocado', score: 10}
    // ];
    // $scope.bar = 'sh';
    // $scope.stories = [
    //   'bar.html'
    // ];
  }
]);

tnmod.controller ('stories', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isNavActive = isAnyNavActive ('stories');
    function story (title, filename) { return {title: title, filename: filename}};

    // Enumerate HTM files in /stories and their titles, in desired order of appearance
    $scope.stories = [
      story ('First story on this site', 'placeholder.htm'),
      story ('Second story on this site', 'placeholder0.htm')
    ];
  }
]);

tnmod.controller ('treasure', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isNavActive = isAnyNavActive ('treasure');


  }
]);
