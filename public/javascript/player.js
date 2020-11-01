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
  
  function move(evt) {
    if (!evt)
      evt = window.event;
    var keycode = evt.keyCode || evt.which; 
  
    var info = document.getElementById("chat-list");
    var blob = document.getElementById("icon");
    switch (keycode) {
        case Key.LEFT:
          blob.style.left = parseInt(blob.style.left) - 5 + 'px';
          movePointer(keycode);
        break;
        case Key.UP:
          blob.style.top = parseInt(blob.style.top) - 5 + 'px';
          movePointer(keycode);
        break;
        case Key.RIGHT:
          blob.style.left = parseInt(blob.style.left) + 5 + 'px';
          movePointer(keycode);
        break;
        case Key.DOWN:
          blob.style.top = parseInt(blob.style.top) + 5 + 'px';
          movePointer(keycode);
        break;
        case 32: // space button
            var element = document.getElementById("icon");
            var laser = document.getElementById("laser");
            laser.style.top = parseInt(element.style.top) + 230 + 'px';
            laser.style.left = parseInt(element.style.left) + 290 +'px';
            playerShoot();
        break;
        default:
            return;
    }
}
 listener('keydown', document, move);

  function message()//to display the chat text
  {
      var chat = document.getElementById("chat-input");
      document.getElementById("chat-list").innerHTML = chat.value;
  }

  function playerShoot(){ // to shoot bullets
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000){clearInterval(timer); return;}
    laser.style.top = parseInt(laser.style.top) -8 +'px';

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
