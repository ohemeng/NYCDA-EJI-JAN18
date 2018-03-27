const Events = require('events');
const myEmitter = new Events();

function openDoor(x){
	console.log(`Welcome, ${x.name}`)
}

myEmitter.on('knock', openDoor);

myEmitter.emit('knock', {name: 'John', age: 24});
myEmitter.emit('knock', {name: 'Jane', age: 22});
myEmitter.emit('knock', {name: 'Mary', age: 26});