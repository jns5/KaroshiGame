var score = document.querySelector(".score");
var playerScore=0;
var userName ="Anonymous";
var name = document.getElementsByClassName("name-space");

//const socket = io();

var submit = document.getElementById("submit");
    submit.onclick = function(){
    document.getElementById("username").style.visibility="hidden";
    document.getElementById("transparent-overlay").style.visibility="hidden";
    document.getElementById("username-form").style.visibility="hidden";
    if(document.getElementById("username").value !==  ""){
        userName = document.getElementById("username").value;
    }
    if(userName.length > 11){
      userName=userName.substring(0,11)
    }
}

var Key = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  
function listener(evt, element, fn) {
    if (window.addEventListener) 
        element.addEventListener(evt, fn, false);
    else
      element.attachEvent('on' + evt, fn);
  }
  
  function move(e) {
    switch (e.keyCode) {
        case 65:
            var element = document.getElementById("icon");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
        break;
        case 68:
            var element = document.getElementById("icon");
            element.style.left = parseInt(element.style.left) + 5 + 'px';
        break;
        case 87:
            var element = document.getElementById("icon");
            element.style.top = parseInt(element.style.top) - 5 + 'px';
        break;
        case 40:
            var element = document.getElementById("icon");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
        break;
    }
};

  function move(evt) {
    if (!evt)
      evt = window.event;
    var keycode = evt.keyCode || evt.which; 
  
    var info = document.getElementById("chat-list");
    var blob = document.getElementById("icon");
    // var direction = "Up";
    switch (keycode) {
        case Key.LEFT:
          blob.style.left = parseInt(blob.style.left) - 5 + 'px';
          movePointer(keycode);
          direction = "Left";
        break;
        case Key.UP:
          blob.style.top = parseInt(blob.style.top) - 5 + 'px';
          movePointer(keycode);
          direction = "Up";
        break;
        case Key.RIGHT:
          blob.style.left = parseInt(blob.style.left) + 5 + 'px';
          movePointer(keycode);
          direction = "Right";

        break;
        case Key.DOWN:
          blob.style.top = parseInt(blob.style.top) + 5 + 'px';
          movePointer(keycode);
          direction = "Down";
        break;
        case 32: // space button
            
            switch (direction) {
              case "Left":
                playerShootLeft();
              break;
              case "Right":
                playerShootRight();
              break;
              case "Up":
                playerShootUp();
              break;
              case "Down":
                playerShootDown();
              break;
            }
        break;
        default:
            return;
    }
    for (let i = 0; i < pelletes.length; i++){
      if (cross(pelletes[i], blob)){
        var board = document.querySelector(".game-page");
        board.removeChild(pelletes[i]);
        playerScore= playerScore + 5;
        score.innerHTML = userName+" : "+playerScore;
      }
    }
    for (let i = 0; i < masks.length; i++){
      if (cross(masks[i], blob)){
        var board = document.querySelector(".game-page");
        board.removeChild(masks[i]);
          playerScore = playerScore - 2;
        score.innerHTML = userName+" : "+playerScore;
      }
    }
    for (let i = 0; i < sanitizers.length; i++){
      if (cross(sanitizers[i], blob)){
        var board = document.querySelector(".game-page");
        board.removeChild(sanitizers[i]);
        playerScore= playerScore - 3;
        score.innerHTML = userName+" : "+playerScore;
      }
    }
}
listener('keydown', document, move);

// window.addEventListener('keydown', function() {
//   document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
// });

  function message()//to display the chat text
  {
      var chat = document.getElementById("chat-input");
      document.getElementById("chat-list").innerHTML = chat.value;
  }
  
  function playerShootUp(){ // to shoot bullets upwards
    var element = document.getElementById("icon");
    var laser = document.getElementById("laser");
    laser.style.top = parseInt(element.style.top) + 230 + 'px';
    laser.style.left = parseInt(element.style.left) + 290 +'px';
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000)
    {clearInterval(timer); return;}
    laser.style.top = parseInt(laser.style.top) -8 +'px';

  }, 20);}

  function playerShootDown(){ // to shoot bullets downwards
    var element = document.getElementById("icon");
    var laser = document.getElementById("laser");
    laser.style.top = parseInt(element.style.top) + 420 + 'px';
    laser.style.left = parseInt(element.style.left) + 290 +'px';
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000)
    {clearInterval(timer); return;}
    laser.style.top = parseInt(laser.style.top) +8 +'px';

  }, 20);}

  function playerShootRight(){// to shoot bullets to the right
    var element = document.getElementById("icon");
    document.getElementById("laser").style.transform = "rotate(90deg)";
    var laser = document.getElementById("laser");
    laser.style.top = parseInt(element.style.top) + 300 + 'px';
    laser.style.left = parseInt(element.style.left) + 410 +'px';
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000)
    {clearInterval(timer); return;}
    laser.style.left = parseInt(laser.style.left) +8 +'px';

  }, 20);}

  function playerShootLeft(){ // to shoot bullets to the left
    var element = document.getElementById("icon");
    document.getElementById("laser").style.transform = "rotate(90deg)";
    var laser = document.getElementById("laser");
    laser.style.top = parseInt(element.style.top) + 300 + 'px';
    laser.style.left = parseInt(element.style.left) + 180 +'px';
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000)
    {clearInterval(timer); return;}
    laser.style.left = parseInt(laser.style.left) -8 +'px';

  }, 20);}

  function movePointer(keycode){
      var pointer = document.getElementById("arrow");
      var element = document.getElementById("icon");
        switch (keycode) {
        
        //Left
        case 37:
            document.getElementById("arrow").style.transform = "rotate(135deg)";
            pointer.style.top = parseInt(element.style.top) + 300 + 'px';
            pointer.style.left = parseInt(element.style.left) + 180 +'px';
        break;
        //Right
        case 39:
            document.getElementById("arrow").style.transform = "rotate(-45deg)";
            pointer.style.top = parseInt(element.style.top) + 300 + 'px';
            pointer.style.left = parseInt(element.style.left) + 410 +'px';
        break;
        //Up
        case 38:
            document.getElementById("arrow").style.transform = "rotate(-135deg)";
            pointer.style.top = parseInt(element.style.top) + 200  + 'px';
            pointer.style.left = parseInt(element.style.left) + 290 +'px';
        break;
        //Down
        case 40:
            document.getElementById("arrow").style.transform = "rotate(45deg)";
            pointer.style.top = parseInt(element.style.top) + 400 + 'px';
            pointer.style.left = parseInt(element.style.left) + 290 +'px';
        break;
}}


function cross(element1, element2) {
  left1 = element1.offsetLeft; //i1x
  top1 = element1.offsetTop; //i1y
  right1 = element1.offsetLeft + element1.offsetWidth; //r1x
  bottom1 = element1.offsetTop + element1.offsetHeight; //r1y

  left2 = element2.offsetLeft; //i2x
  top2 = element2.offsetTop; //i2y
  right2 = element2.offsetLeft + element2.offsetWidth; //r2x
  bottom2 = element2.offsetTop + element2.offsetHeight; //r2y

  x_overlap = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
  y_overlap = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
  overlapArea = x_overlap * y_overlap;

  if (overlapArea == 0 || isNaN(overlapArea)) {
      return false;
  }
  return true;

}


pelletes = new Array();
for (var i = 0; i < 200; i++ ){
  pelletes.push(createpellet());
}

sanitizers = new Array();
for (var i = 0; i < 10; i++ ) {
    sanitizers.push(spawnsan());
}
masks = new Array();
for (var i = 0; i < 10; i++ ) {
    masks.push(spawnmasks());
}
