import  express from "express";
import router from "./routers.js";

const routes = (app) => {
    app.route("/").get((req,res)=>{
        res.status(200).send({message:"Olá esse é mini sistema de pedidos!",success:true})
    })

    app.use(
        express.json(),
        router
        )
}

export default routes