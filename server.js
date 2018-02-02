const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const config = {port:process.env.PORT || 3000};
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'production')));

server.listen(config.port,function(){
    console.log("application is listening on port",config.port);
})