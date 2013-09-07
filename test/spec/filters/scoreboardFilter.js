'use strict';

describe('Filter: scoreboardFilter', function () {

  // load the filter's module
  beforeEach(module('scoreboardApp'));

  // initialize a new instance of the filter before each test
  var scoreboardFilter;
  beforeEach(inject(function ($filter) {
    scoreboardFilter = $filter('scoreboardFilter');
  }));

  it('should return the input prefixed with "scoreboardFilter filter:"', function () {
    var text = 'angularjs';
    expect(scoreboardFilter(text)).toBe('scoreboardFilter filter: ' + text);
  });

});
