
class PostgresProductRepository {
    constructor() {}

    async findAll() {
        return { code: 200, message: 'Get Product' };
    }

}

export default PostgresProductRepository;