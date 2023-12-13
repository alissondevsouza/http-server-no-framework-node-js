import factoryFindProductUseCase from '../useCases/factories/factoryFindProductUseCase.js';
import factoryFindByIdProductUseCase from '../useCases/factories/factoryFindByIdProductUseCase.js';
import factoryCreateProductUseCase from '../useCases/factories/factoryCreateProductUseCase.js';
import factoryUpdateProductUseCase from '../useCases/factories/factoryUpdateProductUseCase.js';
import factoryDeleteProductUseCase from '../useCases/factories/factoryDeleteProductUseCase.js';
import { handleErrorController } from './errors/handleErrorController.js';

class ProductController {

    constructor() {
        this.findProductUseCase = factoryFindProductUseCase();
        this.findByIdProductUseCase = factoryFindByIdProductUseCase();
        this.createProductUseCase = factoryCreateProductUseCase();
        this.updateProductUseCase = factoryUpdateProductUseCase();
        this.deleteProductUseCase = factoryDeleteProductUseCase();
    }

    async findProducts() {
        try{

            const products =  JSON.stringify( await this.findProductUseCase.execute());

            return { code: 200, message: products};

        }catch(error){
            handleErrorController(error);
        }
    }

    findByIdProducts(id) {
        try{

            const product = JSON.stringify(this.findByIdProductUseCase.execute(id));

            if(product === undefined){
                return { code: 404, message: 'Product not found'};
            }

            return { code: 200, message: product};

        }catch(error){
            handleErrorController(error);
        }        
    }

    createProducts(dataBody) {
        try{
            const products = JSON.stringify(this.createProductUseCase.execute(dataBody));

            return { code: 200, message: products};

        }catch(error){
            handleErrorController(error);
        }
    }

    updateProducts(id, newProduct) {
        try{
            const product = JSON.stringify(this.updateProductUseCase.execute(id, newProduct));

            return {code: 200, message: product}

        }catch(error){
            handleErrorController(error);
        }         
    }

    deleteProducts(id) {
        try{
            const product = JSON.stringify(this.deleteProductUseCase.execute(id));

            return {code: 200, message: product}

        }catch(error){
            handleErrorController(error);
        }    
    }
}

export default ProductController;