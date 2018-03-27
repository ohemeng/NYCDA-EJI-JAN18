var countdown = 11;

function showDescendingString(str){
    countdown--;
    return str.repeat(countdown)
}

var startUp = setInterval(function(){
    console.log(showDescendingString("*"));
}, 1000)

setTimeout(function(){
    clearInterval(startUp);
}, 11000);