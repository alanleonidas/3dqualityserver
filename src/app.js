const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Acessou para Liberar o CORS Novo método");
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "*");    
    // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    
    app.use(cors({
        origin: [
            "https://api.lttech.com.br",
            "https://www.api.lttech.com.br",
            "https://3dqualitybr.com.br",
            "https://www.3dqualitybr.com.br",
        ],
    }),);
    next();
});

app.use(router);

module.exports = app;