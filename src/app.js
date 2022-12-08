const express = require("express");
const router = require("./router");
// const cors = require("cors");

const app = express();

app.use(express.json());

// app.use(cors({
//     origin: [
//         "https://api.lttech.com.br",
//         "https://www.api.lttech.com.br",
//         "https://3dqualitybr.com.br",
//         "https://3dqualitybr.com.br",
//         "https://www.3dqualitybr.com.br",
//     ],
// }),);


// app.use(
//     cors({
//         credentials: true,
//         origin: [
//             `${app.mode}://api.lttech.com.br`,
//             `${app.mode}://www.api.lttech.com.br`,
//             `${app.mode}://3dqualitybr.com.br`,
//             `${app.mode}:///www.3dqualitybr.com.br`,
//             "http://127.0.0.1:5501",
//             "*",
//         ],
//     }),
// );

app.use((req, res, next) => {
    console.log("Acessou para Liberar o CORS Novo método");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");    
    if (req.method==="OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        return res.status(200).send({});
    }
    // app.use(cors());
    
    next();
});

app.use(router);

module.exports = app;