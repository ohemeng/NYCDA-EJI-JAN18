const Events = require('events');
const emitEvent = new Events();

function greeter(x){
	if(x.age < 18){
		console.log("Greeter A, says welcome "+ x.name);
	}else{
		console.log("Greeter B, says welcome "+ x.name)
	}
}

emitEvent.on('knock', greeter);

emitEvent.emit('knock', {name: "John", age: 16});
emitEvent.emit('knock', {name: "Jane", age: 18});
emitEvent.emit('knock', {name: "Mary", age: 26});