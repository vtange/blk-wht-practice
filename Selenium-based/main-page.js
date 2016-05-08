var webdriver = require('selenium-webdriver');
 
PlanetPage = function PlanetPage(driver) {
  this.driver = driver;
  this.url = "https://decohere.herokuapp.com/planets";
};
 
PlanetPage.prototype.view = function() {
  this.driver.get(this.url);
  return webdriver.promise.fulfilled(true);
};

PlanetPage.prototype.weightEntryPresent = function() {
  var d = webdriver.promise.defer();
  this.driver.isElementPresent(webdriver.By.id('wt')).then(function(weight) {
    d.fulfill(weight);
  });
  return d.promise;
};

PlanetPage.prototype.weightEntryBlank = function() {
  var d = webdriver.promise.defer();
  this.driver.findElement(webdriver.By.id('wt')).getText().then(function(text) {
    d.fulfill(text);
  });
  return d.promise;
};

module.exports = PlanetPage;