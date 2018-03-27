//Create Intersection and Difference Arrays
var arr1 = [3, 2, 4, 5, 9];
var arr2 = [6, 3, 5, 7, 8];

function uniqueArray(x, y){
  var newArray = [];
   for(let i in x){
     for(let j in y){
      if(x[i] == y[j]){
        newArray.push(y[j]);
      }
     }
   }
  return newArray;
}

console.log(uniqueArray(arr1, arr2));


//Creating a difference array
var commonArr = uniqueArray(arr1, arr2);
//console.log(arr1.concat(arr2));


function uncommArray(x, y){
  var countlength;
  var countArr = [];
  var newArray2 = [];
  var catArray = arr1.concat(arr2);
   for(let i in commonArr){
     for(let j in catArray){
      if(commonArr[i] != catArray[j]){
        newArray2.push(catArray[j]);
      }
    
     }
     catArray = newArray2;
     mycount = catArray.length;
     countArr.push(mycount);
     countlength = countArr[countArr.length-2]
     //console.log(mycount);
   }
  return catArray.slice(countlength);
}

console.log(uncommArray(arr1, arr2));
