class DeleteProductByNameUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(productName) {

        const product = await this.productRepository.getProductByName(productName);

        if (product == undefined) {

            const messageNoProducts = {
                code: 404,
                message: `Product Name: ${productName} not found in the database`
            }
          
            return messageNoProducts;
        }

        await this.productRepository.deleteProductByName(productName);

        const productDeleteResponse = {
            code: 200,
            product: `Product ID: ${productName} deleted successfully`
        }
        
        return productDeleteResponse;
    }
}

export default DeleteProductByNameUseCase;