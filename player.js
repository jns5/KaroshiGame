function playerMovement(){
    window.addEventListener('keydown',move);
}

function playerShoot(){
    let start = Date.now();

    let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000){clearInterval(timer); return;}
    laser.style.top = parseInt(laser.style.top) -12 +'px';

}, 20);
}

function move(e) {
    switch (e.keyCode) {
        //Left
        case 65:
            var element = document.getElementById("icon");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
            movePointer(e);
        break;
        //Right
        case 68:
            var element = document.getElementById("icon");
            element.style.left = parseInt(element.style.left) + 5 + 'px';
            movePointer(e);
        break;
        //UP
        case 87:
            var element = document.getElementById("icon");
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            movePointer(e);
        break;
        //DOWN
        case 83:
            var element = document.getElementById("icon");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            movePointer(e);
        break;
        case 32: // space button
            var element = document.getElementById("icon");
            var laser = document.getElementById("laser");
            laser.style.top = parseInt(element.style.top) + 175 + 'px';
            laser.style.left = parseInt(element.style.left) + 290 +'px';
            playerShoot();

    }
    e.preventDefault();
};

function movePointer(e){
    switch (e.keyCode) {
        //Left
        case 65:
            document.getElementById("arrow").style.transform = "rotate(135deg)";
            var pointer = document.getElementById("arrow");
            var element = document.getElementById("icon");
            pointer.style.top = parseInt(element.style.top) + 290 + 'px';
            pointer.style.left = parseInt(element.style.left) + 180 +'px';
        break;
        //Right
        case 68:
            document.getElementById("arrow").style.transform = "rotate(-45deg)";
            var pointer = document.getElementById("arrow");
            var element = document.getElementById("icon");
            pointer.style.top = parseInt(element.style.top) + 290 + 'px';
            pointer.style.left = parseInt(element.style.left) + 410 +'px';
        break;
        //Up
        case 87:
            document.getElementById("arrow").style.transform = "rotate(-135deg)";
            var pointer = document.getElementById("arrow");
            var element = document.getElementById("icon");
            pointer.style.top = parseInt(element.style.top) + 180  + 'px';
            pointer.style.left = parseInt(element.style.left) + 290 +'px';
        break;
        //Down
        case 83:
            document.getElementById("arrow").style.transform = "rotate(45deg)";
            var pointer = document.getElementById("arrow");
            var element = document.getElementById("icon");
            pointer.style.top = parseInt(element.style.top) + 410 + 'px';
            pointer.style.left = parseInt(element.style.left) + 290 +'px';
        break;
}}