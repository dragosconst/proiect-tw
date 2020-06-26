/**
* Fisier javascript pt pagina principala a site-ului.
*/ 
let currentColor = "blue";
if(localStorage.getItem("colorSch") != null)
	currentColor = localStorage.getItem("colorSch");
if(currentColor !== "blue")
	setColorOnStart(currentColor);
let currentImgState = "shown";
if(localStorage.getItem("imgState") != null)
{
	currentImgState = localStorage.getItem("imgState");
}
if(currentImgState !== "shown")
	hideOrShowImages(currentImgState, false);
document.getElementById('hideimg').addEventListener('click', () => {hideOrShowImages();});

let currentTabState = "shown";
if(localStorage.getItem("tabState") != null)
{
	currentImgState = localStorage.getItem("tabState");
}
if(currentImgState !== "shown")
	hideOrShowTabs(currentImgState, false);
document.getElementById('hidetabs').addEventListener('click', () => {hideOrShowTabs();});
// se ocupa rapid de click pt scheme
function clickedStyleChange(col_ind)
{
	if(col_ind == 1) changeSiteColor("blue");
	if(col_ind == 2) changeSiteColor("red");
	if(col_ind == 3) changeSiteColor("greenish");
}
// functia asta se ocupa de schimbarea culorilor prin site
function changeSiteColor(color)
{
	if(color !== "red" && color !== "blue" && color !== "greenish") // daca cumva am trimis ceva aiurea ca argument
	{
		console.log("Uhhh ai introdus cumva culoarea gresita...");
		return;
	}
	if(color == currentColor) // nu are sens sa incerc sa schimb culoarea daca deja culoarea curenta e cea pe care am dat click
	{
		console.log("Nothing to change");
		return;
	}
	else
	{	
		// mai intai ma asigur ca stochez in memorie schimbarea de culoare
		currentColor = color;
		localStorage.setItem("colorSch", currentColor);// mai intai ma asigur ca stochez in memorie schimbarea de culoare
		if(color === "red")
		{	
			let new_gradient = "linear-gradient(#511845, #900c3f)"; // schimb gradientul
			document.body.style.background = new_gradient;
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundAttachment = "fixed"; 
			document.getElementById("div_logo").style.backgroundColor = "#c70039";
			document.getElementById("items_navbar").style.backgroundColor = "#c70039";
			document.getElementById("div_navbar").style.backgroundColor = "#c70039";
			document.getElementById("popUp_log").style.backgroundColor = "#c70039";
			if(document.getElementById("popSub") !== null) // astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "#c70039";
				document.getElementById("popBack").style.backgroundColor = "#c70039";
			}
			if(document.getElementById("smallTimer") !== null)
			{
				document.getElementById("smallTimer").style.backgroundColor = "#c70039";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("smallTimer").style.borderColor = "#c70039";	
			}
			if(document.getElementById("time_pagina") != null)
			{
				document.getElementById("time_pagina").style.backgroundColor = "#c70039";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("time_pagina").style.borderColor = "#c70039";
			}
			if(!window.matchMedia("(max-width:1000px)").matches) // adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
				document.getElementById("popUp_log").style.borderColor = "#c70039";
			let articles = document.getElementsByClassName("regular_article");
			for(let i = 0; i < articles.length; ++i)
			{
				articles[i].style.backgroundColor = "#ff5733";
				articles[i].style.borderColor = "#ffbd69";
			}
			let drops = document.getElementsByClassName("regular_drop"); // drop down menus
			for(let i = 0; i < drops.length; ++i)
			{
				drops[i].style.backgroundColor = "#c70039";
			}
			let drops_content = document.getElementsByClassName("regular_drop-content");  // elementele din drop down menus
			for(let i = 0; i < drops_content.length; ++i)
			{
				drops_content[i].style.backgroundColor = "#c70039";
			}
			let items = document.getElementsByTagName("li");// si restul de elemente din lista de pe navbar
			for(let i = 0; i < items.length; ++i)
			{
				if(window.matchMedia("(max-width:1000px)").matches && items[i].id !== "ns"
				&& items[i].id !== "rs" && items[i].id !== "gs") // modifica culorile doar cand e de pe telefon, ca altfel nu e necesar
					items[i].style.backgroundColor = "#c70039";
			}
		}
		else if(color === "blue")
		{
			let new_gradient = "linear-gradient(0deg, rgba(63,53,233,1) 6%, rgba(110,110,222,1) 39%, rgba(0,212,255,1) 100%)";
			document.body.style.background = new_gradient;
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundAttachment = "fixed"; 
			document.getElementById("div_logo").style.backgroundColor = "deepskyblue";
			document.getElementById("items_navbar").style.backgroundColor = "deepskyblue";
			document.getElementById("div_navbar").style.backgroundColor = "deepskyblue";
			document.getElementById("popUp_log").style.backgroundColor = "deepskyblue";
			if(document.getElementById("popSub") !== null)// astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "deepskyblue";
				document.getElementById("popBack").style.backgroundColor = "deepskyblue";
			}
			if(document.getElementById("smallTimer") !== null)
			{
				document.getElementById("smallTimer").style.backgroundColor = "deepskyblue";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("smallTimer").style.borderColor = "deepskyblue";	
			}
			if(document.getElementById("time_pagina") != null)
			{
				document.getElementById("time_pagina").style.backgroundColor = "deepskyblue";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("time_pagina").style.borderColor = "deepskyblue";
			}
			if(!window.matchMedia("(max-width:1000px)").matches)// adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
				document.getElementById("popUp_log").style.borderColor = "deepskyblue";
			let articles = document.getElementsByClassName("regular_article");
			for(let i = 0; i < articles.length; ++i)
			{
				articles[i].style.backgroundColor = "rgb(177, 203, 241)";
				articles[i].style.borderColor = "rgb(84, 115, 222)";
			}
			let drops = document.getElementsByClassName("regular_drop"); // drop down menus
			for(let i = 0; i < drops.length; ++i)
			{
				drops[i].style.backgroundColor = "deepskyblue";
			}
			let drops_content = document.getElementsByClassName("regular_drop-content");  // elementele din drop down menus
			for(let i = 0; i < drops_content.length; ++i)
			{
				drops_content[i].style.backgroundColor = "deepskyblue";
			}
			let items = document.getElementsByTagName("li"); // si restul de elemente din lista de pe navbar
			for(let i = 0; i < items.length; ++i)
			{
				if(window.matchMedia("(max-width:1000px)").matches && items[i].id !== "ns"
				&& items[i].id !== "rs" && items[i].id !== "gs") // modifica culorile doar cand e de pe telefon, ca altfel nu e necesar
					items[i].style.backgroundColor = "deepskyblue";
			}
			
		}
		else
		{
			let new_gradient = "linear-gradient(#f6f078, #730068)";
			document.body.style.background = new_gradient;
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundAttachment = "fixed"; 
			document.getElementById("div_logo").style.backgroundColor = "#01d28e";
			document.getElementById("items_navbar").style.backgroundColor = "#01d28e";
			document.getElementById("div_navbar").style.backgroundColor = "#01d28e";
			document.getElementById("popUp_log").style.backgroundColor = "#01d28e";
			if(document.getElementById("popSub") !== null)// astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "#01d28e";
				document.getElementById("popBack").style.backgroundColor = "#01d28e";
			}
			if(document.getElementById("smallTimer") !== null)
			{
				document.getElementById("smallTimer").style.backgroundColor = "#01d28e";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("smallTimer").style.borderColor = "#01d28e";	
			}
			if(document.getElementById("time_pagina") != null)
			{
				document.getElementById("time_pagina").style.backgroundColor = "#01d28e";
				if(!window.matchMedia("(max-width:1000px)").matches)
					document.getElementById("time_pagina").style.borderColor = "#01d28e";
			}
			if(!window.matchMedia("(max-width:1000px)").matches)// adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
				document.getElementById("popUp_log").style.borderColor = "#01d28e";
			let articles = document.getElementsByClassName("regular_article");
			for(let i = 0; i < articles.length; ++i)
			{
				articles[i].style.backgroundColor = "#434982";
				articles[i].style.borderColor = "#01d28e";
			}
			let drops = document.getElementsByClassName("regular_drop"); // drop down menus
			for(let i = 0; i < drops.length; ++i)
			{
				drops[i].style.backgroundColor = "#01d28e";
			}
			let drops_content = document.getElementsByClassName("regular_drop-content");  // elementele din drop down menus
			for(let i = 0; i < drops_content.length; ++i)
			{
				drops_content[i].style.backgroundColor = "#01d28e";
			}
			let items = document.getElementsByTagName("li");// si restul de elemente din lista de pe navbar
			for(let i = 0; i < items.length; ++i)
			{
				if(window.matchMedia("(max-width:1000px)").matches && items[i].id !== "ns"
				&& items[i].id !== "rs" && items[i].id !== "gs") // modifica culorile doar cand e de pe telefon, ca altfel nu e necesar
					items[i].style.backgroundColor = "#01d28e";
			}
		}
	}
}

