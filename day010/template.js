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
var dateText = document.createTextNode("Jan 30, 2018");
date.appendChild(dateText);
document.body.appendChild(date);

var image = document.createElement("img");
image.setAttribute("src", "http://www.27east.com/assets/Article/93044/senior%20center%20and%20coding%20032.JPG");
document.body.appendChild(image);

var para = document.createElement("p");
document.body.appendChild(para);
document.getElementsByTagName("p")[0].innerHTML = `Lorem ipsum dolor sit amet, 
consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;



document.body.style.backgroundColor = "#efefef";
