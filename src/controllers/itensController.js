import item from "../models/itens.js"

const listarItens = (req,res) => {
    item.find().populate("produto").exec((err,item) =>{
        res.status(200).json({data:item,success:true})
    })
}

const listarItemId = (req,res)=>{
    let id = req.params.id
    item.findById(id).populate("produto","descricao")
    .exec((err,item)=>{
        if(err){
            res.status(404).send({message:`${err} -- Id não encontrado`,success:false})
        }else{
            res.status(200).send({data:item,success:true})
        }
    })
}

const cadastrarItem = (req,res) => {
    let itens = new item(req.body)
    itens.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} -- Falha no cadastro`,success:false})
        }else{
            res.status(201).send({data:itens.toJSON(),success:true})
        }
    })
}

const atualizarItem = (req,res)=>{
    let id = req.params.id

    item.findByIdAndUpdate(id,{$set: req.body},
        (err)=>{
            if(err){
                res.status(500).send({message:`${err.message} -- Falha ao atualizar`,success:false})
            }else{
                res.status(200).send({message:"item Atualizado",success:true})
            }
        })
}

const deletarItem = (req,res)=> {
    let id = req.params.id
    item.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).send({message: `${err.message} -- Não foi possivel remover o item`,success:false})
        }else{
            res.status(200).send({message:"item removido do cadastro",success:true})
        }
    })
   
}

export {listarItemId,listarItens,cadastrarItem,atualizarItem,deletarItem}