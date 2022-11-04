const categoriaModel = require("../models/categoriaModel");

const getAll = async (_req, res, next) =>{
    console.log(" --> categoriaController --> getAll");
    const categoria = await categoriaModel.getAll();
    next();
    return res.status(200).json({result: categoria});
};

const createCategoria = async (req, res) =>{
    console.log(" --> categoriaController --> createCategoria");
    const categoria = await categoriaModel.createCategoria(req.body);
    return res.status(201).json(categoria);
};

const deleteCategoria = async (req, res) => {
    console.log(" --> categoriaController --> deleteCategoria");
    const  { id } = req.params;
    await categoriaModel.deleteCategoria(id);
    return res.status(204).json();
};

const updateCategoria = async (req, res) =>{
    console.log(" --> categoriaController --> updateCategoria");
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