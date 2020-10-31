
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

var pelletes = [];
for (var i = 0; i < 200; i++ ) {
    pelletes.push(spawnpellets());
}
//if player is on blob, pop pellet from the array
function onplayer(){
    var blob = document.getElementById("icon");
    var pellet = document.getElementById("public/images/red.png")
    for (var i = pelletes.length - 1; i >=0; i--){
      pelletes[i].show();
      if (blob.style.top == pellet.style.top && blob.style.left == pellet.style.left){
       pelletes.splice(i, 1);
      }
    }
  }