// functia asta e apelata doar cand e incarcata pagina, daca e nevoie
function setColorOnStart(color)
{
	if(color !== "red" && color !== "blue" && color !== "greenish") // daca cumva am trimis ceva aiurea ca argument
	{
		console.log("Uhhh ai introdus cumva culoarea gresita...");
		return;
	}
	
	if(color === "red")
	{	
		let new_gradient = "linear-gradient(#511845, #900c3f)";
		document.body.style.background = new_gradient;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundAttachment = "fixed"; 
		document.getElementById("div_logo").style.backgroundColor = "#c70039";
		document.getElementById("items_navbar").style.backgroundColor = "#c70039";
		document.getElementById("div_navbar").style.backgroundColor = "#c70039";
		document.getElementById("time_pagina").style.backgroundColor = "#c70039";
		if(!window.matchMedia("(max-width:1000px)").matches)
			document.getElementById("time_pagina").style.borderColor = "#c70039";
		document.getElementById("smallTimer").style.backgroundColor = "#c70039";
		if(!window.matchMedia("(max-width:1000px)").matches)
			document.getElementById("smallTimer").style.borderColor = "#c70039";
		let articles = document.getElementsByClassName("regular_article");
		for(let i = 0; i < articles.length; ++i)
		{
			articles[i].style.backgroundColor = "#ff5733";
			articles[i].style.borderColor = "#ffbd69";
		}
		let drops = document.getElementsByClassName("regular_drop");
		for(let i = 0; i < drops.length; ++i)
		{
			drops[i].style.backgroundColor = "#c70039";
		}
		let drops_content = document.getElementsByClassName("regular_drop-content");
		for(let i = 0; i < drops_content.length; ++i)
		{
			drops_content[i].style.backgroundColor = "#c70039";
		}
		let items = document.getElementsByTagName("li");
		for(let i = 0; i < items.length; ++i)
		{
			if(window.matchMedia("(max-width:1000px)").matches)
				items[i].style.backgroundColor = "#c70039";
		}
	}
	else if(color === "blue")
	{
		let new_gradient = "linear-gradient(0deg, rgba(63,53,233,1) 6%, rgba(110,110,222,1) 39%, rgba(0,212,255,1) 100%)";
		document.body.style.background = new_gradient;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundAttachment = "fixed"; 
		document.getElementById("div_logo").style.backgroundColor = "deepskyblue";
		document.getElementById("items_navbar").style.backgroundColor = "deepskyblue";
		document.getElementById("div_navbar").style.backgroundColor = "deepskyblue";
		document.getElementById("time_pagina").style.backgroundColor = "deepskyblue";
		if(!window.matchMedia("(max-width:1000px)").matches)
			document.getElementById("time_pagina").style.borderColor = "deepskyblue";
		let articles = document.getElementsByClassName("regular_article");
		for(let i = 0; i < articles.length; ++i)
		{
			articles[i].style.backgroundColor = "rgb(177, 203, 241)";
			articles[i].style.borderColor = "rgb(84, 115, 222)";
		}
		let drops = document.getElementsByClassName("regular_drop");
		for(let i = 0; i < drops.length; ++i)
		{
			drops[i].style.backgroundColor = "deepskyblue";
		}
		let drops_content = document.getElementsByClassName("regular_drop-content");
		for(let i = 0; i < drops_content.length; ++i)
		{
			drops_content[i].style.backgroundColor = "deepskyblue";
		}
		let items = document.getElementsByTagName("li");
		for(let i = 0; i < items.length; ++i)
		{
			if(window.matchMedia("(max-width:1000px)").matches)
				items[i].style.backgroundColor = "deepskyblue";
		}
		
	}
	else
	{
		let new_gradient = "linear-gradient(#f6f078, #730068)";
		document.body.style.background = new_gradient;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundAttachment = "fixed"; 
		document.getElementById("div_logo").style.backgroundColor = "#01d28e";
		document.getElementById("items_navbar").style.backgroundColor = "#01d28e";
		document.getElementById("div_navbar").style.backgroundColor = "#01d28e";
		document.getElementById("time_pagina").style.backgroundColor = "#01d28e";
		if(!window.matchMedia("(max-width:1000px)").matches)
			document.getElementById("time_pagina").style.borderColor = "#01d28e";
		document.getElementById("smallTimer").style.backgroundColor = "#01d28e";
		if(!window.matchMedia("(max-width:1000px)").matches)
			document.getElementById("smallTimer").style.borderColor = "#01d28e";
		let articles = document.getElementsByClassName("regular_article");
		for(let i = 0; i < articles.length; ++i)
		{
			articles[i].style.backgroundColor = "#434982";
			articles[i].style.borderColor = "#01d28e";
		}
		let drops = document.getElementsByClassName("regular_drop");
		for(let i = 0; i < drops.length; ++i)
		{
			drops[i].style.backgroundColor = "#01d28e";
		}
		let drops_content = document.getElementsByClassName("regular_drop-content");
		for(let i = 0; i < drops_content.length; ++i)
		{
			drops_content[i].style.backgroundColor = "#01d28e";
		}
		let items = document.getElementsByTagName("li");
		for(let i = 0; i < items.length; ++i)
		{
			if(window.matchMedia("(max-width:1000px)").matches)
				items[i].style.backgroundColor = "#01d28e";
		}
	}
}

