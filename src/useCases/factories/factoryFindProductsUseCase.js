import FindProductsUseCase from '../findProductsUseCase.js';
import PostgresProductRepository from '../../external/repositories/postgres/postgresProductRepository.js';

function factoryFindProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUsecase = new FindProductsUseCase(productRepository);

    return productUsecase;
}

export default factoryFindProductUseCase;