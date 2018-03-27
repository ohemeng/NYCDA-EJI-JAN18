//This elevator takes one tenant up, one at a time.
const events = require('events');
const eventEmitter = new events.EventEmitter();
var currentFloor = 1;
var i = 0;
var tenants = [
	{ name: 'Jerry', destination: 4 },
	{ name: 'Kramer', destination: 10 }, 
	{ name: 'Newman', destination: 2 }
]

console.log("We are on floor 1, going up!")
//Event handler for up:
var upEventHandler = function () {
	if(i < tenants.length){
	  const upElevator = setInterval(function(){
		currentFloor++;

		console.log('We are on! '+ currentFloor);
			console.log('tenant onboard ' + tenants[i].name);
			if(tenants[i].destination === currentFloor ){
				console.log("Floor "+ currentFloor + ", " + tenants[i].name + " please get off");
				eventEmitter.emit('down');
				eventEmitter.removeListener('up', upEventHandler);
				clearInterval(upElevator);
				return true;
			}
		}, 1000);
	}else{
		console.log("Completed. All tenants are up in their room");
	}
}

//Event handler for down
var downEventHandler = function () {
  console.log('Going Down!');
  const downElevator = setInterval(function(){
  	currentFloor--;
  	if(currentFloor == 0){
  		clearInterval(downElevator);
			if(i === tenants.length){
				eventEmitter.removeListener('up', upEventHandler);
			}
			i++;
			upEventHandler();
			return true;
  	}
  	console.log("Now on "+ currentFloor);
  }, 1000)
}

//Assign the event handler to an event:
eventEmitter.on('up', upEventHandler);

eventEmitter.on('down', downEventHandler);

//Fire the 'up' event:
eventEmitter.emit('up');
