var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var result = document.getElementById('result');

btn1.addEventListener('click', function(){
	result.innerHTML = "I'm right";
})

btn2.addEventListener('click', function(){
	result.innerHTML = "No, I'm right";
})