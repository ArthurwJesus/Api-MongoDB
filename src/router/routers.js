import  express from "express";
import{
    listarProdutos,
    cadastrarProduto,
    atualizarProduto,
    listarProdutosId,
    deletarProduto} from "../controllers/produtosController.js"

import{
    listarItemId,
    listarItens,
    cadastrarItem,
    atualizarItem,
    deletarItem,
} from "../controllers/itensController.js";

import{
    listarClientes,
    cadastrarCliente,
    atualizarCliente,
    deletarCliente,
    getClienteBairro
} from "../controllers/clientesControllers.js"

import {
    listaPedidos,
    criarPedido,
    deletarPedido,
    getPedidoId,
    getProdutosById
} from "../controllers/pedidoController.js"

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

//Clientes
router.get("/clientes",listarClientes)
router.post("/clientes",cadastrarCliente)
router.put("/clientes/:id",atualizarCliente)
router.delete("/clientes/:id",deletarCliente)
router.get("/clientes/busca",getClienteBairro)

//Pedido
router.get("/pedidos",listaPedidos)
router.post("/pedidos",criarPedido)
router.delete("/pedidos/:id",deletarPedido)
router.get("/pedidos/:id",getPedidoId)
router.get("/pedidos/:id/produtos",getProdutosById)

export default router