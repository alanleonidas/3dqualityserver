const connection = require("./connection");

const getAll = async () => {
    console.log("--> produtosModel --> executando getAll ");
    const [produtos] = await connection.execute("SELECT P.ID as id, P.PR_DESCRICAO as descricao, P.PR_OBSERVACAO as observacao, "+
                                                " P.PR_DESCRICAORESUMIDA as descricaoResumida, P.PR_VALORVENDA as valorVenda, "+
                                                 "P.PR_PROMOCAO as promocao, P.PR_DATAPROMOCAOINICIO as dataPromocaoInicio, "+
                                                 "P.PR_DATAPROMOCAOFIM as dataPromocaoFim, P.PR_VALORPROMOCAO as valorPromocao, "+
                                                 "P.PR_INATIVO as inativo, P.PR_FOTOS as imgs, c.NOME as categoria FROM PRODUTOS AS P LEFT JOIN CATEGORIA c ON (c.ID = P.PR_IDCATEGORIA ) "+
                                                 " WHERE PR_INATIVO <> '1' AND deleted_at is null");
    console.log(produtos);                                        
    return produtos;
};

const getByCategoriaAll = async (id) => {
    console.log("--> produtosModel --> executando getByCategoriaAll "+id);
    const [produtos] = await connection.execute("SELECT P.ID as id, P.PR_DESCRICAO as descricao, P.PR_OBSERVACAO as observacao, "+
                                                " P.PR_DESCRICAORESUMIDA as descricaoResumida, P.PR_VALORVENDA as valorVenda, "+
                                                 "P.PR_PROMOCAO as promocao, P.PR_DATAPROMOCAOINICIO as dataPromocaoInicio, "+
                                                 "P.PR_DATAPROMOCAOFIM as dataPromocaoFim, P.PR_VALORPROMOCAO as valorPromocao, "+
                                                 "P.PR_INATIVO as inativo, P.PR_FOTOS as imgs, c.NOME as categoria FROM PRODUTOS AS P LEFT JOIN CATEGORIA c ON (c.ID = P.PR_IDCATEGORIA ) "+
                                                 " WHERE PR_INATIVO <> '1' AND deleted_at is null AND c.NOME = '"+id+"'");
    console.log(produtos);                                        
    return produtos;
};

const createProduto = async (produtos) =>{
    const queryInsert = "INSERT INTO PRODUTOS (PR_DESCRICAO, PR_OBSERVACAO, PR_DESCRICAORESUMIDA, PR_VALORVENDA, PR_PROMOCAO, "+
                        "PR_DATAPROMOCAOINICIO, PR_DATAPROMOCAOFIM, PR_VALORPROMOCAO, PR_INATIVO, PR_IDCATEGORIA, PR_FOTOS, created_at) "+
                        "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const { descricao, observacao, descricaoResumida, valorVenda, promocao
        , dataPromocaoInicio, dataPromocaoFim, valorPromocao, inativo, fotos, idCategoria} = produtos;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createProduto] = await connection.execute(queryInsert, 
        [descricao, observacao, descricaoResumida, valorVenda, promocao, dataPromocaoInicio, dataPromocaoFim, valorPromocao, inativo, idCategoria, fotos, dateUTC]);

    return { descricao: descricao, insertId: createProduto.insertId};
};

const deleteProduto = async (id) =>{
    const dateUTC = new Date(Date.now()).toUTCString();

    const [removeProduto] = await connection.execute("UPDATE PRODUTOS SET deleted_at = ? WHERE ID = ?", [dateUTC,id]);

    return removeProduto;
};


const updateProduto = async (id, produto) =>{
    const { descricao, observacao, descricaoResumida, valorVenda, promocao
        , dataPromocaoInicio, dataPromocaoFim, valorPromocao, inativo, idCategoria, fotos} = produto;
    const dateUTC = new Date(Date.now()).toUTCString();
    const [updateProduto] = await connection.execute("UPDATE PRODUTOS SET PR_DESCRICAO = ?, PR_OBSERVACAO = ?, PR_DESCRICAORESUMIDA = ?, "+
        "PR_VALORVENDA = ?, PR_PROMOCAO = ?, PR_DATAPROMOCAOINICIO = ?, PR_DATAPROMOCAOFIM = ?, PR_VALORPROMOCAO = ?, PR_INATIVO = ?, "+
        "PR_FOTOS = ?, PR_IDCATEGORIA = ?, update_at = ? WHERE ID = ?", [descricao, observacao, descricaoResumida, valorVenda, promocao, dataPromocaoInicio, dataPromocaoFim, valorPromocao, inativo, fotos, idCategoria,  dateUTC, id]);

    return updateProduto;
};

module.exports = {
    getAll,
    getByCategoriaAll,
    createProduto,
    deleteProduto,
    updateProduto
};