var selenium = require('selenium-webdriver'); 
var driver = new selenium.Builder()
     .forBrowser('firefox')
     .build(); driver.get('http://iqdb.org/');