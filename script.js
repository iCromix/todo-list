var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");


button.addEventListener("click", buttonOnClick);
input.addEventListener("keydown", onKeyPress);

/* Functions */

function buttonOnClick(){
		// Si el input está vacío, no agregar nada, caso contrario, agregar los items.
		if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		// Agregar el botón de eliminar y el de listo
		var delButton = document.createElement("button");
		var tickButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Borrar"));
		delButton.className = "button-del"; //Estilando los botones.
		delButton.addEventListener("click", deleteElement);
		li.appendChild(delButton);
		tickButton.appendChild(document.createTextNode("Hecho"));
		tickButton.className = "button-done"; //Estilando los botones.
		tickButton.addEventListener("click", tickElement);
		li.appendChild(tickButton);
	}
}

function onKeyPress(event) {
	if (event.code === "Enter" && input.value.length !== 0)
	{
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		// Agregar el botón de eliminar y el de listo
		var delButton = document.createElement("button");
		var tickButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Borrar"));
		delButton.className = "button-del"; //Estilando los botones.
		delButton.addEventListener("click", deleteElement);
		li.appendChild(delButton);
		tickButton.appendChild(document.createTextNode("Hecho"));
		tickButton.className = "button-done"; //Estilando los botones.
		tickButton.addEventListener("click", tickElement);
		li.appendChild(tickButton);
	} 
}

function deleteElement(event) {
	event.target.parentNode.remove();
}

function tickElement(event) {
	event.target.parentNode.classList.toggle("done");
}