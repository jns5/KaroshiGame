//where we create a

// const socket = io();

function spawnmasks(){
    var mask = document.createElement("img");
    mask.style.height="100px";
    mask.style.width="100px";
    mask.setAttribute("src", "images/mask.png");
    mask.classList.add("mask")
    var board = document.querySelector(".game-page");
    var randomx = randoms()[0];
    var randomy = randoms()[1];
    mask.style.left = randomx + "px";
    mask.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(mask);
    
}
function spawnsan(){
    var san = document.createElement("img");
    san.style.height="100px";
    san.style.width="100px";
    san.setAttribute("src", "images/sanitizer.png");
    san.classList.add("san")
    var board = document.querySelector(".game-page");
    var randomx = randoms()[0];
    var randomy = randoms()[1];
    san.style.left = randomx + "px";
    san.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(san);
    
}

function randoms()
{
    var randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/4);
    var randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/2);
    return [randomx, randomy];
}
