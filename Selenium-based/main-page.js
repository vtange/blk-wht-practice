var webdriver = require('selenium-webdriver');
 
PlanetPage = function PlanetPage(driver) {
  this.driver = driver;
  this.url = "https://decohere.herokuapp.com/planets";
};
 
PlanetPage.prototype.view = function() {
  this.driver.get(this.url);
  return webdriver.promise.fulfilled(true);
};
 
module.exports = PlanetPage;