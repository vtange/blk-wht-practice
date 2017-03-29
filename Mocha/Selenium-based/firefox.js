//custom-Firefox-location driver
//portable ff doesn't work, native ff will always conflict with existing ffport.
var firefox = require('selenium-webdriver/firefox');
var binary = new firefox.Binary('C:/Portable/FirefoxForTesting/FirefoxPortable.exe');
var options = new firefox.Options().setBinary(binary).useMarionette(true); //marionette req'd for selenium 2.53+
var driver = new firefox.Driver(options);

exports = module.exports = driver;

//USE CHROME 03/28/17-->