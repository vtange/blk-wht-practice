var selenium = require('selenium-webdriver');
var chromedriver = require('chromedriver');

describe('calculating weights', function() {
  beforeEach(function(done) {
    this.driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.chrome()).
      build();

    this.driver.get('http://dialogic.herokuapp.com/weight').then(done);
  });

  afterEach(function(done) {
    this.driver.quit().then(done);
  });
	
	
  it('should be on the weight page', function(done) {
    var element = this.driver.findElement(selenium.By.tagName('article'));
 
    element.getAttribute('id').then(function(id) {
      expect(id).toBe('weight');
      done();
    });
  }, 12000);

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
