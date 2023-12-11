class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(product) {
        
        return await this.productRepository.update(product);
    }
}

export default UpdateProductUseCase;