const EventEmitter = require('events');
const myEmitter = new EventEmitter();

let packsOfSugar = 0;

function adding(){
	packsOfSugar++;
	console.log(packsOfSugar + " pack(s) of sugar added");
	if(packsOfSugar == 2){
		myEmitter.removeListener("addSugar", adding);
	}
}
myEmitter.on("addSugar", adding);
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");