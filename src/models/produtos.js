import mongoose from "mongoose"

const produtosSchema = new mongoose.Schema({
    "id":Number,
    "descricao": String,
    "valor": Number,
    "QtdProduto": Number
})

const produto = mongoose.model("Produtos",produtosSchema)

export default produto