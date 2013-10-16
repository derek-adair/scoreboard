'use strict';

angular.module('scoreboardApp')
.controller('BoardCtrl', function ($scope, $routeParams, $http) {
    $scope.selectedPlayer = {};
    $http.get('/board/' + $routeParams.boardId + '.json').success(function(data){
        $scope.board = data;

        $scope.players = data.players;
    });

    $scope.incrementScore = function (howMuch, thePlayer) {
        $scope.selectedPlayer = thePlayer;
        thePlayer.toAdd += howMuch;
    };

    $scope.submitScore = function(thePlayer){
        thePlayer.score += thePlayer.toAdd;
        thePlayer.toAdd = 0;
    };
});
