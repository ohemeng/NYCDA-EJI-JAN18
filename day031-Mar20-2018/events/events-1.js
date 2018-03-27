const EventEmitter = require('events');

let myEmitter = new EventEmitter();

let counter = 0;

function fn(){
	setTimeout(function(){
	console.log("Switch is on");
	}, 1000)
}

fn();

console.log("two");
console.log("three");



// myEmitter.on('switch', fn) //listener
// myEmitter.emit('switch');  //emitter