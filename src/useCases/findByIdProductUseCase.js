class FindByIdProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    async execute(id) {

        const product = await this.productRepository.getProductById(id);

        if (product == undefined) {
            const messageNoProducts = {
                code: 404,
                message: `Product ID: ${id} not found in the database`
            }
          
            return messageNoProducts;
        }

        const productResponse = {
            code: 200,
            product: product
        }
        
        return productResponse;
       
    }
}

export default FindByIdProductUseCase;