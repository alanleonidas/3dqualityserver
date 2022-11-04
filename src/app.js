const express = require("express");
const router = require("./router");
const cors = require("cors");
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

module.exports = app;