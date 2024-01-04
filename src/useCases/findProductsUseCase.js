class FindProductsUseCase {

    constructor(productRepository ) {
        
        this.productRepository = productRepository;
    }

    async execute() {

        const products = await this.productRepository.getAllProducts();

        if (Array.isArray(products) && products.length === 0) {

            const messageNoProducts = {
                code: 200,
                message: 'No products were found in the database'
            }
        
            return messageNoProducts;
        }

        const productsResponse = {
            code: 200,
            products: products
        }
        
        return productsResponse;
    }
}

export default FindProductsUseCase;