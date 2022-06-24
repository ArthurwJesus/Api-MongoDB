import mongoose from "mongoose"
import {ItensSchema} from "./itens.js"

const PedidossSchema = new mongoose.Schema({
    "id": String,
    "dataPedido":{type:Date,default:Date.now},
    "cliente": {type: mongoose.Schema.Types.ObjectId,ref:"Clientes",required:true},
    "item":[{type: mongoose.Schema.Types.ObjectId,ref:"Itens"}]
    // "item": [ItensSchema]
})

const pedidos = mongoose.model("Pedidos",PedidossSchema)

export default pedidos 