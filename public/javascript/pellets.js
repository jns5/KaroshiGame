
function createpellet(){
    var board = document.querySelector(".game-page");
    let pellet = document.createElement("img");
    pellet.style.height="20px";
    pellet.style.width="20px";
    pellet.style.zIndex=-10;
    pellet.setAttribute("src", "images/red.png");
    pellet.style.position = "absolute";
    board.appendChild(pellet);
    randomx = randoms()[0];
    randomy = randoms()[1];
    pellet.style.left = randomx + "px";
    pellet.style.top  = randomy + "px";
    console.log(randomx, randomy);
    return pellet;
  
  }
