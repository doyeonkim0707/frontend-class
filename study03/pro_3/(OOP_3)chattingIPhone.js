// JavaScript Document

(function(){
	
	function IPhone(insertphoneNumber){
		
		Phone.call(this);
		
		var hasPhoneNumber = insertphoneNumber;
		
		IPhone.prototype.getNumber = function(){
		return (hasPhoneNumber === undefined) ? null : hasPhoneNumber;
		};	
	}
	
	IPhone.prototype = new Phone();
	IPhone.prototype.constructor = IPhone;
	
	window.IPhone = IPhone;
	
})();