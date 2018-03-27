const events = require('events');
const eventEmitter = new events.EventEmitter();

function sayWhat(x){
	console.log("I did that!");
	console.log(x.name);
}

eventEmitter.on('didit', sayWhat);

eventEmitter.emit('didit', {name: "Francis"});