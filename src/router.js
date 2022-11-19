const express = require("express");
const categoriaController = require("./controllers/categoriaController");
const categoriaMiddleware = require("./middlewares/categoriaMiddleware");
const produtoController = require("./controllers/produtosController");
const produtoMiddleware = require("./middlewares/produtosMiddleware");
const router = express.Router();

router.get("/", (request, response) => response.status(200).send("Serviço ativo"));

router.get("/categoria", categoriaController.getAll);
router.post("/categoria", categoriaMiddleware.validateBody, categoriaController.createCategoria);
router.delete("/categoria/:id", categoriaController.deleteCategoria);
router.put("/categoria/:id", categoriaMiddleware.validateBody, categoriaController.updateCategoria);


router.get("/produto", produtoController.getAll);
router.post("/produto", produtoMiddleware.validateBody, produtoController.createProduto);
router.delete("/produto/:id", produtoController.deleteProduto);
router.put("/produto/:id", produtoMiddleware.validateBody, produtoController.updateProduto);

module.exports = router;