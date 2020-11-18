//create server
const express =  require("express");
const app = express();

const path = require("path");
const http = require("http");
const serv = http.Server(app); 

//const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
serv.listen(PORT, function(){
    console.log("listening at 3000"); 
});
//const server = app.listen(PORT, function(){
//   console.log("listening at 3000");
//});

//send the index.html file
app.get('/', function(req, res){
    res.sendFile('public/index.html', {root: __dirname});
});
//static folder 
//app.use(express.static(path.join(__dirname,"public")))
app.use(express.static('public'));


//server.listen(PORT, () => 
//    console.log("Running the server, port = " + PORT)
//);

//list of players
var SOCKET_LIST = {};
var PLAYER_LIST = {};
var Player = function(id) {
    var self = {
        x: parseInt(Math.random()* 950),
        y: parseInt(Math.random()* 600),
        id : id,
        number : "" + Math.floor(10* Math.random()),
        pressingRight: false,
        pressingLeft: false,
        pressingUp: false,
        pressingDown: false,
        maxSpd: 10
    }
    self.updatePosition = function() {
        if(self.pressingRight){
            self.x += self.maxSpd;
        }
        if(self.pressingLeft){
            self.x -= self.maxSpd;
        }
        if(self.pressingUp){
            self.y -= self.maxSpd;
        }
        if(self.pressingDown){
            self.y += self.maxSpd;
        }
    }
    return self;
}
//loading socket.io and binding to server
const io = require("socket.io")(serv);

io.sockets.on("connection", function(socket) {
    io.emit('add-player', "hello");    
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;
    console.log(SOCKET_LIST[socket.id].id + " joined the game");
    //add player to player list
    var player = Player(socket.id);
    PLAYER_LIST[socket.id] = player;

    // listens when a user enters username, for debugging
    socket.on('user.join', function(userName) {
        socket.userName = userName;
    //    socket.emit('add-player', userName);
        console.log("hello" + userName);
    })
    
    
    
    
    socket.on('disconnect', function (){
        console.log(SOCKET_LIST[socket.id].id + " left the game")
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    })

});

setInterval(function(){
    var pack = [];
    for(var i in PLAYER_LIST){
        var player = PLAYER_LIST[i];
        player.updatePosition;
        pack.push({
            x: player.x,
            y: player.y,
            number: player.number
        })
    }

    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit('new-position', pack);
    }
}, 1000/25)