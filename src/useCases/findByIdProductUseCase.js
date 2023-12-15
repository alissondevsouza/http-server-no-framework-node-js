class FindByIdProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    async execute(id) {

        const product = await this.productRepository.getProductById(id);

        if(!product) {
            const productNotFound = `Product id ${id} not found`

            return productNotFound;
        }
        
        return product;
       
    }
}

export default FindByIdProductUseCase;