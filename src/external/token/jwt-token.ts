import "dotenv/config";
import { Token } from '@/usecases/ports/token';
import { Params } from "@/usecases/ports/type_token";
import * as jwt from 'jsonwebtoken'

export class JWToken implements Token {

    private readonly rounds: number = 10;

    public async generate (params: Params): Promise<string> {
        return await jwt.sign(params,process.env.KEY_SECRET_JWT,{
            expiresIn: 86400,
        })
    }
    public async verify (token: string): Promise<boolean> {
        return await jwt.verify(token,process.env.KEY_SECRET_JWT);
    }
}

/* 

const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }

*/