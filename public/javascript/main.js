
/* 
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
}) */
// updates positions of viruses


    var virus = document.createElement('img');
    virus.setAttribute('src', '../images/redvir.png');
    virus.className = 'icon';
    // virus.style.left = data[i].x + 'px';
    // virus.style.top = data[i].y + 'px';
    virus.style.position = 'absolute';
    virus.style.width = '100px';
    virus.style.height = '100px';
    virus.style.zIndex = '-1';
    
socket.on('new-position', function(data){
    var board = document.querySelector('.game-board');
    
    // delete all viruses and place new ones
    var prev_viruses = document.querySelectorAll('.icon');
    for(var j = 0; j< prev_viruses.length; j++){
        board.removeChild(prev_viruses[i]);
    }
    
    // for(var i = 0; i < data.length; i++ ){
        // var virus = document.createElement('img');
        // virus.setAttribute('src', '../images/redvir.png');
        // virus.className = 'icon';
        // // virus.style.left = data[i].x + 'px';
        // // virus.style.top = data[i].y + 'px';
        // virus.style.position = 'absolute';
        // virus.style.width = '100px';
        // virus.style.height = '100px';
        // virus.style.zIndex = '-1';
        
        
    
    for(var i = 0; i < data.length; i++ ){
        virus.style.left = data[i].x + 'px';
        virus.style.top = data[i].y + 'px';
        board.appendChild(virus);
    }
});      

        var Key = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
        
        function listener(evt, element, func) {
            if (window.addEventListener) 
                element.addEventListener(evt, func, false);
            else
                element.attachEvent('on' + evt, func);
        }
        
        window.addEventListener('keyup', function(event) {
            if(event.key === 37){
                socket.emit('keyPress', {inputId: 'left', state: false});
            };
            if(event.key === 39){
                socket.emit('keyPress', {inputId: 'right', state: false});
            };
            if(event.key === 38){
                socket.emit('keyPress', {inputId: 'up', state: false});
            };
            if(event.key === 40){
                socket.emit('keyPress', {inputId: 'down', state: false});
            };

        });
        
        function move(evt) {
            if (!evt)
                evt = window.event;
                var keycode = evt.keyCode || evt.which; 
        
            var info = document.getElementById("chat-list");
            // var direction = "Up";
            switch (keycode) {
                case Key.LEFT:
                    socket.emit('keyPress', {inputId: 'left', state: true});
                    virus.style.left = parseInt(virus.style.left) - 5 + 'px';
                    movePointer(keycode);
                    direction = "Left";
                    checkBoundary(virus,direction);
                    break;
                case Key.UP:
                    socket.emit('keyPress', {inputId: 'up', state: true});
                    virus.style.top = parseInt(virus.style.top) - 5 + 'px';
                    movePointer(keycode);
                    direction = "Up";
                    checkBoundary(virus,direction);
                    break;
                case Key.RIGHT:
                    socket.emit('keyPress', {inputId: 'right', state: true});
                    virus.style.left = parseInt(virus.style.left) + 5 + 'px';
                    movePointer(keycode);
                    direction = "Right";
                    checkBoundary(virus,direction);
                    break;
                case Key.DOWN:
                    socket.emit('keyPress', {inputId: 'down', state: true});
                    virus.style.top = parseInt(virus.style.top) + 5 + 'px';
                    movePointer(keycode);
                    direction = "Down";
                    checkBoundary(virus,direction);
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
            if (cross(pelletes[i], virus)){
                var board = document.querySelector(".game-board");
                board.removeChild(pelletes[i]);
                playerScore= playerScore + 5;
                score.innerHTML = userName+" : "+playerScore;
                pelletes.splice(i, 1);
                pelletes.push(createpellet());
            }
            }
            for (let i = 0; i < masks.length; i++){
            if (cross(masks[i], virus)){
                var board = document.querySelector(".game-board");
                board.removeChild(masks[i]);
                playerScore = playerScore - 2;
                score.innerHTML = userName+" : "+playerScore;
                masks.splice(i, 1);
                masks.push(spawnmasks());
            }
            }
            for (let i = 0; i < sanitizers.length; i++){
            if (cross(sanitizers[i], virus)){
                var board = document.querySelector(".game-board");
                board.removeChild(sanitizers[i]);
                playerScore= playerScore - 3;
                score.innerHTML = userName+" : "+playerScore;
                sanitizers.splice(i, 1);
                sanitizers.push(spawnsan());
            }
            
            }
        }
        listener('keydown', document, move);
