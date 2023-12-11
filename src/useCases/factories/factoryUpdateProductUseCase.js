import UpdateProductUseCase from '../updateProductUseCase.js';
import PostgresProductRepository from '../../external/repositories/postgres/postgresProductRepository.js'

function factoryUpdateProductUseCase () {

    const productRepository = new PostgresProductRepository();
    const productUseCase = new UpdateProductUseCase(productRepository);

    return productUseCase;
}

export default factoryUpdateProductUseCase;