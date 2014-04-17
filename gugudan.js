// JavaScript Document

function gugudan(inputGugudanValue){
	
	var gugudanValue = parseInt(inputGugudanValue);
	
	store = [];
	
	for(i =1; i<=9; i++){
		store[i] = "<li>" + gugudanValue + "*" +i + "=" + gugudanValue*i + "</li>";
	}
	
	delete_div();
	create_div(store);
}

function delete_div(){
	
	var get_div = document.getElementById('gugudan');
	
		if(get_div!=null){
			get_div.remove();
		}	
}

function create_div(receiveValue){
	
	var div  = document.createElement('div');
	
	div.id = "gugudan";
	
	document.body.appendChild(div);
	
	var outputGugudan = nuNumberFormat(receiveValue);

	div.innerHTML =	outputGugudan; 
}

function nuNumberFormat(num){
	
	str = String(num);

	return str.replace(/,/gi,'');
}

