// TASK 1.5 #13
document.addEventListener('click', resetTimer);
document.addEventListener('keyup', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('mousemove', resetTimer);
document.addEventListener('scroll', resetTimer);

let timeInactive = 0;
let stack = []; // o sa am o stiva, care tine in varf ce functie trebuie apelata in continuare

stack.push(updateTimer);

function callTopSTack()
{
    stack[stack.length - 1](); // apeleze ce avem sus
    stack.pop();
    setTimeout(() => {
        callTopSTack();
    }, 1000);
}
setTimeout(() => {
    callTopSTack();
}, 1000);

function resetTimer(e) 
{
    timeInactive = 0;
    stack = []; // golesc stiva
    stack.push(updateTimer); 
    if(document.getElementById('inactiv') !== null)
        document.body.removeChild(document.getElementById('inactiv'));
}

/*// functia asta e pentru resetTimer, ca sa astept sa se opreasca functia updateTimer
function startNewTimer()
{
    timeInactive = 2000;
    stopThread = false;
    setTimeout(updateTimer, 1000);
}*/
function updateTimer()
{
    timeInactive += 1000;
    if(timeInactive >= 5000)
    {
        if(document.getElementById('inactiv') === null)
            createInactiveDiv();
        else // updatez textul divului
        {
            let inactDiv = document.getElementById('inactiv');
            inactDiv.innerHTML = "<p>Ai fost inactiv " + timeInactive / 1000 + " secunde.</p>"; 
        }
    }
    stack.push(updateTimer);
}

function createInactiveDiv()
{
    let inactDiv = document.createElement('div');
    inactDiv.className = "blurr";
    inactDiv.id = "inactiv";
    inactDiv.innerHTML = "<p>Ai fost inactiv 5 secunde.</p>";
    document.body.appendChild(inactDiv);
}