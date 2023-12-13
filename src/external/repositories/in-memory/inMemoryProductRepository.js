class InMemoryProductRepository {

    constructor() {
        this.products = [];
    }

    async save(product) {
        this.products.push(product);
    }

    async findAll() {
        return this.products;
    }

    async findById(id) {
        return this.products.find(product => product.id === id);
    }

    async delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
    }

    async update(id, product) {
        const index = this.products.findIndex(product => product.id === id);
        this.products[index] = product;
    }
}