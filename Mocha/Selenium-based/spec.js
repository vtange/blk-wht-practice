//get browser
var browser = require('./firefox.js');

//test script
var assert = require('assert');
var test = require('selenium-webdriver/testing');

//get pageObjects
var planetPage;
var PlanetPage = require('./main-page.js');

//Mocha default time limit for tests
const timeOut = 15000;

//Open browser and get website before test
 test.before(function() {
  this.timeout(timeOut);
  planetPage = new PlanetPage(browser);
  planetPage.view();
});

//Close browser after test
test.after(function() {
  browser.quit();
});

//Clear cookies after each test -> Force new session
test.afterEach(function() {
  browser.manage().deleteAllCookies();
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