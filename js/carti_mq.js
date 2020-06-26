// pt a pastra responsivitatea site-ului
if(window.matchMedia("(max-width:1000px)").matches)
{
	document.getElementById("carti").addEventListener("click", tappedCarti);
	document.getElementById("scheme_tap").addEventListener("click", tappedScheme);
}
function minimizeMenu()
{
	document.getElementById("div_navbar").style.visibility = "hidden";
	document.getElementById("arrow").style.visibility = "hidden";
	document.getElementById("arrow_down").style.visibility = "visible";
}
function maximizeMenu()
{
	document.getElementById("div_navbar").style.visibility = "visible";
	document.getElementById("arrow").style.visibility = "visible";
	document.getElementById("arrow_down").style.visibility = "hidden";
}

// functia e apelata cand apasa pe elementul "Carti"
function tappedCarti()
{
	let cartiHartie = document.createElement("li");
	cartiHartie.innerHTML = "<a href=\"carti\"> Carti pe hartie</a>";
	cartiHartie.id = "carti_hartie";
	let cartiOnline = document.createElement("li");
	cartiOnline.innerHTML = "<a href=\"carti\"> Carti electronice</a>";
	cartiOnline.id = "carti_online";
	let list = document.getElementById("items_navbar");
	list.insertBefore(cartiOnline, document.getElementById("scheme"));
	list.insertBefore(cartiHartie, document.getElementById("carti_online"));
	
	if(currentColor === "blue")
	{
		cartiHartie.style.backgroundColor = "deepskyblue";
		cartiOnline.style.backgroundColor = "deepskyblue";
	}
	else if(currentColor === "red")
	{
		cartiHartie.style.backgroundColor = "#c70039";
		cartiOnline.style.backgroundColor = "#c70039";
	}
	else if(currentColor === "greenish")
	{
		cartiHartie.style.backgroundColor = "#01d28e";
		cartiOnline.style.backgroundColor = "#01d28e";
	}
	this.removeEventListener("click", tappedCarti);
	this.addEventListener("click", tappedCarti_remove);	
}
// functia e apelata in acelasi caz ca mai sus, dar doar dupa ce meniul drop-down de la carti a fost afisat
function tappedCarti_remove()
{
	document.getElementById("items_navbar").removeChild(document.getElementById("carti_hartie")); 
	document.getElementById("items_navbar").removeChild(document.getElementById("carti_online"));
	
	this.removeEventListener("click", tappedCarti_remove);
	this.addEventListener("click", tappedCarti);
}

// functiile astea doua seamana cu cele de deasupra lor
function tappedScheme()
{
	let normalButton = document.createElement("li");
	normalButton.innerHTML = "Normal";
	normalButton.id = "ns";
	normalButton.style.backgroundColor = "deepskyblue";
	normalButton.addEventListener("click", () => {clickedStyleChange(1); setInputColor(currentColor);});
	let redButton = document.createElement("li");
	redButton.innerHTML = "Rosu";
	redButton.id = "rs";
	redButton.style.backgroundColor = "#c70039";
	redButton.addEventListener("click", () => {clickedStyleChange(2);  setInputColor(currentColor);});
	let greenButton = document.createElement("li");
	greenButton.innerHTML = "Verdeish";
	greenButton.id = "gs";
	greenButton.style.backgroundColor = "#01d28e";
	greenButton.addEventListener("click", () => {clickedStyleChange(3);  setInputColor(currentColor);});
	
	let list = document.getElementById("items_navbar");
	list.insertBefore(normalButton, document.getElementById("right_li"));
	list.insertBefore(redButton, document.getElementById("right_li"));
	list.insertBefore(greenButton, document.getElementById("right_li"));
	this.removeEventListener("click", tappedScheme);
	this.addEventListener("click", tappedScheme_remove);
}

function tappedScheme_remove()
{
	let list = document.getElementById("items_navbar");
	list.removeChild(document.getElementById("ns"));
	list.removeChild(document.getElementById("rs"));
	list.removeChild(document.getElementById("gs"));
	
	this.removeEventListener("click", tappedScheme_remove);
	this.addEventListener("click", tappedScheme);
}