var selected_menu = 0;
var content_count = 0;

var selected_class_name = "selected";

var menus = document.getElementById("tab_menus").getElementsByTagName("li");
var dives = document.getElementsByTagName("div");
var contents = new Array;

for (var i=0; i<dives.length; i++) {
	var div = dives[i];

	if (div.className == "contents") {
		if (selected_menu == content_count) {
			div.style.display = "block";
			menus[content_count].className += " " + selected_class_name;
		}
		else {
			div.style.display = "none";
			menus[content_count].className = menus[content_count].className.replace(selected_class_name, "");
		}

		contents.push(div);
		content_count++;
	}
}

for (var i=0; i<menus.length; i++) {
	var quick_link = menus[i];
	quick_link.content_index = i;

	quick_link.onclick = quick_link.onkeypress = function(event) {

		contents[selected_menu].style.display = "none";
		
		menus[selected_menu].className = menus[selected_menu].className.replace(selected_class_name, "");

		contents[this.content_index].style.display = "block";
		this.className += " " + selected_class_name;

		selected_menu = this.content_index;

		return false;
	}
}