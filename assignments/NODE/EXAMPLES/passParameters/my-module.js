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
        helloPerson1: helloPerson
    };
};