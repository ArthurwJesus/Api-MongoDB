import mongoose from "mongoose"

const PedidossSchema = new mongoose.Schema({
    "id": String,
    "dataPedido": String,
    "cliente": {type: mongoose.Schema.Types.ObjectId,ref:"Clientes"},
    "itens": [ItensSchema]
})

const pedidos = mongoose.model("Pedidos",ClientesSchema)

export default pedidos 