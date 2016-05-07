var assert = require('assert');
var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
test.describe('calculating weights', function() {
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
});