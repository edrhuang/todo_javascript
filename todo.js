window.onload = function(){

var input = document.getElementById("user_input")
var button = document.getElementById("add_todo");
var list = document.getElementsByTagName("ul")[0];

button.onclick = function(){
	if (input.value !== ''){
		var text = input.value;
	var newItem = document.createElement("li");
	newItem.innerHTML = text;
	list.appendChild(newItem);
	input.value = "";
	}
	
}	

}