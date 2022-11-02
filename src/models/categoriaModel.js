const connection = require("./connection");

const getAll = async () => {
    console.log("--> categoriaModel --> executando getAll ");
    const [categoria] = await connection.execute("SELECT * FROM CATEGORIA c ");
    return categoria;
};

const createCategoria = async (categoria) =>{
    const { nome } = categoria;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createCategoria] = await connection.execute("INSERT INTO CATEGORIA (NOME, createAt) VALUES (?,?)", [nome, dateUTC]);

    return { nome: nome, insertId: createCategoria.insertId};
};

const deleteCategoria = async (id) =>{
    const [removeCategoria] = await connection.execute("DELETE FROM CATEGORIA WHERE ID = ?", [id]);

    return removeCategoria;
};


const updateCategoria = async (id, categoria) =>{
    const { nome } = categoria;
    const [updateCategoria] = await connection.execute("UPDATE CATEGORIA SET NOME = ? WHERE ID = ?", [nome , id]);

    return updateCategoria;
};

module.exports = {
    getAll,
    createCategoria,
    deleteCategoria,
    updateCategoria
};