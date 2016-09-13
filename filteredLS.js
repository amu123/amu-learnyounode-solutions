var fs = require('fs');
var path = require('path');

var pathname = process.argv[2]; 

fs.readdir(pathname, function callback (err, list) { 

	if (err) 
		throw err
	else {
		list.forEach(function (file) {
	    if (path.extname(file) === '.' + process.argv[3])
	      console.log(file)
  		})
	}
	
})