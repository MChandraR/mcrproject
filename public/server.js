const express = require('express');
const createServer = require('http').createServer;

const app = express();
const http = createServer(app, {});

app.use(express.static("public"));

app.listen(3000, (e)=>{
    console.log("listening to 3000 at http://localhost:3000");
});