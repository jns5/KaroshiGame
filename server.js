//create server
const express =  require("express");
const app = express();
//var session = require('express-session');
const path = require("path");
const http = require("http");

const morgan = require("morgan");
app.use(morgan('dev'));



//const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function(){
    console.log("listening at 3000");
});

//loading socket.io and binding to server
const io = require("socket.io")(server);

//static folder 
//app.use(express.static(path.join(__dirname,"public")))
app.use(express.static('public'));
//send the index.html file
app.get('/', function(req, res){
    res.sendFile('index.html', {root: __dirname});
});

app.use(express.json());
app.use(express.urlencoded());

const chatRouter = require('./routes/post');
app.use(chatRouter);

const createDB = require('./daos/db');
createDB();

//server.listen(PORT, () => 
//    console.log("Running the server, port = " + PORT)
//);

io.sockets.on("connection", function(socket) {
    console.log("new connection");
});

