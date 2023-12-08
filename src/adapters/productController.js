class ProductController {

    constructor() {

    }

    findProducts() {
        return { code: 200, message: 'Get Product' };
    }

    findByIdProducts(id) {
        return { code: 200, message: `Get Product Id ${id}` };
    }

    createProducts() {
        return { code: 200, message: 'Post Product' };
    }

    updateProducts(id) {
        return { code: 200, message: `Put product Id ${id}` };
    }

    deleteProducts(id) {
        return { code: 200, message: `Delete product Id ${id}` };
    }
}

export default ProductController;