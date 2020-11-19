//create server
const express =  require("express");
const app = express();


const path = require("path");
const http = require("http");
const serv = http.Server(app); 

const PORT = process.env.PORT || 3000;
serv.listen(PORT, function(){
    console.log("listening at port 3000"); 
});


app.use(express.static('public'));
//send the index.html file
app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname});
});

var Player = function(name, id){
    self = {
        name: name,
        score : 0,
        id: id,
        pressingUp: false,
        pressingDown: false,
        pressingLeft: false,
        pressingRight: false,
        speed: 5,
        x: parseInt(Math.random() * 950),
        y: parseInt(Math.random() * 600)
    }
    self.updateScore = function (score) {
        self.score = score;
    }
    //function to update name after entering
    self.changeName = function(name) {
        self.name = name;
    }
    self.updatePosition = function(){
        if(self.pressingLeft){
            self.x -= self.speed;
        }
        if(self.pressingRight){
            self.x += self.speed;
        }
        if(self.pressingUp){
            self.y -= self.speed;
        }
        if(self.pressingDown){
            self.y += self.speed;
            console.log(self.y); // for debugging, it currently works
        }
    }
    return self;
}

//list of sockets
SOCKET_LIST = {};
//list of scores&players
PLAYERS_LIST = {};
//loading socket.io and binding to server
const io = require('socket.io')(serv);

io.sockets.on('connection', function(socket) {
    console.log(socket.id + ' has joined the game.');
    
    //create a player
    var player = new Player(name = 'anonymous', socket.id);
    //add name to the player
    socket.on('username-submit', function(username) {
        player.changeName(username);
        console.log("hello" + username); // for debugging
    });
    
    //add players to these lists
    PLAYERS_LIST[socket.id] = player;
    SOCKET_LIST[socket.id] = socket;
       


    //listen for new score updates from user, then change player.score accordingly
    socket.on('sendNewScore', function(score) {
        player.updateScore(score);
        
    });
    
    socket.on('keyPress', function(keyData){
        if(keyData.inputId === 'left')
            player.pressingLeft = keyData.press;
        
        if(keyData.inputId === 'right')
            player.pressingRight = keyData.press;
            
        if(keyData.inputId === 'up')
            player.pressingUp = keyData.press;
            
        if(keyData.inputId === 'down')
            player.pressingDown = keyData.press;
            
        
    });
    
    socket.on('disconnect', function() {
        console.log(socket.id + ' has left the game.')
        delete PLAYERS_LIST[socket.id]; //delete player when disconnect
        delete SOCKET_LIST[socket.id]; //delete player when disconnect
    });

}); // end of ` io.sockets.on `
    

    //emit score every 40 milliseconds
    setInterval(function(){
        // info about name and scores of everyone to be sent to every player
        var pack = [];
        for(var i in PLAYERS_LIST){
            var score_player = PLAYERS_LIST[i];
            score_player.updatePosition();
            pack.push({
                name: score_player.name,
                score: score_player.score,
                x: score_player.x,
                y: score_player.y
            })
        }
        for(var j in SOCKET_LIST){
            var socket = SOCKET_LIST[j];
            socket.emit('updateScores', pack);
            socket.emit('updatePos', pack);
        }

    },50);
