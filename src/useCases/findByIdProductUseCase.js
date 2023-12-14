class FindByIdProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    async execute(id) {
        return await this.productRepository.getProductById(id);
       
    }
}

export default FindByIdProductUseCase;