import mongoose from "mongoose"

const ItensSchema = new mongoose.Schema({
    "id": String,
    "QtdItens": Number,
    "ValorTotal": Number
})

const item = mongoose.model("itens",ItensSchema)

export default item 