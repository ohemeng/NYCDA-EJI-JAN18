var h1 = document.getElementsByTagName('h1')[0];

// document.addEventListener('keypress', function(e){
// 	console.log(e.which);
// 	var x = e.which;
// 	var y = String.fromCharCode(x);  
// 	console.log(y); 
// 	h1.innerHTML = y;
// })
// or use below

document.onkeypress = (function(e){
	console.log(e.which);
	var x = e.which;
	var y = String.fromCharCode(x);  
	console.log(y); 
	h1.innerHTML = y;
})