import Routes from "../adapters/routes.js";


class Middleware {

    constructor() {
        this.routes = new Routes();
    }

    execute() {

        return (req, res) => {

            const KeyRouter = this._builderKeyRouter(req);
            const responseRouter = this.routes.execute(KeyRouter);

            const respon = this._builderResponseRouter(res, responseRouter);

            if (respon) return;
        }
    }
    
    _builderKeyRouter(req) {

        const { url, method } = req;
        const [first, routem, id] = url.split('/');

        req.queryString = { id: isNaN(id) ? id : Number(id) };

        const keyRouter = `/${routem}:${method.toLowerCase()}`;

        return keyRouter;
    }

    _builderResponseRouter(response, responseRouter) {

        let BUILDER_ACK = false;

        const DEFAULT_HEADER = { 'Content-Type': 'application/json' };
        const { code, message } = responseRouter;

        response.writeHead(code, DEFAULT_HEADER)
        response.write(message)
        response.end()

        return BUILDER_ACK = true;
    }
}

export default Middleware;