var assert = require('assert');
var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

const timeOut = 15000;

test.describe('calculating weights', function() {
  this.timeout(timeOut);
  test.it('calculates weights', function() {
    var driver = new selenium.Builder().
        withCapabilities(selenium.Capabilities.firefox()).
        build();

    driver.get("https://decohere.herokuapp.com/planets");

    driver.isElementPresent(selenium.By.id('wt')).then(function(weight) {
      assert.equal(weight, true, "Weight entry not possible");
    });

    driver.quit();
  });

test.it.only('provides no default weight', function() {
    var driver = new selenium.Builder().
        withCapabilities(selenium.Capabilities.firefox()).
        build();

    driver.get("https://decohere.herokuapp.com/planets");

    driver.findElement(selenium.By.id('wt')).getText().then(function(weight) {
      assert.equal(weight, '', "Weight started with values");
    });

    driver.quit();
  });
});