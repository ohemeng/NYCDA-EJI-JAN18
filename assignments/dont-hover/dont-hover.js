var box = document.getElementById('box');

// box.addEventListener('mouseover', function(){
// 	alert("Don't Hover Over Me");
// or use below

box.onmouseover = (function(){
	alert("Don't Hover Over Me");
})