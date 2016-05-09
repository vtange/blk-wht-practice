var selenium = require('selenium-webdriver');
var chromedriver = require('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000;

describe('test tutorial', function() {
	
	// Open Chrome and get website before each test
	  beforeEach(function(done) {
		this.driver = new selenium.Builder().
		  withCapabilities(selenium.Capabilities.chrome()).
		  build();

		this.driver.get('http://dialogic.herokuapp.com/weight').then(done);
	  });

	// Close Chrome after each test
	  afterEach(function(done) {
		this.driver.quit().then(done);
	  });

	describe('calculating weights', function() {

	// check page contents with url
	  it('should be on the weight page', function(done) {
		var element = this.driver.findElement(selenium.By.tagName('article'));

		element.getAttribute('id').then(function(id) {
		  expect(id).toBe('weight');
		  done();
		});
	  });

	// interact with webpage and confirm calculation
	  it('will calculate a weight of 200', function(done) {
		var myWeight = this.driver.findElement(selenium.By.id('wt'));
		myWeight.sendKeys('200');

		var calculate = this.driver.findElement(selenium.By.id('calculate'));
		calculate.click();

		var mercuryWeight = this.driver.findElement(selenium.By.id('outputmrc'));
		mercuryWeight.getAttribute('value').then(function(value) {
		  expect(value).toBe('75.6');
		  done();
		});
	  });

	});
});