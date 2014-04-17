// JavaScript Document

(function(){

function Person(isName, Ob_phoneNumber){
	
	this.name = isName;
	this.phoneNumber = Ob_phoneNumber.getNumber();
	
	Person.prototype.sendSMS = function(OjectPerson, sendMassage){
		console.log("[" + this.name + "]" + OjectPerson.name + "에게" + sendMassage + "메시지를 보냈습니다");
		console.log(OjectPerson.phoneNumber + "(" +getType(Ob_phoneNumber) + ")"+"->" + this.phoneNumber + ":" + sendMassage);
		OjectPerson.getSMS(OjectPerson, sendMassage);
	};
	
	Person.prototype.getSMS = function(OjectPerson, receiveMassage){
	console.log("[" + OjectPerson.name + "]" + this.name + "에게" + receiveMassage + "메시지를 받았습니다");
	};
}

window.Person = Person;

})();