//setup custom phantomJS capability
var selenium = require('selenium-webdriver');
var phantomjs_exe = require('phantomjs-prebuilt').path;
var customPhantom = selenium.Capabilities.phantomjs();
customPhantom.set("phantomjs.binary.path", phantomjs_exe);
//build custom phantomJS driver
var driver = new selenium.Builder().
       withCapabilities(customPhantom).
       build();

exports = module.exports = driver;