//This elevator takes all tenants up together once.
var events = require('events');
var eventEmitter = new events.EventEmitter();
var currentFloor = 1;
var tenants = [
	{ name: 'Jerry', destination: 4 },
	{ name: 'Kramer', destination: 10 }, 
	{ name: 'Newman', destination: 2 }
]

console.log("We are on floor 1, going up!")
//Create an event handler:
var upEventHandler = function () {
  //console.log('Going Up!');
}

//Assign the event handler to an event:
eventEmitter.on('up', upEventHandler);

//Fire the 'up' event:
const startElevator = setInterval(function(){
	currentFloor++;
	console.log('We are on! '+ currentFloor);
	for(let i in tenants){
		if(tenants[i].destination == currentFloor ){
			console.log("Floor "+ currentFloor + ", " + tenants[i].name + " please get off");
		}
	}
eventEmitter.emit('up');
}, 1000)

setTimeout(function(){
	clearInterval(startElevator)
}, 10000)