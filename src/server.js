const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
const MYSQL_HOST = process.env.MYSQL_HOST;


app.listen(PORT, ()=>{
    console.log(`Rodando em HTTPS na porta  ${PORT} host ${MYSQL_HOST}`);
});