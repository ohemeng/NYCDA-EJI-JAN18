var username = document.getElementById('username');
var password = document.getElementById('password');
var submit = document.getElementById('submit');
var h1 = document.getElementsByTagName('h1')[0];
var checkNumber = false;

submit.onclick = function(){
	var user = username.value;
	var pass = password.value;
	console.log(pass);
	checkUsername(user);
	if(pass == '12345678' && checkNumber == true){
		h1.innerHTML = "You met the criteria";
	}else{
		h1.innerHTML = "No, You did not meet the criteria";
		alert("Incorrect")
	}
}

function checkUsername(x){
	for (var i=0; i < x.length; i++){
		if(x[i] >= 0 || x[i] <= 9 ){
			return checkNumber = true;
		}
	}
}