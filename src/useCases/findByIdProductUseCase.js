class FindByIdProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id) {
        
        return await this.productRepository.findById(id);
       
    }
}

export default FindByIdProductUseCase;