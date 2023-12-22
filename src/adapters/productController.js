import factoryFindProductUseCase from '../useCases/factories/factoryFindProductsUseCase.js';
import factoryFindByIdProductUseCase from '../useCases/factories/factoryFindByIdProductUseCase.js';
import factoryFindByNameProductUseCase from '../useCases/factories/factoryFindByNameProductUseCase.js';
import factoryCreateProductUseCase from '../useCases/factories/factoryCreateProductUseCase.js';
import factoryUpdateProductUseCase from '../useCases/factories/factoryUpdateProductUseCase.js';
import factoryDeleteProductByIdUseCase from '../useCases/factories/factoryDeleteProducByIdtUseCase.js';
import factoryDeleteProductByNameUseCase from '../useCases/factories/factoryDeleteProductByNameUseCase.js';
import { handleErrorController } from './errors/handleErrorController.js';
import { handleResponse } from './handleResponse.js';

class ProductController {

    constructor() {
        this.findProductsUseCase = factoryFindProductUseCase();
        this.findByIdProductUseCase = factoryFindByIdProductUseCase();
        this.findByNameProductUseCase = factoryFindByNameProductUseCase();
        this.createProductUseCase = factoryCreateProductUseCase();
        this.updateProductUseCase = factoryUpdateProductUseCase();
        this.deleteProductByIdUseCase = factoryDeleteProductByIdUseCase();
        this.deleteProductByNameUseCase = factoryDeleteProductByNameUseCase();
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

    async findByNameProduct(name) {
        try{

            return handleResponse(await this.findByNameProductUseCase.execute(name));

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

    async deleteProductById(id) {
        try{
            
            return handleResponse(await this.deleteProductByIdUseCase.execute(id));

        }catch(error){

            handleErrorController(error);
        }    
    }

    async deleteProductByName(name) {
        try{

            return handleResponse(await this.deleteProductByNameUseCase.execute(name));

        }catch(error){

            handleErrorController(error);
        }    
    }
}

export default ProductController;