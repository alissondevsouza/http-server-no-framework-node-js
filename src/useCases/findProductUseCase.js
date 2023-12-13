class FindProductUseCase {

    constructor(productRepository ) {
        
        this.productRepository = productRepository;
    }

    execute() {
        
        return this.productRepository.findAll();
    }
}

export default FindProductUseCase;