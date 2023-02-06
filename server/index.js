const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
const mongoose = require('mongoose');

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

mongoose.connect('mongodb+srv://101300174_Ronak:Greatnews_321@cluster0.18gn2vn.mongodb.net/ChatApp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => { 
  console.log('Error Mongodb connection')
}); 
io.on("connection", (socket) => {
    console.log(socket.id);
})
server.listen(3001, ()=>{
    console.log("Server running")
})