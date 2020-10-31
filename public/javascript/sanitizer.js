//where we create a
function spawnsan(){
    var san = document.createElement("img");
    san.setAttribute("src", "public/images/sanitizer.png");
    san.classList.add("san")
    var board = document.querySelector(".game-page");
    var boardheight = board.clientWidth;
    var boardwidth = board.clientHeight;
    var randomx = Math.floor(Math.random()* boardwidth);
    var randomy = Math.floor(Math.random()* boardheight);
    san.style.left = randomx + "px";
    san.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(san);
    
}
var sanitizers = [];
for (var i = 0; i < 10; i++ ) {
    sanitizers.push(spawnsan());
}