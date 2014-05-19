var API_URL = "http://apis.daum.net/search/web?\
q={query}&\
apikey=592f41c63633b2cb0ceb8d2904918d99f51f3ad0&\
output=json&\
result={result}&\
pageno={pageno}&\
callback={callback}";

var pageno = 1;

function callDaumApi(){
	
	var query = $('#query').val();
	var url = API_URL.replace('{query}',query)
					.replace('{callback}','?')
					.replace("{pageno}",pageno)
					.replace("result", 10);
	
	$.ajax(url,{
		cache : true,
		dataType : 'jsonp',
		complete  : function(jqXHR, status){
			var data = jqXHR.responseJSON;
			var items = data.channel.item;
			var list = [];
			
			$.each(items, function(idx, value){
					var searchedStr = removeTags(value.title);
					var li = $("<li>").html(searchedStr).appendTo("#result");
			});
			
			$('#moreButton').css({'display': 'block'});
		}
	});
}


function removeTags(input) {
	
	var leftTagMv = input.replace(/&lt;b&gt;/g, "");
	var rightTagMv = leftTagMv.replace(/&lt;\/b&gt;/g, ""); 
	
    return rightTagMv; 
};


$('#moreButton').on("click", function (event) {
	
	pageno++;
	callDaumApi();
	
});

$('#searchForm').on("submit", function(event){	
	
	$('#result').empty();
	callDaumApi();
	return false;
	
});