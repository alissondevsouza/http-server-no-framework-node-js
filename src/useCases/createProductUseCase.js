class CreateProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(product) {
    
        return await this.productRepository.createProduct(product);
    }
}

export default CreateProductUseCase;