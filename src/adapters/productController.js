import factoryFindProductUseCase from '../useCases/factories/factoryFindProductUseCase.js';
import factoryFindByIdProductUseCase from '../useCases/factories/factoryFindByIdProductUseCase.js';
import factoryCreateProductUseCase from '../useCases/factories/factoryCreateProductUseCase.js';
import factoryUpdateProductUseCase from '../useCases/factories/factoryUpdateProductUseCase.js';
import factoryDeleteProductUseCase from '../useCases/factories/factoryDeleteProductUseCase.js';


class ProductController {

    constructor() {
        this.findProductUseCase = factoryFindProductUseCase();
        this.findByIdProductUseCase = factoryFindByIdProductUseCase();
        this.createProductUseCase = factoryCreateProductUseCase();
        this.updateProductUseCase = factoryUpdateProductUseCase();
        this.deleteProductUseCase = factoryDeleteProductUseCase();
    }

    findProducts() {
        this.findProductUseCase.execute();
    }

    findByIdProducts(id) {
        this.findByIdProductUseCase.execute(id);
    }

    createProducts() {
        this.createProductUseCase.execute();
    }

    updateProducts(id) {
        this.updateProductUseCase.execute(id);
    }

    deleteProducts(id) {
        this.deleteProductUseCase.execute(id);
    }
}

export default ProductController;