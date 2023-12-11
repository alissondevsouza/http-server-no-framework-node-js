import CreateProductUseCase from "../createProductUseCase.js";
import PostgresProductRepository from "../../external/repositories/postgres/postgresProductRepository.js";

function factoryCreateProductUseCase() {

    const productRepository = new PostgresProductRepository();
    const productUseCase = new CreateProductUseCase(productRepository);

    return productUseCase;
}

export default factoryCreateProductUseCase;