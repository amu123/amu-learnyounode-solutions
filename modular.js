var path = require('path');
var myModule = require('./module.js')

var pathname = process.argv[2]; 
var filterExtension = process.argv[3];

myModule(pathname, filterExtension, function callback (err, list) { 

	if(err)
		throw err;
	else {
		list.forEach(function (file) {
        	console.log(file);
    	})
	}
});