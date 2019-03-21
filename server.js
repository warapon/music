const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/dist/music-font-end'));

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
app.get('*',(req,res)=>{res.sendFile(path.join(__dirname)+'/dist/music-font-end/index.html');})

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'));