const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

// app.post("/categoria", (request, response) => {
//     console.log(" --> "+ request.body.nome);
//     const nome = request.body.nome;

//     if(nome==null){
//         //res.statusMessage = "Nome não informado";
//         response.status(400).end();
//         response.send({msg: "'nome' não informado"});
//     }else{
//         db.query("SELECT ID FROM CATEGORIA WHERE UPPER(NOME) = UPPER(?)", [nome], 
//             (err, results) =>{
//                 if(err){
//                     response.send(err);
//                 }else{
//                     if(results.length ==0){
//                         db.query("INSERT INTO CATEGORIA (NOME) VALUES (?)", [nome], (err, response) =>{
//                             if(err){
//                                 response.send(err);
//                             } else{
//                                 response.send({msg: "Cadastrado com sucesso!"});
//                             }
//                         });
//                     } else {
//                         response.statusMessage = "Categoria já cadastrada";
//                         response.status(400).end();
//                     }
//                 }
//             });
//     }});

app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`);
});