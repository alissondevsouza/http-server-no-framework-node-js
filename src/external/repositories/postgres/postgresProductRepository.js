class PostgresProductRepository {

    constructor() {
        this.mockProducts = [
            {id: 1, name: 'Product 1'},
            {id: 2, name: 'Product 2'},
            {id: 3, name: 'Product 3'}
        ]
    }


    findAll() {
        return this.mockProducts;
    }

    findById(id) {
        const newid = parseInt(id);

        return this.mockProducts.find(product =>{
            return product.id === newid;
        });
    }

    create(product) {

        this.mockProducts.push(product);

        return this.mockProducts
    }

    update(id, newProduct) {

        const newid = parseInt(id);

        const index = this.mockProducts.findIndex(product =>{
            return product.id === newid;
        });

        this.mockProducts[index] = newProduct;

        return this.mockProducts;
    }

    delete(id) {
            
        const newid = parseInt(id);
    
        const index = this.mockProducts.findIndex(product =>{
            return product.id === newid;
        });
    
        this.mockProducts.splice(index, 1);
    
        return this.mockProducts;
    }

}

export default PostgresProductRepository;