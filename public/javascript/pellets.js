
function createpellet(){
    var board = document.querySelector(".game-page");
    let pellet = document.createElement("img");
    pellet.setAttribute("src", "public/images/red.png");
    pellet.style.position = "absolute";
    board.appendChild(pellet);
    randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/3.5);
    randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/1.5);
    pellet.style.left = randomx + "px";
    pellet.style.top  = randomy + "px";
    console.log(randomx, randomy);
    return pellet;
  
  }
