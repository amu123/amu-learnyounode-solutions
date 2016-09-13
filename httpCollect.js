var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response){

	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) { 

		if(err)
			throw err
		else {
			/* ... */
			console.log(data.toString().length);
			console.log(data.toString()) 
		}

	})) 

}).on('error', function(e){
	console.log("Got error ", e.message);
});