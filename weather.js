var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=2de143494c0b295cca9337e1e96b00e0';

module.exports = function(callback){
	
	request({
	
	url: url,
	json: true
}, function (error, response, body) {
	
	if(error){
		callback('Unable to fetch weather !');
	} else {
	
		//console.log(JSON.stringify(body,null,4));	
		
		callback('It\'s' + ' ' + (body.main.temp-32)/1.8000 + ' in ' + body.name);
		
	}
	
});
}