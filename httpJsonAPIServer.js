var http = require('http');
var url = require('url');

var routes = {

	"/api/parsetime" : function(parsedURL){
		var date = new Date(parsedURL.query.iso);
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	},

	"/api/unixtime" : function(parsedURL){
		var UnTime = (new Date(parsedURL.query.iso)).getTime();
		return { 
			unixtime: UnTime
		};
	}
}

var server = http.createServer(function(req, res){
	var parsedURL = url.parse(req.url, true);
	var resource = routes[parsedURL.pathname];

	console.log(resource);

	if (resource) {
    	res.writeHead(200, {"Content-Type": "application/json"});
    	res.end(JSON.stringify(resource(parsedURL)));
	}
	else {
	    res.writeHead(404);
	    res.end();
  	}
});
server.listen(process.argv[2]);