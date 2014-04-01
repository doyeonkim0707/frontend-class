// JavaScript Document

function Phone(name, insertphoneNumber){
		
	var isphoneNumber= insertphoneNumber;
	this.name = name;
	
	Phone.prototype.Call=function(){
		console.log('call');
	};
	
	Phone.prototype.answer=function(){
		console.log('answer');	
	};
	
	Phone.prototype.register=function(toRegisterPhoneNumber){
		
		var regiseredPhoneNumber = 01036264233;
		var PhoneNumber = parseInt(toRegisterPhoneNumber, 1);
		
		if(number != regiseredPhoneNumber){
			console.log('has registered');
		}
		else{
			console.log("can't register");
			this.isphoneNumber = PhoneNumber;
		}
	};
}