/* Aici se termina functiile care au treaba cu modificarea culorilor prin site*/
//TASK 0.5 #8s
function hideOrShowImages(crImgState = "nothing", clicked = true)
{
	if(crImgState == "nothing") // adica daca functia e apelata prin click
		crImgState = currentImgState;
	if(crImgState == "shown" || (!clicked))
	{
		currentImgState = "hidden"; // schimb state ul imaginilor
		document.getElementById('hideimg').innerHTML = "Afiseaza imagini";
		localStorage.setItem('imgState', currentImgState);
		changeAllImages("hidden");
	}
	else if(crImgState == "hidden")
	{
		currentImgState = "shown";
		document.getElementById('hideimg').innerHTML = "Ascunde imagini";
		localStorage.setItem('imgState', currentImgState);
		changeAllImages("visible");
	}
}
function changeAllImages(val)
{
	if(val !== "hidden" && val !== "visible"){
		console.log("functia changeAllImages a fost apelata cu un argument aiurea..." + val);
		return;
	}	
	imgs = document.getElementsByTagName('img');
	for(img of imgs)
	{
		// e o sageata pentru mobil care e facuta sa apara si in varianta de desktop, daca nu verific manual
		if(img.id != "arrow_down" || window.matchMedia("(max-width:1000px)").matches)
		{
			img.style.visibility = val;
		}
	}
}

