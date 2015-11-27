

var weather = require('./weather.js');
var location = require('./location.js');


var argv = require('yargs')
		
		.option('location', {
			
			alias: 'l',
			demand: false,
			describe: 'location to fetch weather for',
			type: 'string'
		})
		.help('help')
		.argv;




if(typeof argv.l === 'string' && argv.l.length > 0){
	
	//console.log('has location');
	weather(argv.l, function(currentWeather){
	console.log(currentWeather);
	});
}else{
	
	console.log('no location given');
	location(function(location){
		
		if(location){
			weather(location.city, function(currentWeather){
				console.log(currentWeather);
			});
			
		} else{
			
			console.log('unable to guess location');
		}
	});
}

