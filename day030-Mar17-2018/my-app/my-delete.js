var fs = require('fs');
fs.unlink('./test.txt', function(err){
    if(err){
        console.log(`an error occurred: ${err}`);
        throw err;
		} 
});