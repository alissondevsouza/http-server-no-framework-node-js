import dataBaseConfiguration from "../../database/dataBaseConfiguration.js";

class PostgresProductRepository {

    constructor() {
        this.dataBaseConnection = new dataBaseConfiguration();
    }

    async getAllProducts(){
        try{

            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('SELECT * FROM product');

            client.release();

            return result.rows;

        }catch(error){
            console.log(error);
        }
    }

    async getProductById(id){
        const productId = parseInt(id);

        try {
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('SELECT * FROM product WHERE id = $1', [productId]);

            client.release();

            return result.rows[0];

        }catch(error){
            console.log(error);
        }
    }

    async createProduct(product){

        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query(
                'INSERT INTO product (product_name, price, description) VALUES ($1, $2, $3)', [product.product_name, product.price, product.description]);

            client.release();

            return await this.getAllProducts();

        }catch(error){
            console.log(error);
        }
    }

    async updateProduct(id, newProduct){
        const productId = parseInt(id);

        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query(
                'UPDATE product SET product_name = $1, price = $2, description = $3 WHERE id = $4', [newProduct.product_name, newProduct.price, newProduct.description, productId]);

            client.release();

            const response = await this.getAllProducts();

            return response;

        }catch(error){
            console.log(error);
        }

    }

    async deleteProduct(id){
        const productId = parseInt(id);

        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('DELETE FROM product WHERE id = $1', [productId]);

            client.release();

            return result.rows;

        }catch(error){
            console.log(error);
        }
    }
}

export default PostgresProductRepository;