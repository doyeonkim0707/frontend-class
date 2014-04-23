//함수선언

/**
	https://gist.github.com/tkissing/1347239
*/
var template  = function(a,b) { // a: template string, b: Object or Array with values to fill in
    // coerce a to a string
    return(a+'').replace(
            // search for anything with a mustache around it
            /\{\{([^{}]+)}}/g,
            function(c,d) { // c will be the complete placeholder, d the part between the mustaches
                // b is optional (but if passed, must be a type that is a valid operand for "in"
                return d in (b||{})
                        // if d is a method of b, call it, otherwise return its value
                        ? (/^f/.test(typeof b[d]) ? b[d]() :b[d] )
                        // if d is not a member of b, don't replace anything to allow nested calls like
                        // mstc(mstc(tmpl, obj), anotherObj)
                        : c;
            }
    );
};

/**
	https://github.com/niceaji/javascript-study/blob/gh-pages/doc/ajax.md
*/
function callAjax(url, callback){
	var xmlhttp;
	// compatible with IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			callback(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function getDom(id){
	return document.getElementById(id);
}

function callbackStudentAjax(responseText){

	// string 을 json 으로 변환
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	var studentList = JSON.parse(responseText);
	var templateStringNews = getDom('boxTemplateNews').innerHTML;
    var templateStringEnter = getDom('boxTemplateEnter').innerHTML;
    var templateStringSports = getDom('boxTemplateSports').innerHTML;
	var parseString = [];
	var student = '';
    
	for(i=0; i<studentList.length; i++ ){
		student = studentList[i];
        
        switch(i) {
            case 0 :
                for(var j=0; j<studentList[i].news.length; j++){
		          parseString.push( template(templateStringNews, 
                                             {article_link: studentList[i].news[j].newsId, 
						 summary_article: studentList[i].news[j].title}  ) );   
                }
                getDom('container_news').innerHTML = parseString.join("");
                parseString = [];
                break;
            case 1 :
                for(var j=0; j<studentList[i].enter.length; j++){
		          parseString.push( template(templateStringEnter, 
                                             {article_link:studentList[i].enter[j].newsId,
						 summary_article: studentList[i].enter[j].title}  ) );
                }
                
                getDom('container_Enter').innerHTML = parseString.join("");
                parseString = [];
                 break;
            case 2 :
                for(var j=0; j<studentList[i].sports.length; j++){
                  parseString.push( template(templateStringSports,
                                             {article_link:studentList[i].sports[j].newsId,
						  summary_article: studentList[i].sports[j].title}  ) );
                }
                getDom('container_Sports').innerHTML = parseString.join("");
                 break;
        }
	}

}

function start(){
	callAjax('student.js', callbackStudentAjax);
}

//시작 
start();
