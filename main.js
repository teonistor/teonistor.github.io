var tnmod = angular.module('TNmod', ['ngRoute']);

tnmod.config (['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'home.htm', controller: 'home'})
      .when('/home', {templateUrl: 'home.htm', controller: 'home'})
      .when('/compsci', {templateUrl: 'compsci.htm', controller: 'compsci'})
      .when('/suhc', {templateUrl: 'suhc.htm', controller: 'hidden'})
      .when('/cristi', {templateUrl: 'cristi.htm', controller: 'hidden'})
      .when('/nightwish', {templateUrl: 'nightwish.htm', controller: 'hidden'})
      .when('/stories/:story', {templateUrl: 'stories.htm', controller: 'stories'})
      .when('/treasure/:codeHash', {templateUrl: 'treasure.htm', controller: 'treasure'})
      .otherwise({templateUrl: '4O4.htm'});
    $locationProvider.hashPrefix('');

    // If HTML5 ever becomes reasonably feasible on github.io, or if this is reused as template
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  }
]);

/* In the root scope an array will be kept of classes for navbar items. At most one of these
 * must be 'active' at a time, indicating a highlighted navbar item (none is highlighted on
 * hidden pages and in special cases). A function is also provided for controllers of each
 * page to easily and correctly alter this array.
 */
tnmod.run(['$rootScope', function ($rootScope) {
  var previouslyActiveNav = 0;
  $rootScope.activeNav = ['', '', '', ''];
  $rootScope.setActiveNav = function (n) {
    $rootScope.activeNav[previouslyActiveNav] = '';
    $rootScope.activeNav[n] = 'active';
    previouslyActiveNav = n;
  };
}]);


// Controller for the hidden pages with nothing special going on
tnmod.controller ('hidden', ['$rootScope',
  function ($rootScope) {
    $rootScope.activeNav = ['', '', '', ''];
  }
]);

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

tnmod.controller ('stories', ['$scope', '$location', '$rootScope', '$routeParams',
  function ($scope, $location, $rootScope, $routeParams) {
    $rootScope.setActiveNav(2);

    /* Enumerate stories giving location and title. This will be used in the table of contents.
     * Location is interpreted as the name of a file inside /stories, sans the .htm extension
     * which will be automatically appended.
     */
    $scope.stories = [
      ['zoom', 'Anatomy of Zoom'],
      ['angular-site', 'An Angular Website']
    ];

    /* Find the story being pointed at by the path. If none (or stupid path typed in), load the
     * most recent story in the array (at position 0). Note: $scope.chosenStory is a 2D array,
     * like $scope.stories, but contains only one top-level element if path is correct.
     */
    $scope.chosenStory = $scope.stories.filter(e => e[0] === $routeParams.story);
    if ($scope.chosenStory.length !== 1)
      $location.path('/stories/' + $scope.stories[0][0]);
  }
]);

/* Controller for Treasure Hunt provides the following $scope elements:
 * * huntCode: mapping for contents of code text box
 * * includeSrc: path to file to include, whether correct or not
 * * fail: whether to show the fail message
 * * success: whether to show the included file
 * * hunt: function called by Button / Enter key. Hashes typed code and updates path accordingly
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

    /* If requested file exists, a correct code has been entered, thus show the included page.
     * Otherwise, display failure message only if a code has been entered at all.
     */
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
