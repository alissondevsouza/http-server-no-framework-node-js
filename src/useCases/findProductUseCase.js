class FindProductUseCase {

    constructor(productRepository ) {
        
        this.productRepository = productRepository;
    }

    async execute() {

        const products = await this.productRepository.getAllProducts();

       if (!products) {
        const productsNotFound = `Products not found in database`;

        return productsNotFound;
       }
        
        return await this.productRepository.getAllProducts();
    }
}

export default FindProductUseCase;