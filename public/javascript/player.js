function playerMovement(){
    window.addEventListener('keydown',move);
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
    }
    e.preventDefault();
};
