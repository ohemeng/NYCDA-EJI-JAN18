const EventEmitter = require('events');
const myEmitter = new EventEmitter();


function jubilee(x){
	console.log("Bought salad at Jubilee for " + x.money);
}

function sevenEleven(x){
	console.log("Bought sandwich 711 for " + x.money)
}
myEmitter.on('buyLunch', jubilee);
myEmitter.on('buyLunch', sevenEleven);

myEmitter.emit("buyLunch", {money: 20});

function party(x){
	if(x.age < 18){
		console.log(x.name + ", Orange juice for you");
	}else{
		console.log(x.name + ", Beer for you");
	}
}

myEmitter.on('drinks', party);

myEmitter.emit("drinks", {name: "John", age: 24});
myEmitter.emit("drinks", {name: "Luke", age: 17});
