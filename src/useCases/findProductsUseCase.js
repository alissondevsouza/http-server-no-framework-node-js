class FindProductsUseCase {

    constructor(productRepository ) {
        
        this.productRepository = productRepository;
    }

    async execute() {

        const products = await this.productRepository.getAllProducts();
        
        return products;
    }
}

export default FindProductsUseCase;