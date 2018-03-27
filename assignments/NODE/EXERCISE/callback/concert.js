/*
  You must be 18yrs or older.
  You must have a ticket.
*/
function gotoConcert(age, hasTicket, callback){
  if(age < 18){
    callback("There was an error, could be under age");
  }else if(hasTicket === false){
    callback("This guy has no ticket");
  }else{
    setTimeout(function(){
      callback("Please enter and take your seat");
    }, 1000)
  }
}

function entrance(message){
  console.log(message);
}

gotoConcert(18, true, entrance);