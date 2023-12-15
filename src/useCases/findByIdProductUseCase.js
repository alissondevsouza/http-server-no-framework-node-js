class FindByIdProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    async execute(id) {

        const product = await this.productRepository.getProductById(id);
        
        return product;
       
    }
}

export default FindByIdProductUseCase;