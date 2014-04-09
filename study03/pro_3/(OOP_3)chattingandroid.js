// JavaScript Document

(function(){
	
	function AndroidPhone(insertphoneNumber){
		
		Phone.call(this);

		var hasPhoneNumber = insertphoneNumber;
				
		AndroidPhone.prototype.getNumber = function(){
		return (hasPhoneNumber === undefined) ? null : hasPhoneNumber;
		};
	}
	
	AndroidPhone.prototype = new Phone();
	AndroidPhone.prototype.constructor = AndroidPhone;
	
	
	window.AndroidPhone = AndroidPhone;
	
})();