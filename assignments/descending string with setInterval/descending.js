// Timed decreasing stars
function myfn(x, y){
  let str = ""
  for(let i=0; i<y; i++){
      str = str + x;
    }
  return str;
}

var num = 11;
var myPrint = setInterval(function(){
  num--;
  console.log(myfn("*", num));
}, 1000);

setTimeout(function(){
  clearInterval(myPrint);
}, 11000);