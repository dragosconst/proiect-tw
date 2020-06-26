/**
* Fisier javascript pt recolorarea generala paginilor(adica fundal + navbar + articole)
*/ let currentColor = "blue";
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
			//document.getElementById("popUp_log").style.backgroundColor = "#c70039";
			document.getElementById("time_pagina").style.backgroundColor = "#c70039";
			if(!window.matchMedia("(max-width:1000px)").matches)
				document.getElementById("time_pagina").style.borderColor = "#c70039";
			if(document.getElementById("popSub") !== null) // astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "#c70039";
				document.getElementById("popBack").style.backgroundColor = "#c70039";
			}
			//if(!window.matchMedia("(max-width:1000px)").matches) // adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
			//	document.getElementById("popUp_log").style.borderColor = "#c70039";
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
			//document.getElementById("popUp_log").style.backgroundColor = "deepskyblue";
			document.getElementById("time_pagina").style.backgroundColor = "deepskyblue";
			if(!window.matchMedia("(max-width:1000px)").matches)
				document.getElementById("time_pagina").style.borderColor = "deepskyblue";
			if(document.getElementById("popSub") !== null)// astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "deepskyblue";
				document.getElementById("popBack").style.backgroundColor = "deepskyblue";
			}
			//if(!window.matchMedia("(max-width:1000px)").matches)// adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
			//	document.getElementById("popUp_log").style.borderColor = "deepskyblue";
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
			//document.getElementById("popUp_log").style.backgroundColor = "#01d28e";
			document.getElementById("time_pagina").style.backgroundColor = "#01d28e";
			if(!window.matchMedia("(max-width:1000px)").matches)
				document.getElementById("time_pagina").style.borderColor = "#01d28e";
			if(document.getElementById("popSub") !== null)// astea sunt butoanele de la input, care, daca nu a fost dat click pe input, nu exista
			{
				document.getElementById("popSub").style.backgroundColor = "#01d28e";
				document.getElementById("popBack").style.backgroundColor = "#01d28e";
			}
			//if(!window.matchMedia("(max-width:1000px)").matches)// adica daca nu e pe telefon, pt ca pe telefon ii fac border negru
			//	document.getElementById("popUp_log").style.borderColor = "#01d28e";
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
		if(img.id != "arrow_down" || window.matchMedia("(max-width:1000px)").matches)
			img.style.visibility = val;
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
		if(tab != null)
			tab.style.visibility = val;
	}
}