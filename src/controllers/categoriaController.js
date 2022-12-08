const categoriaModel = require("../models/categoriaModel");

const getAll = async (req, res) =>{
    console.log(" --> categoriaController --> getAll");

    // var token = req.headers["x-access-token"];
    // if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    // if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const categoria = await categoriaModel.getAll();
    
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");  
    return res.status(200).json({result: categoria});   
};

const createCategoria = async (req, res) =>{    
    console.log(" --> categoriaController --> createCategoria");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const categoria = await categoriaModel.createCategoria(req.body);
    return res.status(201).json(categoria);
};

const deleteCategoria = async (req, res) => {   
    console.log(" --> categoriaController --> deleteCategoria");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    await categoriaModel.deleteCategoria(id);
    return res.status(204).json();
};

const updateCategoria = async (req, res) =>{   
    console.log(" --> categoriaController --> updateCategoria");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    await categoriaModel.updateCategoria(id, req.body);
    return res.status(204).json();
};

module.exports ={
    getAll,
    createCategoria,
    deleteCategoria,
    updateCategoria
};