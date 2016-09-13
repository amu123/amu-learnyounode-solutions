var fs = require('fs');

var filename = process.argv[2]; 

var file = fs.readFile(filename, function callback (err, data) {  

if(err) 
	throw err
else{
	var contents = data.toString();

	console.log(contents.split("\n").length - 1)
}

});

