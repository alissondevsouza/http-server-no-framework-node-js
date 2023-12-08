export default class Routes {

    constructor() {};

    execute(keyRouter) {
        
        let productId = null;
        if (keyRouter.includes('id=')) productId = keyRouter.match(/\d+/)[0];

        switch (true) {
            case keyRouter === '/product:get':
                return { code: 200, message: 'Get Product' };

            case keyRouter === `/product?id=${productId}:get`:
                return { code: 200, message: 'Get Product Id' };

            case keyRouter === '/product:post':
                return { code: 200, message: 'Post Product' };

            case keyRouter === `/product?id=${productId}:put`:
                return { code: 200, message: 'Put product Id' };
            
            case keyRouter === `/product?id=${productId}:delete`:
                return { code: 200, message: 'Delete product Id' };

            default:
                return { code: 404, message: 'Not Found' };
        }

    }
}