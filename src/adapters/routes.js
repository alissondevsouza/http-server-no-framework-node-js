import ProductController from './productController.js';
import { handleErrorRoute } from './errors/handleErrorRoute.js';

export default class Routes {

    constructor() {
        this.productController = new ProductController();
    };
    
    execute(keyRouter) {
        
        let productId = null;
        if (keyRouter.includes('id=')) productId = keyRouter.match(/\d+/)[0];

        switch (true) {
            case keyRouter === '/product:get':
                return this.productController.findProducts();

            case keyRouter === `/product?id=${productId}:get`:
                return this.productController.findByIdProducts(productId);

            case keyRouter === '/product:post':
                return this.productController.createProducts();

            case keyRouter === `/product?id=${productId}:put`:
                return this.productController.updateProducts(productId);
            
            case keyRouter === `/product?id=${productId}:delete`:
                return this.productController.deleteProducts(productId);

            default:
                return handleErrorRoute();
        }
    }
}