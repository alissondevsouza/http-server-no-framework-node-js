class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    execute(product) {
        
        return this.productRepository.update(product);
    }
}

export default UpdateProductUseCase;