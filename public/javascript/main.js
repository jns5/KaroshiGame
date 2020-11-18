

// put new virus as player joins
socket.on('add-player', function(data){
    var board = document.querySelector('.game-board');
    var virus = document.createElement('img');
    virus.setAttribute('src', '../images/redvir.png');
    virus.id = 'icon';
    virus.style.left = parseInt(Math.random()* 950) + 'px';
    virus.style.top = parseInt(Math.random()* 600) + 'px';
    virus.style.position = 'absolute';
    virus.style.width = '100px';
    virus.style.height = '100px';
    virus.style.zIndex = '-1';
    board.appendChild(virus);
    console.log(data);
})
// updates positions of viruses
socket.on('new-position', function(data){

});