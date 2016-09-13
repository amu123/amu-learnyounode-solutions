var net = require('net');
var strftime = require('strftime');

console.log(strftime('%F %R', new Date()));

function addZero(num){
	if(num < 10){
		num = "0" + num;
	}

	return num;
}

var server = net.createServer(function(socket){

	var date = new Date();

	var printDate = date.getFullYear() + "-" + addZero(date.getMonth() + 1) + "-" + addZero(date.getDate()) + " " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" 

	// console.log(strftime('%F %R', new Date()))
	console.log(printDate);
	socket.end(printDate);
})
server.listen(process.argv[2]);