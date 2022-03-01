			
//This function creates a new item with a close button X to the list 
			
function newItem() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myNewItem").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	
	if (inputValue == "" || inputValue.length < 3) {
		alert("Please, write something!");
	} else {
		document.getElementById("myList").appendChild(li);
		}
	document.getElementById("myNewItem").value = "";
	sessionStorage.setItem("li", document.getElementById("myNewItem").value);

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
			}
	}
}

//Creates a close button to every list item
	var myList2 = document.getElementsByTagName("li");
	var i;
	for (i = 0; i < myList2.length; i++) {
		var span = document.createElement("span");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		myList2[i].appendChild(span);
	}
			
//Press "X" to delete the item from the list
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
			
//This function is executed if you press "Delete all items" button. The function asks are you sure about that and if pressed "OK", it calls another function which deletes all the list items.
function deleteAll() {
	if (confirm("Are you sure you want to delete all items?")) {
		return deleteItemsAll();
	} 
}
				
function deleteItemsAll() {
	var list = document.getElementById("myList");
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}

