// fisieru asta ar trebui inclus ultimul in site.ejs si probabil alte template-uri

// TASK 1 #2
let allArticles = document.getElementsByClassName('regular_article');
for(article of allArticles)
{
    // mai intai pt titluri
    title = article.getElementsByTagName('h1')[0];
    text = title.innerHTML;
    words = text.split(" ");
    title.innerHTML = "";
    addWordsPerTrisec(title, words);

    // apoi pt paragrafe 
    paragraph = article.getElementsByTagName('p')[0];
    text = paragraph.innerHTML;
    words = text.split(" ");
    paragraph.innerHTML = "";
    addWordsPerTrisec(paragraph, words, 50);
}

// functia modifica direct innerHTML la un element so use with caution
function addWordsPerTrisec(element, words, speed = 334)
{
    if(!words.length) // deoarece e o functie semi-recursiva, asta e un fel de conditie de stop
    {
        solveLinks();
        return;
    }
    if(words[0] != "." && words[0] != ',' && words[0] != '"' && words[0] != ':' && words[0] != '!' && words[0] != '+'
      && words[0] != '-' && words[0] != '\'' && words[0] != "<" && words[0] != ">")
        element.innerHTML += ' '; // pun spatiu doar pt cuvinte\numere, nu si pt semne de punctuatie
    if(words[0] == "<a")
    {
        element.innerHTML += words[0] + " " + words[1];
        words.splice(0, 2);
    }
    else
    {
        element.innerHTML += words[0];
        words.splice(0, 1); // scot cuvantu din array
    }
    setTimeout(() => {
        addWordsPerTrisec(element, words, speed);
    }, speed);
}

// ca sa rezolv toate problemele cu link-urile
function solveLinks()
{
    for(article of allArticles) // ,exista doar un link propriu zis in articole, deci pot face un fel de "hack"
    {
        link = article.getElementsByTagName('a')[0];
        if(link === undefined) return;
        article.innerHTML.replace("Click aici pentru mai multe informatii.", "");
        link.innerHTML = "Click aici pentru mai multe informatii.";
    }
}