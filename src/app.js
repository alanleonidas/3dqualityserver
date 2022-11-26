const express = require("express");
const https = require("https");
const fs = require('fs');
const router = require("./router");
const cors = require("cors");


var key = fs.readFileSync(__dirname + "/../certs/selfsigned.key");
var cert = fs.readFileSync(__dirname + "/../certs/selfsigned.crt");
var options = {
    key: key,
    cert: cert
};


const app = express();


app.use(express.json());

app.use((req, res, next) => {
    console.log("acessou o middlewares");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");    
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});


app.use(router);

var server = https.createServer(options, app);


module.exports = server;