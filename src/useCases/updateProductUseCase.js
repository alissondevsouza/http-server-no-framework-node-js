import { generateProduct}  from '../utils/generateProduct.js';

class UpdateProductUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(id, dataBody) {

        const INCORRECT_PARAMETERS = 'incorretParameters'

        const parseDataBody = {
            name: dataBody.name,
            price: parseFloat(dataBody.price),
            description: dataBody.description
        }

        const newUpdateProduct = generateProduct(parseDataBody);

        if (newUpdateProduct === INCORRECT_PARAMETERS) {
                
            const messageNoProducts = {
                code: 400,
                message: 'Incorrect parameters entered'
            }
    
            return messageNoProducts;
        }

        const productExists = await this.productRepository.getProductById(id);

        if (productExists === undefined) {
                
            const messageNoProducts = {
                code: 400,
                message: `Error when updating the product: ${newUpdateProduct.name} does not exists`
            }
    
            return messageNoProducts;
        }

        const productNameExists = await this.productRepository.getProductByName(newUpdateProduct.name);

        if (productNameExists !== undefined && newUpdateProduct.name !== productExists.name) {
                    
                const messageNoProducts = {
                    code: 400,
                    message: `Error when updating the product: Product with name ${newUpdateProduct.name} already exists`
                }
        
                return messageNoProducts;
        }

        await this.productRepository.updateProduct(id, newUpdateProduct);

        const updatedProduct = await this.productRepository.getProductByName(newUpdateProduct.name);

        if (updatedProduct === undefined) {
                
            const messageNoProducts = {
                code: 400,
                message: `Product ${newUpdateProduct.name} not updated`
            }
    
            return messageNoProducts;
        }

        const updateProductResponse = {
            code: 200,
            message: `Product ${updatedProduct.name} updated successfully`,
        }
        
        return updateProductResponse;
    }
}

export default UpdateProductUseCase;