import FindByIdProductUseCase from '../findByIdProductUseCase.js';
import PostgresProductRepository from '../../external/repositories/postgres/postgresProductRepository.js'

function factoryFindByIdProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase =  new FindByIdProductUseCase(productRepository);

    return productUseCase;
}

export default factoryFindByIdProductUseCase;