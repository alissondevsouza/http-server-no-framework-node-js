import Product from "../entities/product.js";

function generateProduct(dataProduct) {

    const { id, product_name, price, description } = dataProduct;

    return new Product(id, product_name, price, description);
}

export {
    generateProduct
}