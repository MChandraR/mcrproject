const express = require('express');
const createServer = require('http').createServer;
const path = require('path');

const app = express();
const http = createServer(app, {});
let usersPath = path.join(process.cwd(), "./public");


app.use(express.static(usersPath));

app.listen(3000, (e)=>{
    console.log("listening to 3000 at http://localhost:3000");
});