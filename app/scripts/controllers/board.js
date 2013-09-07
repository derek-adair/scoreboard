'use strict';

angular.module('scoreboardApp')
  .controller('BoardCtrl', function ($scope, $routeParams, $http) {
    $http.get('/board/' + $routeParams.boardId + '.json').success(function(data){
        $scope.board = data;
        $scope.players = data.players;
    });
  });
