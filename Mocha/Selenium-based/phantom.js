var assert = require('assert');
var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
//setup custom phantomJS driver
var phantomjs_exe = require('phantomjs-prebuilt').path;
var customPhantom = selenium.Capabilities.phantomjs();
customPhantom.set("phantomjs.binary.path", phantomjs_exe);
//build custom phantomJS driver
var driver = new selenium.Builder().
       withCapabilities(customPhantom).
       build();
console.log(driver);


var planetPage;
var PlanetPage = require('./main-page.js');
const timeOut = 15000;

//Open Phantom and get website before test
 test.before(function() {
  this.timeout(timeOut);
  planetPage = new PlanetPage(driver);
  planetPage.view();
});

//Close Phantom after test
test.after(function() {
  driver.quit();
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