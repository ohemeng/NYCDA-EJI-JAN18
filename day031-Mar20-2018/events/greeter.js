const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function welcome18below(x){
	if(x.age < 18){
		console.log(`I am GreeterA, welcome to our party, ${x.age} year old ${x.name}.`);
	}
}

function welcome18plus(x){
	if(x.age >= 18){
		console.log(`I am GreeterB, welcome to our party, ${x.age} year old ${x.name}.`);
	}
}

myEmitter.on("doorBell", welcome18below); //ListenerA for 18-
myEmitter.on("doorBell", welcome18plus); //ListenerB for 18+

myEmitter.emit("doorBell", {name: "John", age: 22});
myEmitter.emit("doorBell", {name: "Jane", age: 17});
myEmitter.emit("doorBell", {name: "Mary", age: 16});
myEmitter.emit("doorBell", {name: "Luke", age: 38});
myEmitter.emit("doorBell", {name: "Lisa", age: 18});