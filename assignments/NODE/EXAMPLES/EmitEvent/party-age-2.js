const Events = require('events');
const emitEvent = new Events();

function greeter1(x){
		console.log("Greeter A, says welcome "+ x.name + ", you are young");
}
function greeter2(x){
	console.log("Greeter B, says welcome "+ x.name);
}

emitEvent.on('knock', (x) => {(x.age < 18) ? greeter1(x) : greeter2(x)});


emitEvent.emit('knock', {name: "John", age: 16});
emitEvent.emit('knock', {name: "Jane", age: 18});
emitEvent.emit('knock', {name: "Mary", age: 26});
emitEvent.emit('knock', {name: "Sam", age: 17});


