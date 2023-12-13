class FindProductUseCase {

    constructor(productRepository ) {
        
        this.productRepository = productRepository;
    }

    async execute() {
        
        return await this.productRepository.getAllProducts();
    }
}

export default FindProductUseCase;