//where we create a
function spawnmasks(){
    var mask = document.createElement("img");
    mask.setAttribute("src", "public/images/mask.png");
    mask.classList.add("mask")
    var board = document.querySelector(".game-page");
    var boardheight = board.clientWidth;
    var boardwidth = board.clientHeight;
    var randomx = Math.floor(Math.random()* boardwidth);
    var randomy = Math.floor(Math.random()* boardheight);
    mask.style.left = randomx + "px";
    mask.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(mask);
    
}
var masks = [];
for (var i = 0; i < 10; i++ ) {
    masks.push(spawnmasks());
}