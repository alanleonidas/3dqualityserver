const express = require("express");
const categoriaController = require("./controllers/categoriaController");
const categoriaMiddleware = require("./middlewares/categoriaMiddleware");
const router = express.Router();


router.get("/", (request, response) => response.status(200).send("Serviço ativo"));

router.get("/categoria", categoriaController.getAll);
router.post("/categoria", categoriaMiddleware.validateBody, categoriaController.createCategoria);
router.delete("/categoria/:id", categoriaController.deleteCategoria);
router.put("/categoria/:id", categoriaMiddleware.validateBody, categoriaController.updateCategoria);


module.exports = router;