import mongoose from "mongoose"

const ItensSchema = new mongoose.Schema({
    "id": String,
    "QtdItens": Number,
    "ValorTotal": Number,
    "produto": {type: mongoose.Schema.Types.ObjectId,ref:"Produtos"}
})

const item = mongoose.model("Itens",ItensSchema)

export default item 