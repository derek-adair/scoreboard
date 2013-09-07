'use strict';

angular.module('scoreboardApp', [])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
.when('/board', {
    redirectTo: '/boards'
})
.when('/board/:boardId', {
    templateUrl: 'views/board.html',
    controller: 'BoardCtrl'
})
.when('/boards', {
  templateUrl: 'views/boards.html',
  controller: 'BoardsCtrl'
})
.otherwise({
    redirectTo: '/'
});
});
