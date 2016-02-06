app.controller("MainController",
  function($scope, $rootScope, $http, $location, $timeout, current_user, logout, $cookies)
{
	$rootScope.title = "TravBook";
	
  $scope.logout = function()
  {
    logout.logout();
  }

  $scope.changeView = function(url)
  {
    $location.path(url);
  }
});