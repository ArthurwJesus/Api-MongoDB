import pedidos from "../models/pedido.js";

const listaPedidos = (req,res) => {
    pedidos.find({})
    .populate("cliente")
    .populate("item")
    .exec((err,pedidos)=>{
        res.status(200).json(pedidos)
        console.log(pedidos)
    })
}

const criarPedido = (req,res) =>{
    let pedido = new pedidos(req.body)
    if(pedido.item.length <=0){
        res.status(500).send({message:"Falha na criação",success:false})
    }else{
        pedido.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha na criação`})
            }else{
                res.status(201).send(pedido.toJSON())
            }
    })
}
}

const deletarPedido = (req,res) =>{
    let id = req.params.id
    pedidos.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o pedido`})
        }else{
            res.status(200).send({message:"pedido removido da lista"})
        }
    })
}

const getPedidoId = (req,res) =>{
    let id = req.params.id
    pedidos.findById(id).populate("cliente")
    .populate("item").exec((err,pedidos)=>{
        if(err){
            res.status(400).send({message: `${err} -- Pedido não encontrado`})
        }else{
            res.status(200).send(pedidos)
        }
    })
}

const getProdutosById = (req,res) => {
    let id = req.params.id
    pedidos.findById(id)
    .populate("item")
    .exec((err,pedidos)=>{
        if(err){
            res.status(400).send({message: `${err} -- produtos não encontrado`})
        }else{
            res.status(200).send(pedidos)
        }
    })
}

export {listaPedidos,criarPedido,deletarPedido,getPedidoId,getProdutosById}