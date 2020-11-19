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

var Player = function(name,id){
    self = {
    name: name,
    score : 0,
    id: id
    }
    self.updateScore = function (score) {
        self.score = score;
    }
    return self;
}

//list of sockets
SOCKET_LIST = {};
//list of scores
SCORES_LIST = {};
//loading socket.io and binding to server
const io = require('socket.io')(serv);
io.sockets.on('connection', function(socket) {
    console.log(socket.id + 'has joined the game.');
    
    
    //add name to the player
    var name = 'anon';
    socket.on('username-submit', function(username) {
        name = username;
        console.log("hello" + username); // for debugging
    })
    var player = new Player(name, socket.id);
    SCORES_LIST[socket.id] = player;
    SOCKET_LIST[socket.id] = socket;
       


    //listen for new score updates from user, then change player.score accordingly
    socket.on('sendNewScore', function(score) {
        player.updateScore(score);
        console.log(score);
    });
    
    socket.emit('sendClient', {hello: 'world'}); // debugging
   
    socket.on('recievedClient', function(data) { // also debugging
        console.log(data)
    })
    
    socket.on('disconnect', function() {
        console.log(socket.id + 'has left the game.')
        delete SCORES_LIST[socket.id];
        delete SOCKET_LIST[socket.id];
    });

});
    //emit score every 40 milliseconds
    setInterval(function(){
        var pack = [];
        for(var i in SCORES_LIST){
            var score_player = SCORES_LIST[i];
            pack.push({
                name: score_player.name,
                score: score_player.score
            })
        }
        for(var j in SOCKET_LIST){
            var socket = SOCKET_LIST[j];
            socket.emit('updateScores', pack);
        }

    },40)
