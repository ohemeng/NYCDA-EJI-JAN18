var span = document.createElement('span'); //for name
var img = document.createElement('img'); //for picture

let jane = {
  fname: "Jane",
  lname: "Seymour",
  age: 66,
  height: "5ft 3in",
  url: "https://pmcdeadline2.files.wordpress.com/2017/09/jane-seymour-headshot.jpg?w=446&h=299&crop=1"
}

let mike = {
  fname: "Mike",
  lname: "Tyson",
  age: 51,
  height: "5ft 10in",
  url: "https://pbs.twimg.com/profile_images/810887013356314624/E1Uu6n58.jpg"
}

var people = [jane, mike];
for (let i = 0; i < people.length; i++){
  var newspan = "span" + i;
  newspan = span.cloneNode(true);
  newspan.innerHTML = "<br><br>" + people[i].fname + " " + people[i].lname + ", " + people[i].age+ "<br>";
  document.body.appendChild(newspan);
  
  var newimg = "img" + i;
  newimg = img.cloneNode(true);
  newimg.setAttribute("src", people[i].url);
  document.body.appendChild(newimg);
}