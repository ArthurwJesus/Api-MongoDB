import pedidos from "../models/pedido.js";

const listaPedidos = (req,res) => {
    pedidos.find({})
    .populate("cliente")
    .populate("item")
    .exec((err,pedidos)=>{
        res.status(200).json({data: pedidos,success:true})
    })
}

const criarPedido = (req,res) =>{
    let pedido = new pedidos(req.body)
    if(pedido.item.length <=0){
        res.status(500).send({message:"Falha na criação",success:false})
    }else{
        pedido.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha na criação`,success:false})
            }else{
                res.status(201).send({data:pedido.toJSON(),success:true})
            }
    })
}
}

const deletarPedido = (req,res) =>{
    let id = req.params.id
    pedidos.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o pedido`,success:false})
        }else{
            res.status(200).send({message:"pedido removido da lista",success:true})
        }
    })
}

const atualizarPedido = (req,res) => {
    let id = req.params.id

    pedidos.findByIdAndUpdate(id,{$set:req.body},(err)=>{
        if(err){
            res.status(500).send({message:`${err.message} -- Falha ao atualizar`,success:false})
        }else{
            res.status(200).send({message:"Pedido Atualizado",success:true})
        }
    })
}

const getPedidoId = (req,res) =>{
    let id = req.params.id
    pedidos.findById(id).populate("cliente")
    .populate("item").exec((err,pedidos)=>{
        if(err){
            res.status(400).send({message: `${err} -- Pedido não encontrado`,success:false})
        }else{
            res.status(200).send({data: pedidos,success:true})
        }
    })
}

const getProdutosById = (req,res) => {
    let id = req.params.id
    pedidos.findOne({_id: id})
    .populate({
        path:"item",
        populate:{
            path:"produto"
        }
    })
    .exec((err,pedidos)=>{
        if(err){
            res.status(400).send({message: `${err} -- produtos não encontrado`,success:false})
        }else{
            res.status(200).send({data:pedidos.item,success:true})
        }
    })
}

export {listaPedidos,criarPedido,deletarPedido,getPedidoId,getProdutosById,atualizarPedido}