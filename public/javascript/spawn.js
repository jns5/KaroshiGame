//where we create a
function spawnmasks(){
    var mask = document.createElement("img");
    mask.setAttribute("src", "public/images/mask.png");
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
    san.setAttribute("src", "public/images/sanitizer.png");
    san.classList.add("san")
    var board = document.querySelector(".game-page");
    var randomx = randoms()[0];
    var randomy = randoms()[1];
    san.style.left = randomx + "px";
    san.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(san);
    
}
var sanitizers = [];
for (var i = 0; i < 10; i++ ) {
    sanitizers.push(spawnsan());
}
var masks = [];
for (var i = 0; i < 10; i++ ) {
    masks.push(spawnmasks());
    sanitizers.push(spawnsan());
}
function randoms()
{
    var randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/4);
    var randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/2);
    return [randomx, randomy];
}