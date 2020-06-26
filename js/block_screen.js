// TASK 1.5 #18
let timeExpired = false;
let blockedScreen = false;
let timerKeys;
let lastKey = '';

document.addEventListener('keydown', (event) =>{ cript(event);});
document.addEventListener('mousemove', (event) => { trackMouse(event);});
function cript(event)
{
    if(blockedScreen) return; // daca ecranul e deja blocat, n are rost sa apelez functia asta
    if(timeExpired) // daca a expirat timpul
    {
        timeExpired = false;
        lastKey = '';
    }
    if(event.key == 'b' && lastKey == '')
    {
        lastKey = 'b';
        if(timerKeys !== undefined) clearTimeout(timerKeys);
        timerKeys = setTimeout(() => {
            timeUp();
        }, 3000);
    }
    else if(event.key == 'l' && lastKey == 'b')
    {
        lastKey = 'l';
    }
    else if(event.key == 'o' && lastKey == 'l')
    {
        lastKey = 'o';
    }
    else if(event.key == 'c' && lastKey == 'o')
    {
        lastKey = 'c';
    }
    else if(event.key == 'k' && lastKey == 'c')
    {
        lastKey = '';
        blockScreen();
    }
    else // adica o combinatie proasta
    {
        lastKey = '';
        if(timerKeys !== undefined) clearTimeout(timerKeys);
    }
}

function timeUp()
{
    timeExpired = true;
}

let mouseX, mouseY;
function trackMouse(event)
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}

let oldBodyDivs = [];
let oldX, oldY;
// cifrul pentru deblocarea ecranului o sa fie mouse up->mouse right
function blockScreen()
{
    // sterg tot ce e in body;
    removeBody();

    blockedScreen = true;
    let blackScreen = document.createElement('div');
    blackScreen.className = "blocker";
    document.body.appendChild(blackScreen);
    oldX = mouseX;
    oldY = mouseY;

    document.addEventListener('mousemove', mouseStop);
}

function removeBody()
{
    let bodyKids = document.body.childNodes;
    for(node of bodyKids)
    {
        if(node.tagName !== undefined && node.tagName.toLowerCase() === "div")
        {
            oldBodyDivs.push(node);
        }
    }
    for(node of oldBodyDivs) // ca sa scot nodurile din body
    {
        document.body.removeChild(node);
    }
}

let lastMove = '';
let timerMouse;
// e un pic contraintuitiva denumirea functiei, e practic un fel de check pt mouse stop
// mereu cand mouseul e miscat, e apelata functia asta, si daca trec 400 ms de la ultimu mouse movement,
// e considerat ca mouse-ul a fost oprit din miscare si e apelat deblockScreen
function mouseStop(event)
{
    clearTimeout(timerMouse);

    timerMouse = setTimeout(() => {
        deblockScreen(event);
    }, 400);
}
function deblockScreen(event)
{
    if(lastMove == 'up' && event.clientX > oldX)
    {
        lastMove = '';
        document.body.removeChild(document.getElementsByClassName('blocker')[0]); // scoatem blockerul
        for(node of oldBodyDivs)
        {
            document.body.appendChild(node);
        }
        oldBodyDivs = []; // golesc oldBodyDivs
        document.removeEventListener('mousemove', mouseStop);
        blockedScreen = false;
    }
    else if((lastMove == 'up' || lastMove == '') && event.clientY < oldY)
    {
        lastMove = 'up';
        oldY = event.clientY;
        oldX = event.clientX;
    }
    else
    {
        lastMove = '';
        oldY = event.clientY;
        oldX = event.clientX;
    }
}