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
        break;
        case Key.UP:
          blob.style.top = parseInt(blob.style.top) - 5 + 'px';
        break;
        case Key.RIGHT:
          blob.style.left = parseInt(blob.style.left) + 5 + 'px';
        break;
        case Key.DOWN:
          blob.style.top = parseInt(blob.style.top) + 5 + 'px';
        break;
        case 32: // space button
            var element = document.getElementById("icon");
            var laser = document.getElementById("laser");
            laser.style.top = parseInt(element.style.top) + 170 + 'px';
            laser.style.left = parseInt(element.style.left) + 300 +'px';
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
    laser.style.top = parseInt(laser.style.top) -12 +'px';

}, 20);}