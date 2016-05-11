var assert = require('assert');
var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var firefox = require('selenium-webdriver/firefox');
var binary = new firefox.Binary('C:/Portable/FirefoxPortable/FirefoxPortable.exe');
var options = new firefox.Options().setBinary(binary);
var driver = new firefox.Driver(options);

var planetPage;
var PlanetPage = require('./main-page.js');
const timeOut = 15000;
 
/*
//Open Firefox and get website before each test
test.beforeEach(function() {
  this.timeout(mochaTimeOut);
  driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.firefox()).
      build();
  driver.get("https://decohere.herokuapp.com/planets");
});

// Close Firefox after each test 
test.afterEach(function() {
  driver.quit();
});
*/

//Open Firefox and get website before test
 test.before(function() {
  this.timeout(timeOut);
  planetPage = new PlanetPage(driver);
  planetPage.view();
});

//Close Firefox after test
test.after(function() {
  driver.quit();
});

//Clear Firefox cookies after each test -> Force new session
test.afterEach(function() {
  driver.manage().deleteAllCookies();
});

test.describe('calculating weights', function() {

	//
	test.it('calculates weights', function() {
	  planetPage.weightEntryPresent().then(function(weight) {
		assert.equal(weight, true, "Weight entry not possible");
	  });
	});
 
	//
	test.it('provides no default weight', function() {
	  planetPage.weightEntryBlank().then(function(weight) {
		assert.equal(weight, '', "Weight started with values");
	  });
	});
});