import factoryFindProductUseCase from '../useCases/factories/factoryFindProductsUseCase.js';
import factoryFindByIdProductUseCase from '../useCases/factories/factoryFindByIdProductUseCase.js';
import factoryCreateProductUseCase from '../useCases/factories/factoryCreateProductUseCase.js';
import factoryUpdateProductUseCase from '../useCases/factories/factoryUpdateProductUseCase.js';
import factoryDeleteProductUseCase from '../useCases/factories/factoryDeleteProductUseCase.js';
import { handleErrorController } from './errors/handleErrorController.js';
import { handleResponse } from './handleResponse.js';

class ProductController {

    constructor() {
        this.findProductsUseCase = factoryFindProductUseCase();
        this.findByIdProductUseCase = factoryFindByIdProductUseCase();
        this.createProductUseCase = factoryCreateProductUseCase();
        this.updateProductUseCase = factoryUpdateProductUseCase();
        this.deleteProductUseCase = factoryDeleteProductUseCase();
    }

    async findProducts() {
        try{

            return handleResponse(await this.findProductsUseCase.execute());

        }catch(error){

            return handleErrorController(error);
        }
    }

    async findByIdProduct(id) {
        try{

            return handleResponse(await this.findByIdProductUseCase.execute(id));

        }catch(error){

            handleErrorController(error);
        }        
    }

    async createProduct(dataBody) {
        try{

            return handleResponse(await this.createProductUseCase.execute(dataBody));

        }catch(error){

            handleErrorController(error);
        }
    }

    async updateProduct(id, dataBody) {
        try{

            return handleResponse(await this.updateProductUseCase.execute(id, dataBody));

        }catch(error){

            handleErrorController(error);
        }         
    }

    async deleteProduct(id) {
        try{
            
            return handleResponse(await this.deleteProductUseCase.execute(id));

        }catch(error){

            handleErrorController(error);
        }    
    }
}

export default ProductController;