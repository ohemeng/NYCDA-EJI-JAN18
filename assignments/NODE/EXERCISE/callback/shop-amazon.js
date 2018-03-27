/*
  Exercise: Shopping online at Amazon
• Write a function that takes three parameters: 
  selectItem, hasKindle, and callback.
• selectItem is mandatory. 
  If it is empty, null, or undefined, 
  call back with an Error stating that there is an error.
• If the selectItem is "ebook" and does not have kindle, 
  call back with an Error stating that kindle is requierd.
• Otherise, checkout the item, simulating the time for 
  checking out with a setTimeout of one second. 
  Checkout with a message.
*/

function shopAmazon(selectItem, hasKindle, callback){
  if(selectItem === "" || selectItem === null || selectItem === undefined){
    callback("Error, please select an item");
  }else if(selectItem === "ebook" && hasKindle == false){
    callback("Sorry, for ebook kindle is required");
  }else{
    setTimeout(function(){
      callback(`Thanks for buying ${selectItem} at Amazon`);
    }, 1000)
  }
}
function checkout(message){
  console.log(message);
}

shopAmazon("ebook", true, checkout);