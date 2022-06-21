import mongoose from "mongoose"

const ClientesSchema = new mongoose.Schema({
    "id": String,
    "nome": String,
    "telefone": String,
    "Bairro": String,
    "Pagamento": String
})

const cliente = mongoose.model("clientes",ClientesSchema)

export default cliente 