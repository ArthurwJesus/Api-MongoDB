import produto from "../models/produtos.js"

const listarProdutos = (req,res) => {
        produto.find((err,produto) =>{
            res.status(200).json({data:produto,success:true})
        })
}

const listarProdutosId = (req,res)=>{
    let id = req.params.id
    produto.findById(id,(err,produto)=>{
        if(err){
            res.status(404).send({message:`${err} -- Id não encontrado`,success:false})
        }else{
            res.status(200).send({data:produto,success:true})
        }
    })
}

const cadastrarProduto = (req,res) => {
    let produtos = new produto(req.body)
    produtos.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} -- Falha no cadastro`,success:false})
        }else{
            res.status(201).send({data:produtos.toJSON(),success:true})
        }
    })
}

const atualizarProduto = (req,res)=>{
    let id = req.params.id

    produto.findByIdAndUpdate(id,{$set: req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`,success:false})
            }else{
                res.status(200).send({message:"Produto Atualizado",success:true})
            }
        })
}

const deletarProduto = (req,res)=> {
    let id = req.params.id
    produto.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o produto`,success:false})
        }else{
            res.status(200).send({message:"Produto removido do cadastro",success:true})
        }
    })
   
}

export {listarProdutos,listarProdutosId,cadastrarProduto,atualizarProduto,deletarProduto}