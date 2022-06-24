import cliente from "../models/cliente.js";


const listarClientes = (req,res) => {
    cliente.find((err,cliente)=>{
        res.status(200).json({data:cliente,success:true})
    })
}

const cadastrarCliente = (req,res) =>  {
    let clientes = new cliente(req.body)
    clientes.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message}--Erro ao cadastrar`,success:false})
        }else{
            res.status(201).send({data:clientes.toJSON(),success:true})
        }
    })
}

const atualizarCliente = (req,res)=>{
    let id = req.params.id

    cliente.findByIdAndUpdate(id,{$set:req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`,success:false})
            }else{
                res.status(200).send({message:"Cliente Atualizado",success:true})
            }
        })
}

const deletarCliente = (req,res)=> {
    let id = req.params.id
    cliente.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel deletar o cliente`,success:false})
        }else{
            res.status(200).send({message:"Cliente removido do cadastro",success:true})
        }
    })
   
}

const getClienteBairro = (req,res)=>{
    const bairro = req.query.bairro
    cliente.find({'Bairro':bairro},{},(err,cliente)=>{
        if(err){
            res.status(404).send({message:`${err} -- Cliente(es) não encontrado`,success:false})
        }else{
            res.status(200).send({data:cliente,success:true})
        }
    })
}

const listarClienteId = (req,res) =>{
    const id = req.params.id
    cliente.findById(id,(err,cliente)=>{
        if(err){
            res.status(404).send({message:`${err} -- Cliente não encontrado`,success:false})
        }else{
            res.status(200).send({data:cliente,success:true})
        }
    })
}

export {listarClientes,cadastrarCliente,atualizarCliente,deletarCliente,getClienteBairro,listarClienteId}