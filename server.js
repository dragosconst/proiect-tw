let express = require('express')
let session = require('express-session');
let crypto = require('crypto');
let bodyParser = require('body-parser');
let app = express()
let port = 3000;

const fs = require('fs');

let rawbookdata = fs.readFileSync('data/database_book.json'); 
let cartiBD = JSON.parse(rawbookdata);
let rawuserdata = fs.readFileSync('data/database_users.json');
let userBD = JSON.parse(rawuserdata);

function findStringInKey(key, search) // caut daca gasesc stringul cautat undeva in cartea cu titlul key
{
    let carte = cartiBD[key];
    return (carte.title.toLowerCase().search(search.toLowerCase()) !== -1 || carte.author.toLowerCase().search(search.toLowerCase()) !== -1 
    || carte.genre.toLowerCase().search(search.toLowerCase()) !== -1);
}
// functia de mai jos returneaza true daca gaseste in titlu\descrierea unui articol de carte un cuvant care
// respecta conditiile date de len, substr si numbers
function findStringBySpecs(key, len, substr, numbers)
{
    let carte = cartiBD[key];
    let carteTitlu = carte.title.split(" ");
    let carteDesc = carte.description.split(" ");
    substr = substr.toLowerCase();
    // acum avem doua array uri care contin toate cuvintele din titlu, respectiv descrierea cartii
    for(word of carteTitlu)
    {   
        if(!numbers && /\d/.test(word))
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
            return true; // daca toate cerintele sunt indeplinite, inseamna ca am gasit un cuvant ok
        }
    }
    for(word of carteDesc)
    {
        if(!numbers && /\d/.test(word))
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
            return true; // daca toate cerintele sunt indeplinite, inseamna ca am gasit un cuvant ok
        }
    }

    return false;
}

// Use this code as is. 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secretsesh',
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
    res.render('site.ejs', {root: __dirname, cartiBD: cartiBD, username: req.session.username, privilege: req.session.privilege});
});
app.post('/', (req, res) => {

    let cifru = crypto.createCipher('aes-128-cbc', 'cifru_smecherie');

    let encrPass = cifru.update(req.body.passInput, 'utf8', 'hex');

    encrPass += cifru.final('hex');

    req.session.username = req.session.privilege = "dummy";
    for(let user of userBD)
    {
        if(user.parola === encrPass && user.user === req.body.userInput)
        {
            if(user.user === "admin")
            {
                isAdmin = true;
                req.session.privilege = "admin";
            }
            else if(user.user === "user")
            {
                isUser = true;
                req.session.privilege = "user";
            }
            else if(user.user === "userr")
            {
               isSpecial = true;
               req.session.privilege = "special";
            }
            req.session.username = user.user;
            
            break;
        }
    }   
    res.redirect('/');//, {root: __dirname, cartiBD: cartiBD, username: req.session.username, admin: isAdmin, user: isUser, special: isSpecial});
});
app.post('/logoff', (req, res) => {
    req.session.destroy();
    res.send();
});

app.get('/carti', (req, res) => {
    res.render('carti.ejs', {root: __dirname, cartiBD: cartiBD});
}); 
app.post('/carti', (req, res) =>{
    if(req.body.wantBD === true)
    {
        res.json(cartiBD);
    }
    else if(req.body.search !== undefined)
    {
        res.json(findStringInKey(req.body.keyData, req.body.search));    
    }
    else{ // aici ajung daca fac un request de pe ultimele 3 input field uri din pagina carti
        res.json(findStringBySpecs(req.body.keyData, req.body.searchLen, req.body.searchSubstr, req.body.searchNumbers));
    }
});

 // In caz ca intrii pe o pagina care nu exista!
app.use(function(req,res){
    res.status(404).sendFile('404.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
    console.log(`Express.JS Server is running on http://localhost:${port}`)
});