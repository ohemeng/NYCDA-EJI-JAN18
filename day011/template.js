var h1 = document.createElement("h1");
var h1Text = document.createTextNode("The Power of Coding");

h1.appendChild(h1Text);
h1.style.color = "red";
document.body.appendChild(h1);

var h3 = document.createElement("h3");
var h3Text = document.createTextNode("Introducing Kids to Coding at an Early Age");
h3.appendChild(h3Text);
document.body.appendChild(h3);

var author = document.createElement("span");
var authorText = document.createTextNode("Jane Smith");
author.appendChild(authorText);
document.body.appendChild(author);
var br = document.createElement("br");
document.body.appendChild(br);
var date = document.createElement("span");
var dateText = document.createTextNode("Feb 1, 2018");
date.appendChild(dateText);
document.body.appendChild(date);

var br = document.createElement("br");
document.body.appendChild(br);

var image = document.createElement("img");
image.setAttribute("src", "https://timedotcom.files.wordpress.com/2016/09/gettyimages-4975998901.jpg");
document.body.appendChild(image);
image.style.width = "600px";
image.style.marginTop = "20px";

var br = document.createElement("br");
document.body.appendChild(br);

var para = document.createElement("p");
document.body.appendChild(para);
document.getElementsByTagName("p")[0].innerHTML = `Lorem ipsum dolor sit amet, 
consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

var br = document.createElement("br");
document.body.appendChild(br);

var btn = document.createElement('button');
btn.innerHTML = "Submit";

document.body.appendChild(btn);

let para2 = document.createElement("p");
para2.innerHTML = "These kids are doing very well";

btn.onclick = function(){
	document.body.replaceChild(para2, para);
}

document.body.style.backgroundColor = "oldlace";


