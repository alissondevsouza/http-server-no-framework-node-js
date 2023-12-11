class DeleteProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(productId) {

        return await this.productRepository.delete(productId);
    }
}

export default DeleteProductUseCase;