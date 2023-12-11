import FindProductUseCase from '../findProductUseCase.js';
import PostgresProductRepository from '../../external/repositories/postgres/postgresProductRepository.js';

function factoryFindProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUsecase = new FindProductUseCase(productRepository);

    return productUsecase;
}

export default factoryFindProductUseCase;