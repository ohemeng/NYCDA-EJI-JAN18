console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor="khaki";
console.log(document.URL);
console.log(document.head);

console.log(document.getElementById("p1"));
document.getElementById("p1").style.color="red";

console.log(document.getElementsByClassName("para"));
document.getElementsByClassName("para")[1].style.color="blue";

console.log(document.getElementsByTagName("p"));
document.getElementsByTagName("p")[2].style.color="pink";

console.log(document.querySelector("p"));
document.querySelector("#p3").style.color="green";

console.log(document.querySelectorAll("p"));
document.querySelectorAll("p")[4].style.color="cyan";

for(var i=0; i < document.querySelectorAll("p, li").length; i++){
	document.querySelectorAll("p, li")[i].style.border = "2px solid black";
}

document.querySelector("li:nth-child(2)").style.color="red";