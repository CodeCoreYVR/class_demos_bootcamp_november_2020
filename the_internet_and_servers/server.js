const net=require('net');
// net is a module built into NodeJS is used for createing TCP Server
const server= net.createServer(function(socket){
// this callback funciton is an event listener
// an event listener is a finction that will trigger specified event
// 'socket' is representing a connection
    socket.on("data", function(data){

        console.log("Data received on server:" + data)
        socket.write('Roger,' + data);
    });
    socket.on('end',()=>{
        console.log('--------Connection closed---------')
    })
});

const ADDRESS="127.0.0.1";
const PORT=5000
server.listen(PORT,ADDRESS,()=>{
    console.log(`Server is listening on ${ADDRESS}:${PORT}`)
});
