import produto from "../models/produtos.js"

const listarProdutos = (req,res) => {
        produto.find((err,produto) =>{
            res.status(200).json(produto)
        })
}

const listarProdutosId = (req,res)=>{
    let id = req.params.id
    produto.findById(id,(err,produto)=>{
        if(err){
            res.status(404).send({message:`${err} -- Id não encontrado`})
        }else{
            res.status(200).send(produto)
        }
    })
}

const cadastrarProduto = (req,res) => {
    let produtos = new produto(req.body)
    produtos.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} -- Falha no cadastro`})
        }else{
            res.status(201).send(produtos.toJSON())
        }
    })
}

const atualizarProduto = (req,res)=>{
    let id = req.params.id

    produto.findByIdAndUpdate(id,{$set: req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`})
            }else{
                res.status(200).send({message:"Produto Atualizado"})
            }
        })
}

const deletarProduto = (req,res)=> {
    let id = req.params.id
    produto.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o produto`})
        }else{
            res.status(200).send({message:"Produto removido do cadastro"})
        }
    })
   
}

export {listarProdutos,listarProdutosId,cadastrarProduto,atualizarProduto,deletarProduto}