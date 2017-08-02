var tnmod = angular.module('TNmod', ['ngRoute']);

tnmod.config (['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'home.htm', controller: 'home'})
      .when('/home', {templateUrl: 'home.htm', controller: 'home'})
      .when('/compsci', {templateUrl: 'compsci.htm', controller: 'compsci'})
      .when('/suhc', {templateUrl: 'suhc.htm', controller: 'suhc'})
      .when('/stories', {templateUrl: 'stories.htm', controller: 'stories'})
      .when('/treasure/:codeHash', {templateUrl: 'treasure.htm', controller: 'treasure'})
      .otherwise({templateUrl: '4O4.htm'});
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
]);

//
tnmod.run(['$rootScope', function ($rootScope) {
  var previouslyActiveNav = 0;
  $rootScope.activeNav = ['', '', '', ''];
  $rootScope.setActiveNav = function (n) {
    $rootScope.activeNav[previouslyActiveNav] = '';
    $rootScope.activeNav[n] = 'active';
    previouslyActiveNav = n;
  };
}]);

tnmod.controller ('home', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(0);
  }
]);

tnmod.controller ('compsci', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(1);
  }
]);

tnmod.controller ('suhc', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.activeNav = ['', '', '', ''];
  }
]);

tnmod.controller ('stories', ['$scope', '$location', '$rootScope',
  function ($scope, $location, $rootScope) {
    $rootScope.setActiveNav(2);

    // Enumerate HTM files in /stories and their titles, in desired order of appearance
    $scope.stories = ['angular-site.htm'];
  }
]);

/*
 *
 */
tnmod.controller ('treasure', ['$scope', '$location', '$rootScope', '$routeParams', '$http',
  function ($scope, $location, $rootScope, $routeParams, $http) {
    $rootScope.setActiveNav(3);

    $scope.huntCode = '';
    $scope.includeSrc = '/hashes/' + $routeParams.codeHash + '.htm';
    $scope.fail = $scope.success = false;

    $scope.hunt = function() {
      $location.path('/treasure/' + Sha1.hash($scope.huntCode));
    }

    $http.get($scope.includeSrc).then(
      function() {
        $scope.success = true;
      },
      function() {
        console.log($routeParams.codeHash);
        $scope.fail = !! $routeParams.codeHash;
      }
    );
  }
]);
