import factoryFindProductUseCase from '../useCases/factories/factoryFindProductUseCase.js';
import factoryFindByIdProductUseCase from '../useCases/factories/factoryFindByIdProductUseCase.js';
import factoryCreateProductUseCase from '../useCases/factories/factoryCreateProductUseCase.js';
import factoryUpdateProductUseCase from '../useCases/factories/factoryUpdateProductUseCase.js';
import factoryDeleteProductUseCase from '../useCases/factories/factoryDeleteProductUseCase.js';
import FindProductUseCase from '../useCases/findProductUseCase.js';


class ProductController {

    constructor() {
        this.findProductUseCase = factoryFindProductUseCase();
        this.findByIdProductUseCase = factoryFindByIdProductUseCase();
        this.createProductUseCase = factoryCreateProductUseCase();
        this.updateProductUseCase = factoryUpdateProductUseCase();
        this.deleteProductUseCase = factoryDeleteProductUseCase();
    }

    findProducts() {

        return this.findProductUseCase.execute();
    }

    findByIdProducts(id) {
        return this.findByIdProductUseCase.execute(id);
    }

    createProducts() {
        return this.createProductUseCase.execute();
    }

    updateProducts(id) {
        return this.updateProductUseCase.execute(id);
    }

    deleteProducts(id) {
        return this.deleteProductUseCase.execute(id);
    }
}

export default ProductController;