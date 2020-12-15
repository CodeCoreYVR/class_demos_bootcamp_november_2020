const net= require('net');

// net is a module built into NodeJS is used for createing TCP Server
const client=new net.Socket(); // socket object represents a connection

client.on("data", function(data){
    console.log("Data received from server:"+ data);
    client.end();
});

client.connect(5000,"127.0.0.1",function(){
    client.write('Tam');
});