function hideOrShowTabs(crTabState = "nothing", clicked = true)
{
	if(crTabState == "nothing") // adica daca functia e apelata prin click
		crTabState = currentTabState;
	if(crTabState == "shown" || !clicked)
	{
		currentTabState = "hidden"; // schimb state ul imaginilor
		document.getElementById('hidetabs').innerHTML = "Afiseaza taburi";
		localStorage.setItem('tabState', currentTabState);
		changeAllTabs("hidden");
	}
	else if(crTabState == "hidden")
	{
		currentTabState = "shown";
		document.getElementById('hidetabs').innerHTML = "Ascunde taburi";
		localStorage.setItem('tabState', currentTabState);
		changeAllTabs("visible");
	}
}
function changeAllTabs(val)
{
	if(val !== "hidden" && val !== "visible"){
		console.log("functia changeAllTabs a fost apelata cu un argument aiurea..." + val);
		return;
	}	
	tabs = [];
	tabs.push(document.getElementById('smallTimer'));
	tabs.push(document.getElementById('time_pagina'));
	for(tab of tabs)
	{
		tab.style.visibility = val;
	}
}

if(isAdmin || isUser || isSpecial)
{
	localStorage.setItem('user', userName);
}
// functia asta creeaza elementul pt log in, seamana cu un popUp
function createLogPopup()
{
	let popUpThing = document.createElement("div");
	popUpThing.className = "popup_thing";
	popUpThing.id = "popUp_log";
	if(localStorage.getItem("user") == null) // pt functionalitatea de log-in\log-off
	{
		popUpThing.innerHTML = "Fa-ti un cont la biblioteca noastra!";
		if(faulty_login)
			popUpThing.innerHTML = "Datele introduse nu corespund niciunui cont.";	
		popUpThing.addEventListener("click", accPrompt);
	}
	else
	{
		popUpThing.innerHTML = "Salut, " + localStorage.getItem("user") +". Poti da click aici pt log off";
		popUpThing.addEventListener("click", logOff);
	}
	
	// sa i schimb culoarea in functie de ce schema are site-ului
	if(currentColor === "red")
	{
		popUpThing.style.backgroundColor = "#c70039";
		if(!window.matchMedia("(max-width:1000px)").matches)
			popUpThing.style.borderColor = "#c70039";
	}
	else if(currentColor === "greenish")
	{
		popUpThing.style.backgroundColor = "#01d28e";
		if(!window.matchMedia("(max-width:1000px)").matches)
			popUpThing.style.borderColor = "#01d28e";
	} // daca e albastru, culoarea e bine pusa din clasa oricum
	
	document.body.appendChild(popUpThing);
	
	if(window.matchMedia("(max-width:1000px)").matches) // daca e pe telefon, il fac child la meniul ala mare(la navbar adica)
	{
		let list_dummy = document.createElement("li");
		list_dummy.appendChild(popUpThing);
		list_dummy.style.backgroundColor = popUpThing.style.backgroundColor;
		document.getElementById("items_navbar").appendChild(list_dummy);
	}
}
function accPrompt() // functia asta se ocupa de evenimentul in care userul da click pe popup-ul de login
{
	let popUpThing = document.getElementById("popUp_log");
	popUpThing.innerHTML = "Introdu datele";
	popUpThing.removeEventListener("click", accPrompt); // ca sa pot scrie chestii in input
	
	let popUpForm = document.createElement("form"); // creeaza input-urile si label-urile lor
	popUpForm.method = "post";
	let userLabel = document.createElement("label");
	userLabel.htmlFor = "userInput";
	userLabel.innerHTML = "User:";
	let userInput = document.createElement("input");
	userInput.id = "userInput";
	userInput.name = "userInput";
	userInput.type = "text";
	
	let passLabel = document.createElement("label");
	passLabel.htmlFor = "passInput";
	passLabel.innerHTML = "Parola:";
	let passInput = document.createElement("input");
	passInput.id = "passInput";
	passInput.name = "passInput";
	passInput.type = "password";
	
	let submitBt = document.createElement("input");
	submitBt.id = "popSub";
	submitBt.value = "Gata";
	submitBt.type = "submit";
	submitBt.style.backgroundColor = window.getComputedStyle(popUpThing, null).getPropertyValue("background-color");
	submitBt.addEventListener("click", submitData);
	let backBt = document.createElement("input");
	backBt.id = "popBack";
	backBt.value = "Inapoi";
	backBt.type = "submit";
	backBt.style.backgroundColor = window.getComputedStyle(popUpThing, null).getPropertyValue("background-color");
	backBt.addEventListener("click", backToNormalPop);
	
	popUpForm.appendChild(userLabel); // bag, pe rand, tot ce am creat in div
	popUpForm.appendChild(userInput);
	popUpForm.appendChild(passLabel);
	popUpForm.appendChild(passInput);
	popUpForm.appendChild(submitBt);
	popUpForm.appendChild(backBt);
	popUpThing.appendChild(popUpForm);
}

