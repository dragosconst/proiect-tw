document.getElementById("searchInput").addEventListener("keyup", function() {callSearchFull(this.value)});
const lenInp = 1, substrInp = 2, numInp = 3;
document.getElementById("lengthInput").addEventListener("keyup", function() {callSearchMulti(this.value, lenInp)});
document.getElementById("substrInput").addEventListener("keyup", function() {callSearchMulti(this.value, substrInp)});
document.getElementById("numInput").addEventListener("change", function() {callSearchMulti(this.checked, numInp)});
// caut si adaug articole pentru toate elementele noi
let cartiBD;
fetch("http://localhost:3000/carti", {
    method: 'POST',
    headers:{
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        keyData: "",
        wantBD: true
    })
 }).then( res => {
     return res.json();
 }).then(data => {
    cartiBD = data;
});
 
function callSearchFull(search)
{ 
    // deoarece primul search bar si ultimele 3 sunt mutual exclusive, daca scriu ceva in searchBaru asta, trebuie sa le golesc pe celealte 3
    document.getElementById("lengthInput").value = "";
    document.getElementById("substrInput").value = "";
    document.getElementById("numInput").checked = false;

    // scap de elementele vechi
    let deletes = document.getElementsByClassName("to_delete");
    while (deletes.length > 0) deletes[0].remove();

    for(let key in cartiBD)
    {
        fetch("http://localhost:3000/carti", {
           method: 'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               keyData: key,
               search: search,
               wantBD: false
           })
        }).then(response => {
           return response.json();
        }).then(data => {
            if(data) // data o sa fie o valoarea true\false care indica daca in cheia curenta exista string-ul din search pe vreun camp
            {
                let newArticle = document.createElement("article");
                newArticle.className = "regular_article to_delete";
                let newTitle = document.createElement("h1");
                newTitle.innerHTML = cartiBD[key].title;
                let newHr = document.createElement("hr");
                newHr.className = "article_title_line";
                let newDesc = document.createElement("p");
                newDesc.innerHTML = cartiBD[key].description;

                newArticle.appendChild(newTitle);
                newArticle.appendChild(newHr);
                newArticle.appendChild(newDesc);
                document.body.appendChild(newArticle);

                setInputColor(currentColor); // ca sa fie colorat corespunzator articolu nou
            }                
        });
    }
}

let cuvantLen = 0, cuvSubstr = "", cuvNumbers = false;

// TASK 1.5 #11
function callSearchMulti(searchVal, fromWhom)
{
    document.getElementById("searchInput").value = "";
    if(document.getElementById('lengthInput').value == "")  cuvantLen = 0;
    if(document.getElementById('substrInput').value == "")  cuvSubstr = "";
    
    if(fromWhom == lenInp) // o sa fie un numar
    {
        cuvantLen = Number(searchVal);
    }
    else if(fromWhom == numInp) // o sa fie un boolean
    {
        cuvNumbers = searchVal;
    }
    else if(fromWhom == substrInp) // o sa fie un string
    {
        cuvSubstr = searchVal;
    }
    // acum ca am setat parametrii de cautare, o sa fac cautarea propriu-zisa in baza de date
    // scap de elementele vechi
    let deletes = document.getElementsByClassName("to_delete");
    while (deletes.length > 0) deletes[0].remove();

    for(let key in cartiBD)
    {
        fetch("http://localhost:3000/carti", {
           method: 'POST',
           headers:{
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               keyData: key,
               searchLen: cuvantLen,
               searchSubstr: cuvSubstr,
               searchNumbers: cuvNumbers,
               wantBD: false
           })
        }).then(response => {
           return response.json();
        }).then(data => {
            if(data)
            {
                let newArticle = document.createElement("article");
                newArticle.className = "regular_article to_delete";
                let newTitle = document.createElement("h1");
                newTitle.innerHTML = cartiBD[key].title;
                let newHr = document.createElement("hr");
                newHr.className = "article_title_line";
                let newDesc = document.createElement("p");
                newDesc.innerHTML = cartiBD[key].description;

                newArticle.appendChild(newTitle);
                newArticle.appendChild(newHr);
                newArticle.appendChild(newDesc);
                document.body.appendChild(newArticle);

                setInputColor(currentColor); // ca sa fie colorat corespunzator articolu nous
                colorRestults(cuvantLen, cuvSubstr, cuvNumbers);
            }
        });
    }
    
}

// functia asta coloreaza in articolele returnate cuvintele cheie
// este apelata doar pentru ultimele 3 tipuri de search, deoarece primul searchbar cauta si in date invizibile pentru user(autor\gen literar al cartii)
function colorRestults(len, substr, num)
{
    allArticles = document.getElementsByClassName('regular_article');
    if(len == 0 && substr == "") return;
    substr = substr.toLowerCase();
    for(article of allArticles)
    {
        let titleText = article.getElementsByTagName('h1')[0].innerHTML.split(" ");
        let descText = article.getElementsByTagName('p')[0].innerHTML.split(" ");

        for(word of titleText)
        {   
            if(!num && /\d/.test(word))
            {
                continue; // daca cuvantul are cifre, dar cifrele sunt interzise, sarim peste el
            }
            else if(len != 0 && word.length != len)
            {
                continue; // daca cuvantul nu are lungimea ceruta(daca exista vreo lungime ceruta), sarim peste el
            }
            else if(substr != "" && word.toLowerCase().search(substr) === -1)
            {
                continue; // daca cuvantul nu contine substringul cerut, sarim peste el
            }
            else
            {
                let newTitle = article.getElementsByTagName('h1')[0].innerHTML;
                let indexPos = newTitle.indexOf(" " + word + " ");
                newTitle = newTitle.substr(0, indexPos + 1) + "<mark>" + word + "</mark>" + newTitle.substr(indexPos + word.length + 1);
                article.getElementsByTagName('h1')[0].innerHTML = newTitle;  
            }
        }

        for(word of descText)
        {   
            if(!num && /\d/.test(word))
            {
                continue; // daca cuvantul are cifre, dar cifrele sunt interzise, sarim peste el
            }
            else if(len != 0 && word.length != len)
            {
                continue; // daca cuvantul nu are lungimea ceruta(daca exista vreo lungime ceruta), sarim peste el
            }
            else if(substr != "" && word.toLowerCase().search(substr) === -1)
            {
                continue; // daca cuvantul nu contine substringul cerut, sarim peste el
            }
            else
            {
                let newDesc = article.getElementsByTagName('p')[0].innerHTML;
                let indexPos = newDesc.indexOf(" " + word + " ");
                newDesc = newDesc.substr(0, indexPos + 1) + "<mark>" + word + "</mark>" + newDesc.substr(indexPos + word.length + 1);
                article.getElementsByTagName('p')[0].innerHTML = newDesc;  
            }

        }
    }
}