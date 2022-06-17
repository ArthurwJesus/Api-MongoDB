import item from "../models/itens.js"

const listarItens = (req,res) => {
        item.find((err,item) =>{
            res.status(200).json(item)
        })
}

const listarItemId = (req,res)=>{
    let id = req.params.id
    item.findById(id,(err,item)=>{
        if(err){
            res.status(404).send({message:`${err} -- Id não encontrado`})
        }else{
            res.status(200).send(item)
        }
    })
}

const cadastrarItem = (req,res) => {
    let itens = new item(req.body)
    itens.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} -- Falha no cadastro`})
        }else{
            res.status(201).send(itens.toJSON())
        }
    })
}

const atualizarItem = (req,res)=>{
    let id = req.params.id

    item.findByIdAndUpdate(id,{$set: req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`})
            }else{
                res.status(200).send({message:"item Atualizado"})
            }
        })
}

const deletarItem = (req,res)=> {
    let id = req.params.id
    item.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o item`})
        }else{
            res.status(200).send({message:"item removido do cadastro"})
        }
    })
   
}

export {listarItemId,listarItens,cadastrarItem,atualizarItem,deletarItem}