class DeleteProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    execute(productId) {

        return this.productRepository.delete(productId);
    }
}

export default DeleteProductUseCase;