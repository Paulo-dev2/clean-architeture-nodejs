import { Router } from "express";
const routeAdmin = Router();

routeAdmin.post('/',(req,res) => {
    return res.status(200).send({sucess:true})
});

export { routeAdmin };