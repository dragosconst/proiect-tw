if(localStorage.getItem("colorSch") != null)
	currentColor = localStorage.getItem("colorSch");
if(currentColor !== "blue")
    setInputColor(currentColor);

document.getElementById("normal_col").removeEventListener("click", changeSiteColor);
document.getElementById("normal_col").addEventListener("click", function() {changeSiteColor(1), setInputColor("blue")});
document.getElementById("cool_red_col").removeEventListener("click", changeSiteColor);
document.getElementById("cool_red_col").addEventListener("click", function() {changeSiteColor(2), setInputColor("red")});
document.getElementById("funky_col").removeEventListener("click", changeSiteColor);
document.getElementById("funky_col").addEventListener("click", function() {changeSiteColor(3), setInputColor("greenish")});

function setInputColor(color)
{
    if(color !== "red" && color !== "blue" && color !== "greenish") // daca cumva am trimis ceva aiurea ca argument
	{
		console.log("Uhhh ai introdus cumva culoarea gresita...");
		return;
    }
    
    if(color == "red")
    {
        document.getElementById("form_div").style.backgroundColor = "#c70039";
        articles = document.getElementsByClassName("regular_article");
        for(let i = 0; i < articles.length; ++i)
        {
			articles[i].style.backgroundColor = "#ff5733";
			articles[i].style.borderColor = "#ffbd69";
        }
    }
    else if(color == "blue")
    {
        document.getElementById("form_div").style.backgroundColor = "deepskyblue";
        articles = document.getElementsByClassName("regular_article");
        for(let i = 0; i < articles.length; ++i)
        {
			articles[i].style.backgroundColor = "rgb(177, 203, 241)";
            articles[i].style.borderColor = "rgb(84, 115, 222)";
        }
    }
    else
    {
        document.getElementById("form_div").style.backgroundColor = "#01d28e";
        articles = document.getElementsByClassName("regular_article");  
        for(let i = 0; i < articles.length; ++i)
        {
			articles[i].style.backgroundColor = "#434982";
            articles[i].style.borderColor = "#01d28e";
        }
    }
}