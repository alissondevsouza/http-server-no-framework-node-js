class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, newproduct) {
        
        return await this.productRepository.updateProduct(id, newproduct)
    }
}

export default UpdateProductUseCase;