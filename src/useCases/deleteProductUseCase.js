class DeleteProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(productId) {

        return await this.productRepository.deleteProduct(productId);
    }
}

export default DeleteProductUseCase;