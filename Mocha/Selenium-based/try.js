var firefox = require('selenium-webdriver/firefox');
var binary = new firefox.Binary('C:/Portable/FirefoxPortable/FirefoxPortable.exe');
var options = new firefox.Options().setBinary(binary);
var driver = new firefox.Driver(options);
driver.get('http://iqdb.org/');
