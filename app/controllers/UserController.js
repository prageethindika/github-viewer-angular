(function(){

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {
    
    var onUserComplete = function(response){
      $scope.user = response;
      github.getRepos($scope.user).then(onRepos, onError);
    }

    var onRepos = function(data){
      $scope.repos = data;
    };

    var onError = function(reason){
      $scope.error = "Could not fetch the user";
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller('UserController', UserController);

}());