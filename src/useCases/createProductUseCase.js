class CreateProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    execute(product) {
    
        return this.productRepository.create(product);
    }
}

export default CreateProductUseCase;