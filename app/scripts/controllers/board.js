'use strict';

angular.module('scoreboardApp')
.controller('BoardCtrl', function ($scope, $routeParams, $http) {
    $scope.selectedPlayer = {};
    $http.get('/board/' + $routeParams.boardId + '.json').success(function(data){
        $scope.board = data;
        // * * * OPTIONS * * *
        // User configurable options.  Most likly to be assigned to each user, and automatialy
        // applied to each of the boards the user manages
        // * * * * * * * * * * *
        // * * Force Action  * *
        // * If a game fires a rule event, the UI acts without confirming
        // * * Properties * *
        // * force: {boolean} (false)*/
        if(data.hasOwnProperty('options')){
            $scope.options = data.optios;
        }
        /* * * * RULES * * *
          // Rules represent a set of constraints that can trigger actions.  An action
          // represents a proression in the game, winning and losing are the only options
          // for the time being, but there may be more actions added in the future.  Winning
          // will increment the win count of the user who triggered the event.  Losing will
          // disable the users score from being incremented and if there are no more active
          // users, the last user will be given a win.
          // * * Comment Key * *
          // [o] = Optional
          // (Value) = Default value
          // {Type} = Type
          // * * * * * * * * * *
          // * * Score Rule * *
          // * A Score Rule causes the game to end when a player reaches a certain total score.
          // * * Properties * *
          // * Max: [o]  The higher end constraint of a score
          // * Min: [o] The Lower end constraint of a score
          // * precise: {Boolean} (false) [o] Trips rule event only if they match the exact value*/
        if(data.hasOwnProperty('rules')){
            $scope.rules = data.rules;
        }

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

    $scope.getRule = function(rule){
        for(var i = 0; i <= $scope.rules.length; i+=1){
            if($scope.rules[i].type === rule){
                return $scope.rules[i];
            }
        }
        return false;
    }
});
