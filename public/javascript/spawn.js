//where we create a

// const socket = io();

//where we create both the debuffs
function spawnmasks(){
    var board = document.querySelector(".game-page");
    let mask = document.createElement("img");
    mask.setAttribute("src", "images/mask.png");
    mask.style.position = "absolute";
    board.appendChild(mask);
    var randomx = randoms()[0];
    var randomy = randoms()[1];
    mask.style.left = randomx + "px";
    mask.style.top = randomy + "px";
    console.log(randomx, randomy);
    return mask;
    
}
function spawnsan(){
    var board = document.querySelector(".game-page");
    let san = document.createElement("img");
    san.setAttribute("src", "public/images/sanitizer.png");
    san.style.position = "absolute";
    board.appendChild(san);
    var randomx = randoms()[0];
    var randomy = randoms()[1];
    san.style.left = randomx + "px";
    san.style.top = randomy + "px";
    console.log(randomx, randomy);
    return san;
}

function randoms()
{
    var randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/4);
    var randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/2);
    return [randomx, randomy];
}
