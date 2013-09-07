'use strict';

describe('Filter: displayPlusFilter', function () {

  // load the filter's module
  beforeEach(module('scoreboardApp'));

  // initialize a new instance of the filter before each test
  var displayPlusFilter;
  beforeEach(inject(function ($filter) {
    displayPlusFilter = $filter('displayPlusFilter');
  }));

  it('should return the input prefixed with "displayPlusFilter filter:"', function () {
    var text = 'angularjs';
    expect(displayPlusFilter(text)).toBe('displayPlusFilter filter: ' + text);
  });

});
