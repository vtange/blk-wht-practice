var assert = require('assert');
var selenium = require('selenium-webdriver');

describe('calculating weights', function() {
  it('calculates weights', function() {
    var driver = new selenium.Builder().
        withCapabilities(selenium.Capabilities.firefox()).
        build();

    driver.get("https://decohere.herokuapp.com/planets");

    var weight = driver.isElementPresent(selenium.By.id('wt'));
    assert.equal(weight, true, "Weight entry not possible");

    driver.quit();
  });
});