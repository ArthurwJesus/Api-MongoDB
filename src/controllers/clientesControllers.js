import cliente from "../models/cliente.js";


const listarClientes = (req,res) => {
    cliente.find((err,cliente)=>{
        res.status(200).json(cliente)
    })
}

const cadastrarCliente = (req,res) =>  {
    let clientes = new cliente(req.body)
    clientes.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message}--Erro ao cadastrar`})
        }else{
            res.status(201).send(clientes.toJSON())
        }
    })
}

const atualizarCliente = (req,res)=>{
    let id = req.params.id

    cliente.findByIdAndUpdate(id,{$set:req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`})
            }else{
                res.status(200).send({message:"Cliente Atualizado"})
            }
        })
}

const deletarCliente = (req,res)=> {
    let id = req.params.id
    cliente.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel deletar o cliente`})
        }else{
            res.status(200).send({message:"Cliente removido do cadastro"})
        }
    })
   
}

const getClienteBairro = (req,res)=>{
    const bairro = req.query.bairro
    cliente.find({'Bairro':bairro},{},(err,cliente)=>{
        res.status(200).send(cliente)
    })
}

const listarClienteId = (req,res) =>{
    const id = req.params.id
    cliente.findById(id,(err,cliente)=>{
        if(err){
            res.status(404).send({message:`${err} -- Cliente não encontrado`})
        }else{
            res.status(200).send(cliente)
        }
    })
}

export {listarClientes,cadastrarCliente,atualizarCliente,deletarCliente,getClienteBairro,listarClienteId}