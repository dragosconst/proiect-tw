// fisieru asta trebuie inclus inaintea codului care coloreaza pagina(pt orice pagina in care e folosit) !!!

let timeSpentDiv = document.createElement('div');
let textDiv = "Ai petrecut ";
let seconds = 0;
if(localStorage.getItem('timeOn' + pageName) != null) // pageName trebuie setat de pagina care foloseste fisierul asta manual
{
    seconds = Number(localStorage.getItem('timeOn' + pageName));
}
timeSpentDiv.innerHTML = textDiv;
timeSpentDiv.className = "popup_thing";
timeSpentDiv.id = "time_pagina";
document.body.appendChild(timeSpentDiv);

function updateTime()
{
    timeSpentDiv.innerHTML = "Ai petrecut " + msToTime(seconds) + "<p> pe pagina.</p>";
    seconds += 1000;
    localStorage.setItem('timeOn' + pageName, seconds);
    setTimeout(() => {
        updateTime();
    }, 1000);
}
updateTime(); // primul apel

function msToTime(s) {
    let ms = s % 1000;  
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
  
    return hrs + ':' + mins + ':' + secs;
}