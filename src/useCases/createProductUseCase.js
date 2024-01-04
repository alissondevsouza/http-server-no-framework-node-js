import { generateProduct } from '../utils/generateProduct.js';

class CreateProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(dataBody) {

        const INCORRECT_PARAMETERS = 'incorretParameters'

        const parseDataBody = {
            name: dataBody.name,
            price: parseFloat(dataBody.price),
            description: dataBody.description
        }

        const newProduct = generateProduct(parseDataBody);

        if (newProduct === INCORRECT_PARAMETERS) {

            const messageNoProducts = {
                code: 400,
                message: 'Incorrect parameters entered'
            }

            return messageNoProducts;
        }

        const productExists = 
            await this.productRepository.getProductByValues(newProduct.name, newProduct.price, newProduct.description); 
            
        if (productExists !== undefined) {
                
                const messageNoProducts = {
                    code: 400,
                    message: `Error when creating the product: ${newProduct.name} already exists`
                }
    
                return messageNoProducts;
        }

        await this.productRepository.createProduct(newProduct);

        const productCreated = 
            await this.productRepository.getProductByName(newProduct.name, newProduct.price, newProduct.description);

        if (productCreated === undefined) {

            const messageNoProducts = {
                code: 400,
                message: `Product ${newProduct.name} not created`
            }

            return messageNoProducts;
        }

        const createdroductResponse = {
            code: 201,
            message: `Product ${productCreated.name} created successfully`,
        }

        return createdroductResponse;
    }
}

export default CreateProductUseCase;