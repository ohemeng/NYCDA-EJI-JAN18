//this is in my-module.js
var extraInformation;
function helloWorld(){
    return "Hello world!";
};
function helloPerson(name){
    return `Hello ${name}. ${extraInformation}`;
};
module.exports = function(info){
    extraInformation = info;
    return {
        helloWorld: helloWorld,
        helloPerson: helloPerson
    };
};
//the following is in app.js at the same directory as my-module
var myModule = require('./my-module')(`It's a beautiful day.`);
//prints "Hello Sally.  It's a beautiful day."
console.log(myModule.helloPerson('Sally'));