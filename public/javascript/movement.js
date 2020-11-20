//keycode numbers
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

viruses();

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
var Key = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

//listen for keyup events
window.addEventListener('keyup', function(event) {
    if(event.keyCode === Key.LEFT){
      socket.emit('keyPress', { inputId: 'left', press : false})
    }
    else if(event.keyCode === Key.RIGHT){
      socket.emit('keyPress', {inputId: 'right', press: false});
    }
    else if(event.keyCode === Key.UP){
      socket.emit('keyPress', {inputId: 'up', press: false});
    }
    else if(event.keyCode === Key.DOWN){
      socket.emit('keyPress', {inputId: 'down', press: false});
    }
  });
// listen for keydown events 

window.addEventListener('keydown', function(event){
  
    if(event.keyCode === Key.LEFT){
        socket.emit('keyPress', { inputId: 'left', press : true});
      }
      else if(event.keyCode === Key.RIGHT){
        socket.emit('keyPress', {inputId: 'right', press: true});
      }
      else if(event.keyCode === Key.UP){
        socket.emit('keyPress', {inputId: 'up', press: true});
      }
      else if(event.keyCode === Key.DOWN){
        socket.emit('keyPress', {inputId: 'down', press: true});
        console.log(Key.LEFT);
      }
});






//data will contain list of player info that server sends. e.g data = [{score: 44564, name: 'doughnut', x: 500, y: 625},
//                                                  {score: 44524, name: 'binks', x: 532, y: 852}]
var pos = [];
//socket listens for player movement updates
socket.on('updatePos', function(positions){
    pos = positions;
});




//   let virus = document.createElement('img');
//         virus.setAttribute('src', '../images/redvir.png');
//         virus.className = 'icon';
//         virus.style.position = 'absolute';
//         virus.style.width = '50px';
//         virus.style.height = '50px';
//         virus.style.zIndex = '-1';
        



// function updateMovementPositions(){
//     let board = document.querySelector('.game-board');
    
//     //remove all virus elements before adding new ones with updated position
//     while (document.getElementsByClassName('virus')[0]) {
//         document.getElementsByClassName('virus')[0].removeChild();
//     }
//     // clearViruses(document.querySelectorAll('.virus'));
//     for(var i = 0; i < pos.length; i++){
        
//         // let virus = document.createElement('img');
//         // virus.setAttribute('src', '../images/redvir.png');
//         // virus.className = 'icon';
//         // virus.style.position = 'absolute';
//         // virus.style.width = '50px';
//         // virus.style.height = '50px';
//         // virus.style.zIndex = '-1';
//         virus.style.left = pos[i].x + 'px';
//         virus.style.top = pos[i].y + 'px';
//         board.appendChild(virus);
//     }   
// };

// //function invoked every 50 ms to update virus positions
// setInterval(updateMovementPositions, 50);

function viruses(){
  let virus = document.createElement('img');
  virus.setAttribute('src', '../images/redvir.png');
  virus.className = 'icon';
  virus.style.position = 'absolute';
  virus.style.width = '50px';
  virus.style.height = '50px';
  virus.style.zIndex = '-1';
  


setInterval(updateMovementPositions, 50);
function updateMovementPositions(){
let board = document.querySelector('.game-board');

//remove all virus elements before adding new ones with updated position
while (document.getElementsByClassName('virus')[0]) {
  document.getElementsByClassName('virus')[0].removeChild();
}
// clearViruses(document.querySelectorAll('.virus'));
for(var i = 0; i < pos.length; i++){
  
  // let virus = document.createElement('img');
  // virus.setAttribute('src', '../images/redvir.png');
  // virus.className = 'icon';
  // virus.style.position = 'absolute';
  // virus.style.width = '50px';
  // virus.style.height = '50px';
  // virus.style.zIndex = '-1';
  virus.style.left = pos[i].x + 'px';
  virus.style.top = pos[i].y + 'px';
  board.appendChild(virus);
}   
for (let i = 0; i < pelletes.length; i++){
  if (cross(pelletes[i], virus)){
    board.removeChild(pelletes[i]);
    playerScore= playerScore + 5;
    score.innerHTML = userName+" : "+playerScore;
    pelletes.splice(i, 1);
    pelletes.push(createpellet());
      }
    }
        for (let i = 0; i < masks.length; i++){
          if (cross(masks[i], virus)){
            board.removeChild(masks[i]);
              playerScore = playerScore - 2;
            score.innerHTML = userName+" : "+playerScore;
              masks.splice(i, 1);
            masks.push(spawnmasks());
          }
        }
        for (let i = 0; i < sanitizers.length; i++){
          if (cross(sanitizers[i], virus)){

            board.removeChild(sanitizers[i]);
            playerScore= playerScore - 3;
            score.innerHTML = userName+" : "+playerScore;
              sanitizers.splice(i, 1);
            sanitizers.push(spawnsan());
          }
          
        }
};
}
