class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    execute(id, newproduct) {
        
        return this.productRepository.update(id, newproduct);
    }
}

export default UpdateProductUseCase;