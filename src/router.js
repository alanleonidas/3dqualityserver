const express = require("express");
const cors = require("cors");
const categoriaController = require("./controllers/categoriaController");
const categoriaMiddleware = require("./middlewares/categoriaMiddleware");
const router = express.Router();

router.get("/", cors(), (request, response) => response.status(200).send("Serviço ativo"));

router.get("/categoria", cors(), categoriaController.getAll);
router.post("/categoria", cors(), categoriaMiddleware.validateBody, categoriaController.createCategoria);
router.delete("/categoria/:id", cors(), categoriaController.deleteCategoria);
router.put("/categoria/:id", cors(), categoriaMiddleware.validateBody, categoriaController.updateCategoria);


module.exports = router;