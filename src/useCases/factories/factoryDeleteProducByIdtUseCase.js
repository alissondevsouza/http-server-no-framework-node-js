import DeleteProductByIdUseCase from "../deleteProductByIdUseCase.js";
import PostgresProductRepository from "../../external/repositories/postgres/postgresProductRepository.js";

function factoryDeleteProductByIdUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase = new DeleteProductByIdUseCase(productRepository);

    return productUseCase;
}

export default factoryDeleteProductByIdUseCase;