//keycode numbers
var Key = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

// //listen for keyup events
// window.addEventListener('keyup', function(event) {
//     if(event.keyCode === Key.LEFT){
//       socket.emit('keyPress', { inputId: 'left', press : false})
//     }
//     else if(event.keyCode === Key.RIGHT){
//       socket.emit('keyPress', {inputId: 'right', press: false});
//     }
//     else if(event.keyCode === Key.UP){
//       socket.emit('keyPress', {inputId: 'up', press: false});
//     }
//     else if(event.keyCode === Key.DOWN){
//       socket.emit('keyPress', {inputId: 'down', press: false});
//     }
//   });
// // listen for keydown events 
// window.addEventListener('keydown', function(event){
//     if(event.keyCode === Key.LEFT){
//         socket.emit('keyPress', { inputId: 'left', press : true});
//       }
//       else if(event.keyCode === Key.RIGHT){
//         socket.emit('keyPress', {inputId: 'right', press: true});
//       }
//       else if(event.keyCode === Key.UP){
//         socket.emit('keyPress', {inputId: 'up', press: true});
//       }
//       else if(event.keyCode === Key.DOWN){
//         socket.emit('keyPress', {inputId: 'down', press: true});
        
//       }
// });





//data will contain list of player info that server sends. e.g data = [{score: 44564, name: 'doughnut', x: 500, y: 625},
//                                                  {score: 44524, name: 'binks', x: 532, y: 852}]
var pos = [];
//socket listens for player movement updates
socket.on('updatePos', function(positions){
    pos = positions;
});






function updateMovementPositions(){
    let board = document.querySelector('.game-board');
    //remove all virus elements before adding new ones with updated position
    while (document.getElementsByClassName('other')[0]) {
        document.getElementsByClassName('other')[0].remove();
    }
    // clearViruses(document.querySelectorAll('.virus'));
    for(var i = 0; i < pos.length; i++){
        let virus = document.createElement('img');
        virus.setAttribute('src', '../images/redvir.png');
        virus.className = 'other';
        virus.style.position = 'absolute';
        virus.style.width = '100px';
        virus.style.height = '100px';
        virus.style.zIndex = '-1';
        virus.style.left = pos[i].x + 'px';
        virus.style.top = pos[i].y + 'px';
        board.appendChild(virus);
    }   
};

//function invoked every 50 ms to update virus positions
setInterval(updateMovementPositions, 50);



