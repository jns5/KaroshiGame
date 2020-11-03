const express =  require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//static folder 
app.use(express.static(path.join(__dirname,"public")))

server.listen(PORT, ()=> 
    console.log("Running the server, port = "+ PORT)
);

io.on("connection",socket=>{
    console.log("new connection");
});

