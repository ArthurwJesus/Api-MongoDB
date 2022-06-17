import  express from "express";
import router from "./routers.js";

const routes = (app) => {
    app.route("/").get((req,res)=>{
        res.status(200).send("Bem vindo")
    })

    app.use(
        express.json(),
        router
        )
}

export default routes