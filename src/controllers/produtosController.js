const produtosModel = require("../models/produtosModel");

const getAll = async (req, res) =>{
    console.log(" --> produtoController --> getAll");

    // var token = req.headers["x-access-token"];
    // if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    // if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const produtos = await produtosModel.getAll();
    return res.status(200).json({result: produtos});   
};

const getByID = async (req, res) =>{
    console.log(" --> produtoController --> getAll");

    // var token = req.headers["x-access-token"];
    // if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    // if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    const produtos = await produtosModel.getByID(id);
    return res.status(200).json({result: produtos});   
};

const getAllCadastro = async (req, res) =>{
    console.log(" --> produtoController --> getAll");

    // var token = req.headers["x-access-token"];
    // if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    // if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const produtos = await produtosModel.getAllCadastro();
    return res.status(200).json({result: produtos});   
};

const getByCategoriaAll = async (req, res) =>{
    console.log(" --> produtoController --> getByCategoriaAll");

    // var token = req.headers["x-access-token"];
    // if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    // if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    const produtos = await produtosModel.getByCategoriaAll(id);
    return res.status(200).json({result: produtos});   
};

const createProduto = async (req, res) =>{    
    console.log(" --> produtoController --> createProduto");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const produto = await produtosModel.createProduto(req.body);
    return res.status(201).json(produto);
};

const deleteProduto = async (req, res) => {   
    console.log(" --> produtoController --> deleteProduto");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    await produtosModel.deleteProduto(id);
    return res.status(204).json();
};

const updateProduto = async (req, res) =>{   
    console.log(" --> produtoController --> updateProduto");
    var token = req.headers["x-access-token"];
    if (!token) return res.status(401).send({ auth: false, message: "Nenhum token informado."});
    if (token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21pbmlvIjoiM0RRdWFsaXR5QnIiLCJuYW1lIjoiU2VydmljZSIsInBhc3N3b2FyZCI6IkFwaUE4MTMyMDBETFQhIyJ9.cDoBWGGPIn_6o7-EG62d-_LOKLfxBlKP2shgRPn2Wec")  return res.status(401).send({ auth: false, message: "Token não autorizado."});
    const  { id } = req.params;
    await produtosModel.updateProduto(id, req.body);
    return res.status(204).json();
};

module.exports ={
    getAll,
    getByID,
    getAllCadastro,
    getByCategoriaAll,
    createProduto,
    deleteProduto,
    updateProduto
};