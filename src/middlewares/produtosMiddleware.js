const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.descricao == undefined){
        return res.status(400).json({ message: "The field 'descricao' is required"});
    }

    if (body.descricao == ""){
        return res.status(400).json({ message: "The field 'descricao' cannot be empty"});
    }

    if (body.valorVenda == undefined){
        return res.status(400).json({ message: "The field 'valorVenda' is required"});
    }

    if (body.valorVenda == ""){
        return res.status(400).json({ message: "The field 'valorVenda' cannot be empty"});
    }

    if (body.inativo == undefined){
        return res.status(400).json({ message: "The field 'inativo' is required"});
    }

    if (body.inativo == ""){
        return res.status(400).json({ message: "The field 'inativo' cannot be empty"});
    }

    if (body.inativo != "true" && body.inativo != "false"){
        return res.status(400).json({ message: "The field 'inativo' cannot be "+body.inativo});
    }

    next();
};

module.exports = {
    validateBody
};

