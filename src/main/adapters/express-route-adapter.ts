import { Request, Response } from 'express';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';

export class adaptRoute {
  static create (fn: Function){
      return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
          body: req.body,
          params: req.params
        }

        const httpResponse = await fn(httpRequest);

        res.status(httpResponse.statusCode).json(httpResponse.body);
      }  
  } 
}