function backToNormalPop() // daca da click pe back in form
{
	let popUpThing = document.getElementById("popUp_log");
	if(localStorage.getItem("user") == null)
	{
		popUpThing.innerHTML = "Fa-ti un cont la biblioteca noastra!";
		if(faulty_login)
			popUpThing.innerHTML = "Datele introduse nu corespund niciunui cont.";
		setTimeout(function() {popUpThing.addEventListener("click", accPrompt);}, 100); // daca o schimb instant, atunci uneori ia click-u si reface starea anterioara, adica nu-si schimba deloc ce are in innerHTML(ciudat)
	}
	else if(localStorage.getItem("invalid") !== true)
	{
		popUpThing.innerHTML = "Salut, " + localStorage.getItem("user") +". Poti da click aici pt log off";
		setTimeout(function() {popUpThing.addEventListener("click", logOff);}, 100); // ca mai sus
	}
	else
	{
		popUpThing.innerHTML = "Date gresite la logare!";
	}
}
// cand da click pe butonul de submit(ala pe care scrie "Gata")
function submitData()
{
}
// cand da click pe popUpThing, in timp ce e logat
function logOff()
{
	fetch('http://localhost:3000/logoff', {
		method: 'POST',
	}).then(response => {
		if(response.status === 200)
		{
			localStorage.removeItem("user");
			localStorage.removeItem("pass");
			this.removeEventListener("click", logOff); // ca sa pot scrie chestii in input
			backToNormalPop();
		}
	});
}

setTimeout(createLogPopup, 2000);

/* De aici incep functii care au treaba cu mentinerea site-ului responsive
*/

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
	normalButton.addEventListener("click", () => {clickedStyleChange(1);});
	let redButton = document.createElement("li");
	redButton.innerHTML = "Rosu";
	redButton.id = "rs";
	redButton.style.backgroundColor = "#c70039";
	redButton.addEventListener("click", () => {clickedStyleChange(2);});
	let greenButton = document.createElement("li");
	greenButton.innerHTML = "Verdeish";
	greenButton.id = "gs";
	greenButton.style.backgroundColor = "#01d28e";
	greenButton.addEventListener("click", () => {clickedStyleChange(3);});
	
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
