import { Request, Response, Router } from "express";
import { makeRegisterUserController } from '../factories/client/users/register'
/* import { registerUserController } from '../factories/client/users/register' */
import { adaptRoute } from '../adapters/express-route-adapter'

const routeCient = Router();

routeCient.post('/', adaptRoute.create(makeRegisterUserController().handle));


export { routeCient };