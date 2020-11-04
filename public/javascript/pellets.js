
function createpellet(){
    var board = document.querySelector(".game-page");
    let pellet = document.createElement("img");
    pellet.style.height="20px";
    pellet.style.width="20px";
    pellet.style.zIndex=-10;
    pellet.setAttribute("src", "images/red.png");
    pellet.style.position = "absolute";
    board.appendChild(pellet);
    // randomx = parseInt(Math.random()* window.innerWidth - window.innerWidth/3.5);
    // randomy = parseInt(Math.random()* window.innerHeight - window.innerHeight/1.5);
    randomx = parseInt(Math.random()* window.innerWidth);
    randomy = parseInt(Math.random()* window.innerHeight);
    pellet.style.left = randomx + "px";
    pellet.style.top  = randomy + "px";
    console.log(randomx, randomy);
    return pellet;
  
  }
