/*
Make a 911 call with 3 requirements.
Your phone must be charged else can't make call.
You should dial 911 or 911-Emergency in your phone.
Dial contact.
*/

function makeCall(contact, isCharged, callback){
  if(!isCharged){
    callback("Phone is not charged");
  }else if(contact != "911"){
    callback("You need to dial 911 or have a 911 contact");
    }else{
      setTimeout(function(){
        callback("Calling 911...");
      },1000)
   }
}

makeCall("911", true, function(message){
  console.log(message);
});

