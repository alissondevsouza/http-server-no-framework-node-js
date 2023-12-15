class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, updateProduct) {

        if (!updateProduct) {
            const productInvalid = 'Product invalid';

            return productInvalid;
        }
        
        return await this.productRepository.updateProduct(id, updateProduct)
    }
}

export default UpdateProductUseCase;