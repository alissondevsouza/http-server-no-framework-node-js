class FindByIdProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    execute(id) {
        return this.productRepository.findById(id);
       
    }
}

export default FindByIdProductUseCase;