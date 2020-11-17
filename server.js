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


//loading socket.io and binding to server
const io = require("socket.io")(serv);
var SOCKET_LIST = {};

io.sockets.on("connection", function(socket) {
    console.log("new connection");
    
    // listens when a user enters username
    socket.on('user.join', function(userName) {
        socket.userName = userName;
        console.log("hello" + userName);
    })
});

