// var s = '* * * * * * * * * *';
// var int = setInterval(function(){
//   console.log(s);
//   s=s.split(" ")
//   s.pop();
//   s=s.join(" ");
//   if (s.length === 0) {
//     clearInterval(int);
//   }
// },1000);


let s = ("* ").repeat(10);
let int = setInterval(function(){
  s=s.split(" ");
  s.pop();
  s=s.join(" ");
    console.log(s);
  if (s.length === 1) {
    clearInterval(int);
  }
},1000);