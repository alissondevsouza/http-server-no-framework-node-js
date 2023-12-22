import ProductController from './productController.js';
import { handleErrorRoute } from './errors/handleErrorRoute.js';
import { handleResponseRunApplications } from './handleResponseRunApplications.js';

class Routes {

    constructor() {
        this.productController = new ProductController();
    };
    
    execute(keyRouter, bodyData) {
        
        let productId = null;
        if (keyRouter.includes('id=')) productId = keyRouter.match(/\d+/)[0];

        let productName = null;
        if (keyRouter.includes('name=')) productName = keyRouter.match(/name=([^&:]+)/)[1];

        switch (true) {
            case keyRouter === '/product:get':
                return this.productController.findProducts();

            case keyRouter === `/product?id=${productId}:get`:
                return this.productController.findByIdProduct(productId);

            case keyRouter === `/product?name=${productName}:get`:
                return this.productController.findByNameProduct(productName);

            case keyRouter === '/product:post':
                return this.productController.createProduct(bodyData);

            case keyRouter === `/product?id=${productId}:put`:
                return this.productController.updateProduct(productId, bodyData);
            
            case keyRouter === `/product?id=${productId}:delete`:
                return this.productController.deleteProductById(productId);

            case keyRouter === `/product?name=${productName}:delete`:
                return this.productController.deleteProductByName(productName);

            case keyRouter === '/run-application:get':
                return handleResponseRunApplications();

            default:
                return handleErrorRoute();
        }
    }
}

export default Routes;