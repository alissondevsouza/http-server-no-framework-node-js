class CreateProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(newProduct) {

        if (!newProduct) {
            const productInvalid = `New Product invalid`;

            return productInvalid;
        }
    
        return await this.productRepository.createProduct(newProduct);
    }
}

export default CreateProductUseCase;