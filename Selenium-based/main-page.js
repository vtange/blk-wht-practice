var webdriver = require('selenium-webdriver');
 
PlanetPage = function PlanetPage(driver) {
  this.driver = driver;
  this.url = "https://decohere.herokuapp.com/planets";
  this.weightField = webdriver.By.id('wt');
};
 
PlanetPage.prototype.view = function() {
  this.driver.get(this.url);
  return webdriver.promise.fulfilled(true);
};

PlanetPage.prototype.weightEntryPresent = function() {
  var d = webdriver.promise.defer();
  this.driver.isElementPresent(this.weightField).then(function(weight) {
    d.fulfill(weight);
  });
  return d.promise;
};

PlanetPage.prototype.weightEntryBlank = function() {
  var d = webdriver.promise.defer();
  this.driver.findElement(this.weightField).getText().then(function(text) {
    d.fulfill(text);
  });
  return d.promise;
};

module.exports = PlanetPage;