
//where we create a
function spawnpellets(){
    var pellet = document.createElement("img");
    pellet.setAttribute("src", "public/images/red.png");
    pellet.classList.add("pellet")
    var board = document.querySelector(".game-page");
    var boardheight = board.clientWidth;
    var boardwidth = board.clientHeight;
    var randomx = Math.floor(Math.random()* boardwidth);
    var randomy = Math.floor(Math.random()* boardheight);
    pellet.style.left = randomx + "px";
    pellet.style.top = randomy + "px";
    console.log(randomx, randomy);
    board.append(pellet);
    
}

for (var i = 0; i < 200; i++ ) {
    document.body.append(spawnpellets());
}