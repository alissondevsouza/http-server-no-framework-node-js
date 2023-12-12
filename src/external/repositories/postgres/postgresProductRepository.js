class PostgresProductRepository {

    constructor() {}

    findAll() {
        return { code: 200, message: 'Get Product' };
    }

    findById(id) {
        return { code: 200, message: `Get Product ${id}` };
    }

    create() {
        return { code: 200, message: 'Create Product' };
    }

    update(id) {
        return { code: 200, message: `Update Product ${id}` };
    }

    delete(id) {
        return { code: 200, message: `Delete Product ${id}` };
    }

}

export default PostgresProductRepository;