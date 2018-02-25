// Quick Tutorial Drills

//Find even and odd numbers - using mod(%)
function evenOrOdd(x){
    if(x % 2 === 0){
      return x + " is an even number";
    }else{
      return x + " is an odd number";
    }
}
console.log(evenOrOdd(5));

//-------------------------------------
var arr = ["manhattan", "brooklyn", "hoboken"];

var numArr = [20, 32, 5, 12];

//Find the sum
function sum(x){
  let sum = 0;
  for(let i=0; i< x.length; i++){
    sum = sum + x[i];  //add number to sum
  }
  return sum;
}

console.log(sum(numArr));

//Find the average------------------------
function avg(x){
  let avg = 0;
  let sum = 0;
  for(let i=0; i<x.length; i++){
    sum = sum + x[i];
  }
  return sum / x.length;
}

console.log(avg(numArr));

//Find number less than 20 - sequential search
function lessTwenty(x){
  let newArr = [];
  for(let i=0; i<x.length; i++){
    if(x[i] < 20){
     newArr.push(x[i]);
    }
  }
   return newArr + " are #s less than 20";
}
console.log(lessTwenty(numArr));

//Find the max number -------------------
function maxNum(x){
  let max = x[0];
  for(let i=1; i<x.length; i++){
    if (max < x[i]){
     max = x[i];
    }   
  }
  return max + " is the max number";
}
console.log(maxNum(numArr));

//Find the min number -------------------
function minNum(x){
  let min = x[0];
  for(let i=1; i<x.length; i++){
    if(min > x[i]){
      min = x[i];
    }
  }
  return min + " is the minimum number";
}
console.log(minNum(numArr));
//Print * characters 10 times --------------------
function stars(x){
  let str = "";
  for(let i=1; i<=10; i++){
   str = str + x;
  }
  return str;
}
console.log(stars("x"))

//Print 10 * characters 10 times
function tenrows(x){
  let str="";
  for(let i=1; i<=10; i++){
    str = str + "\n";
    for(let j=1; j<=10; j++){
      str =  str + x;
    }
  }
  return str;
}
console.log(tenrows("*"));

//Print pyramid * characters 1 x 10 times -------------
function pyramid(x){
  let str = "";
  for(let i=1; i<=10; i++){
     str = str + "\n";
    for(let j=1; j<=i; j++){
      str = str + x;
    }
  }
  return str;
}
console.log(pyramid("*"));

//Print upside-down pyramid -------------------
function pyramidDown(x){
  let str = "";
  for(let i=1; i<=10; i++){
     str = str + "\n";
    for(let j=10; j>=i; j--){
      str = str + x;
    }
  }
  return str;
}
console.log(pyramidDown("*"));

//Print timed upside-down pyramid ---------------------
function pyramidTimed(x){
  var x = "M"
setTimeout(nextrow, 1000);
  var str = "";
 var nextrow = function(){
  //for(let i=1; i<=10; i++){
     str = str + "\n";
    for(let j=10; j>=1; j--){
      str = str + x;
      console.log(str);
    }
   //}
 }
}
//console.log(pyramidTimed("v"));
//setTimeout(pyramidTimed, 1000);
pyramidTimed();