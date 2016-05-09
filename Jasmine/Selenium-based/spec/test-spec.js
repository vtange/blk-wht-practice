var selenium = require('selenium-webdriver');

describe('calculating weights', function() {
  beforeEach(function(done) {
    this.driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.firefox()).
      build();

    this.driver.get('http://dialogic.herokuapp.com/weight').then(done);
  });

  afterEach(function(done) {
    this.driver.quit().then(done);
  });
});