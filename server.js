"use strict";
const op=require("./operacion.js");
var http=require("http");

var server=http.createServer(function (req, res){
    res.writeHead(200,{"content-type": "text/plain"});
    res.end("Hola Mundo");
});
console.log("RESULTADO",op.suma(3,4));
console.log("Nombre es:", op.getNombre());

server.listen(8080);