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

// TODO perhaps a less object-premature-death-prone way?
tnmod.run(['$rootScope', function ($rootScope) {
  function noActiveNav() { return  ['', '', '']; }
  $rootScope.activeNav = noActiveNav();
  $rootScope.setActiveNav = function (n) {
    $rootScope.activeNav = noActiveNav();
    $rootScope.activeNav[n] = 'active';
  };
}]);

tnmod.controller ('home', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(0);
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

tnmod.controller ('stories', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(1);
    function story (title, filename) { return {title: title, filename: filename}};

    // Enumerate HTM files in /stories and their titles, in desired order of appearance
    $scope.stories = [
      story ('First story on this site', 'placeholder.htm'),
      story ('Second story on this site', 'placeholder0.htm')
    ];
  }
]);

tnmod.controller ('treasure', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(2);

  }
]);
