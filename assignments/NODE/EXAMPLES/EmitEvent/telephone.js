
 var EventEmitter = require('events');
 //let's track telephone rings and pick up on the second
 var telephone = new EventEmitter();
 var rings = 0;


 //let the listener function be declared as a variable
 var listener = function() {
     //increment the number of rings

rings++;
     console.log("rinnnngggg!!");
     //on the second ring, we pick up
     if(rings == 2){
         //and remove the listener
         telephone.removeListener('phone-ring', listener);
			} 

	};

 telephone.on('phone-ring', listener);

 telephone.emit('phone-ring');
  telephone.emit('phone-ring');
   telephone.emit('phone-ring');
    telephone.emit('phone-ring');
     telephone.emit('phone-ring');
