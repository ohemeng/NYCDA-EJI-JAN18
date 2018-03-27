let ops = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);

if(ops === "add"){ 
	console.log(num1 + num2);
}
if(ops === "subtract"){
	console.log(num1 - num2);
}
