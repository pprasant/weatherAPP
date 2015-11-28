var request = require('request');



module.exports = function(location){
	
	return new Promise(function (resolve, reject) {
		
		var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=2de143494c0b295cca9337e1e96b00e0';
	
	if(!location){
		return reject('no location provided');
	}
	
	request({
	
	url: url,
	json: true
}, function (error, response, body) {
	
	if(error){
		reject('Unable to fetch weather !');
	} else {
	
		//console.log(JSON.stringify(body,null,4));	
		
		resolve('It\'s' + ' ' + body.main.temp + ' in ' + body.name);
		
	}
	
});
	});
}