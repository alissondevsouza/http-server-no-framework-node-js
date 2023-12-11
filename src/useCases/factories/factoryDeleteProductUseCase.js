import DeleteProductUseCase from "../deleteProductUseCase.js";
import PostgresProductRepository from "../../external/repositories/postgres/postgresProductRepository.js";

function factoryDeleteProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase = new DeleteProductUseCase(productRepository);

    return productUseCase;
}

export default factoryDeleteProductUseCase;