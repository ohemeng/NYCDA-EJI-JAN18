
//the following is in app.js at the same directory as my-module
var myModule = require('./my-module')(`It's a beautiful day.`);
//prints "Hello Sally.  It's a beautiful day."
console.log(myModule.helloPerson1('Sally'));