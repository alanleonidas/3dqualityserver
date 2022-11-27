const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Rodando na porta  ${PORT} `);
});