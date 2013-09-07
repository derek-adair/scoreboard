'use strict';

angular.module('scoreboardApp')
  .filter('displayPlus', function () {
    return function (input) {
      return (input < 0)? input : '+' + input;
    };
  });
