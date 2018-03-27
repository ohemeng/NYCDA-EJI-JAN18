const EventEmitter = require('events');
let packsOfSugar = 0;

const myEmitter = new EventEmitter();

function addSugar(){
	packsOfSugar++;
	console.log("sugar added. Total "+ packsOfSugar);
	if(packsOfSugar == 2){
		myEmitter.removeListener('sugar', addSugar);
	}
}

myEmitter.on('sugar', addSugar)
myEmitter.emit('sugar');
myEmitter.emit('sugar');
myEmitter.emit('sugar');
myEmitter.emit('sugar');