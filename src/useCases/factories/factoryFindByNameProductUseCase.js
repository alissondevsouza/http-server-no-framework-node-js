import FindByNameProductUseCase from '../findByNameProductUseCase.js';
import PostgresProductRepository from '../../external/repositories/postgres/postgresProductRepository.js'

function factoryFindByNameProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase =  new FindByNameProductUseCase(productRepository);

    return productUseCase;
}

export default factoryFindByNameProductUseCase;