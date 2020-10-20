function playerMovement(){
    window.addEventListener('keydown',move);
}

function move(e) {
    var element = document.getElementById("icon");
    if(element.style.left == '-180px')// boundaries are set
        element.style.left = '-175px';
    else if(element.style.left =='870px')
        element.style.left = '865px';
    else if(element.style.top =='-180px')
        element.style.top = '-175px';
    else if(element.style.top =='160px')
        element.style.top = '155px';
    switch (e.keyCode) {
        case 65:
            element.style.left = parseInt(element.style.left) - 5 + 'px';
        break;
        case 68:
            element.style.left = parseInt(element.style.left) + 5 + 'px';
        break;
        case 87:
            element.style.top = parseInt(element.style.top) - 5 + 'px';
        break;
        case 83:
            element.style.top = parseInt(element.style.top) + 5 + 'px';
        break;
    }
    e.preventDefault();
};
