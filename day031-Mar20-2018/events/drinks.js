const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on("serveDrinks", drinks);
myEmitter.emit("serveDrinks", {name: "Jane", age: 23});
myEmitter.emit("serveDrinks", {name: "Luke", age: 17});
myEmitter.emit("serveDrinks", {name: "Matt", age: 32});

function drinks(x){
	if(x.age < 21){
		console.log(x.name + ", you will get orange juice.");
	}else{
		console.log(x.name + ", I will serve you beer.");
	}
}