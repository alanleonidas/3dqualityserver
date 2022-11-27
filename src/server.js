const app = require("./app");
require("dotenv").config();

console.log(process.env);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Rodando na porta  ${PORT} `);
});