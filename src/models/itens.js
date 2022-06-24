import mongoose from "mongoose"

export const ItensSchema = new mongoose.Schema({
    "id": {type: String},
    "QtdItens": Number,
    "ValorTotal": Number,
    "produto": {type: mongoose.Schema.Types.ObjectId,ref:"Produtos",required:true}
})

const item = mongoose.model("Itens",ItensSchema)

export default item 