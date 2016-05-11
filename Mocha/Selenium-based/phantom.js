var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;
 
var childArgs = [
  path.join(__dirname, 'loadspeed.js'),
  'http://www.vtange.net'
]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results 
	console.log(stdout);
})