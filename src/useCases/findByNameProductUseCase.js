class FindByNameProductUseCase {

    constructor(productRepository) {

        this.productRepository = productRepository;
    }

    async execute(name) {

        const parseName = name.replace(/%20/g, " ");

        const product = await this.productRepository.getProductByName(parseName);

        if (product == undefined) {
            const messageNoProducts = {
                code: 404,
                message: `Product Name: ${parseName} not found in the database`
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

export default FindByNameProductUseCase;