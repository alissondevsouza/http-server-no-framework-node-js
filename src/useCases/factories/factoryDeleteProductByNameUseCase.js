import DeleteProductByNameUseCase from "../deleteProductByNameUseCase.js";
import PostgresProductRepository from "../../external/repositories/postgres/postgresProductRepository.js";

function factoryDeleteProductByNameUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase = new DeleteProductByNameUseCase(productRepository);

    return productUseCase;
}

export default factoryDeleteProductByNameUseCase;