import { Router } from "express";
import { makeRegisterUserController } from '../factories/client/users/register'
import { adaptRoute } from '../adapters/express-route-adapter'

const routeCient = Router();

routeCient.post('/', adaptRoute.create(makeRegisterUserController()));


export { routeCient };