
//where we create a
function spawnpellets(){
    var pellet = document.createElement("img");
    pellet.setAttribute("src", "public/images/red.png");
    pellet.classList.add("pellet")
    var board = document.querySelector(".game-page");
    var boardheight = board.clientWidth;
    var boardwidth = board.clientHeight;
    var randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/3.5);
    var randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/1.5);
    pellet.style.left = randomx + "px";
    pellet.style.top = randomy + "px";
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
