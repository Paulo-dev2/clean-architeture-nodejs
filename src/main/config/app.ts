import express from 'express';
import path from 'path';
import "dotenv/config";

import { MongoHelper } from '@/external/repositories/mongodb/helpers/mongo-helper';
import { bodyParser, cors, contentType } from '@/main/middleware'

/* Routes */
import { routeAdmin } from '@/main/routes/admin';
import { routeClient } from '@/main/routes/users';

class App{
    public server;
    constructor() {
        this.server = express();
        this.middleware();
        this.database();
        this.routes();
    }

    public middleware() {
        this.server.use(bodyParser)
        this.server.use(cors)
        this.server.use(contentType)
    }

    private routes() {
        this.server.use("/client",routeClient);
        this.server.use("/admin",routeAdmin);
        this.server.use("/files",express.static(path.resolve(__dirname,"..","temp","uploads","user"))
        );
    }

    private database(){
        MongoHelper.connect(process.env.MONGODB_URL);
    }
}
export default new App().server;