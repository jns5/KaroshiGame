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
        case 83:
            var element = document.getElementById("icon");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
        break;
        case 32: // space button
            var element = document.getElementById("icon");
            var laser = document.getElementById("laser");
            laser.style.top = parseInt(element.style.top) + 170 + 'px';
            laser.style.left = parseInt(element.style.left) + 300 +'px';
            playerShoot();

    }
    e.preventDefault();
};
