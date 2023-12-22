class DeleteProductByIdUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(productId) {

        const product = await this.productRepository.getProductById(productId);


        if (product == undefined) {

            const messageNoProducts = {
                code: 404,
                message: `Product ID: ${productId} not found in the database`
            }
          
            return messageNoProducts;
        }

        await this.productRepository.deleteProductById(productId);

        const productDeleteResponse = {
            code: 200,
            product: `Product ID: ${productId} deleted successfully`
        }
        
        return productDeleteResponse;
    }
}

export default DeleteProductByIdUseCase;