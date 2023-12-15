import ProductController from './productController.js';
import { handleErrorRoute } from './errors/handleErrorRoute.js';

class Routes {

    constructor() {
        this.productController = new ProductController();
    };
    
    execute(keyRouter, bodyData) {
        
        let productId = null;
        if (keyRouter.includes('id=')) productId = keyRouter.match(/\d+/)[0];

        switch (true) {
            case keyRouter === '/product:get':
                return this.productController.findProducts();

            case keyRouter === `/product?id=${productId}:get`:
                return this.productController.findByIdProduct(productId);

            case keyRouter === '/product:post':
                return this.productController.createProduct(bodyData);

            case keyRouter === `/product?id=${productId}:put`:
                return this.productController.updateProduct(productId, bodyData);
            
            case keyRouter === `/product?id=${productId}:delete`:
                return this.productController.deleteProduct(productId);

            default:
                return handleErrorRoute();
        }
    }
}

export default Routes;