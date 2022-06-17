import  express from "express";
import{listarProdutos,
    cadastrarProduto,
    atualizarProduto,
    listarProdutosId,
    deletarProduto} from "../controllers/produtosController.js"
import{listarItemId,
    listarItens,
    cadastrarItem,
    atualizarItem,
    deletarItem 
} from "../controllers/itensController.js";

const router = express.Router();

//Produtos
router.get("/produtos",listarProdutos)
router.get("/produtos/:id",listarProdutosId)
router.post("/produtos",cadastrarProduto)
router.put("/produtos/:id",atualizarProduto)
router.delete("/produtos/:id",deletarProduto)

//Itens
router.get("/itens",listarItens)
router.get("/itens/:id",listarItemId)
router.post("/itens",cadastrarItem)
router.put("/itens/:id",atualizarItem)
router.delete("/itens/:id",deletarItem)

export default router