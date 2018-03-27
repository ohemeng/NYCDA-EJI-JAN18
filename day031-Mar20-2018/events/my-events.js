const EventEmitter = require('events');
const myEmitter = new EventEmitter();


// myEmitter.on('sometrigger', function(x){
// 	console.log("Hey! I heard the trigger " + x.name);
// });

// myEmitter.emit('sometrigger', {name: "John"});

function jubilee(x){
	console.log("buy me $"+ x[1].money + " of "+x[1].food);
}

myEmitter.on('buyfood', jubilee);
myEmitter.emit('buyfood', [{money: 10, food: "sandwiches"}, {money: 33, food: "pies"}]);
// myEmitter.emit('buyfood', {money: 20, food: "apples"});
// myEmitter.emit('buyfood', {money: 30, food: "pies"});