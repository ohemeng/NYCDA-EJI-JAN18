/*
Exercise: Drink Refill
• Write a function that takes three parameters: 
  drinkType, hasIce, and callback.
• drinkType is mandatory. 
  If it is empty, null, or undefined, 
  call back with an Error stating that it is
• If the drink is "lemonade" and 
  does not have ice, call back with an Error stating 
  that drink requires ice.
• Otherise, refill the drink, 
  simulating the time for refill with a setTimeout 
  of one second. Call back with a message
*/

function drinks(drinkType, hasIce, callback){
  if(drinkType === "" || drinkType === null || drinkType === undefined){
    callback("Error! no type of drink indicated");
  }else if(drinkType === "lemonade" && hasIce === false){
    callback("Error! drink requires ice");
  }else{
    setTimeout(function(){
      callback(`Refilled your glass of ${drinkType}`)
    }, 1000)
  }
}

function refill(message){
  console.log(message);
}

drinks("wine", false, refill);
