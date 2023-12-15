import Routes from "../adapters/routes.js";
import { handleError } from "./error/handleError.js";


class Middleware {

    constructor() {
        this.routes = new Routes();
    }

    execute() {

        return async (req, res) => {

            const KeyRouter = this._builderKeyRouter(req);

            let reqData = null;
            if (req.method === 'POST' || req.method === 'PUT') reqData = await this._builderDataBody(req);

            const responseRouter = await this.routes.execute(KeyRouter, reqData);

            const respon = this._builderResponseRouter(res, responseRouter);

            if (respon) return;
        }
    }

     _builderDataBody(req) {
            
            return new Promise((resolve, reject) => {
    
                let body = '';
    
                req.on('data', (chunk) => {
                    body += chunk;
                });
    
                req.on('end', () => {
                    resolve(JSON.parse(body));
                });
    
                req.on('error', (error) => {
                    reject(error);
                });
            });
    }
    
    _builderKeyRouter(req) {

        const { url, method} = req;

        const keyRouter = `${url}:${method.toLowerCase()}`;

        return keyRouter;
    }

    _builderResponseRouter(response, responseRouter) {

        let builderAck = false;

        const DEFAULT_HEADER = { 'Content-Type': 'application/json' };

        responseRouter? responseRouter : responseRouter = handleError(response, DEFAULT_HEADER);
        
        const { code, message } = responseRouter;

        response.writeHead(code, DEFAULT_HEADER)
        response.write(message)
        response.end()

        builderAck = true;

        return builderAck;
    }
}

export default Middleware;