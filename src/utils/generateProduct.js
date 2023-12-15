import Product from "../entities/product.js";

function generateProduct(dataProduct) {

    const INCORRECT_PARAMETERS = 'incorretParameters'

    const {id, name, price, description } = dataProduct;

    const idOrNull = id || null;

    if ( !name || !price || !description ) {

        return INCORRECT_PARAMETERS;
    }


    return new Product(idOrNull, name, price, description);
}

export {
    generateProduct
}