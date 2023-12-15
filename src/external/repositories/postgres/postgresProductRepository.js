import dataBaseConfiguration from "../../database/dataBaseConfiguration.js";
import Product from "../../../entities/product.js"

class PostgresProductRepository {

    constructor() {
        this.dataBaseConnection = new dataBaseConfiguration();
    }

    async getAllProducts(){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('SELECT * FROM product');

            client.release();

            let products = [];

            for (let i = 0; i < result.rows.length; i++) {
                const product = new Product(
                    result.rows[i].id, 
                    result.rows[i].product_name, 
                    parseFloat(result.rows[i].price), 
                    result.rows[i].description
                );

                products.push(product);
            }

            return products;

        }catch(error){
            console.log(`Erro ao buscar todos os produtos`);
        }
    }

    async getProductById(id){
        const productId = parseInt(id);

        try {
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('SELECT * FROM product WHERE id = $1', [productId]);

            client.release();

            const product = new Product(
                result.rows[0].id, 
                result.rows[0].product_name, 
                parseFloat(result.rows[0].price) , 
                result.rows[0].description
            );

            return product;

        }catch(error){
           console.log(`Erro ao buscar produto pelo id ${productId}`);
        }
    }

    async createProduct(newProduct){

        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query(
                'INSERT INTO product (product_name, price, description) VALUES ($1, $2, $3)', [newProduct.name, newProduct.price, newProduct.description]);

            client.release();

            return newProduct;

        }catch(error){
            console.log(error);
        }
    }

    async updateProduct(id, updateProduct){
        const productId = parseInt(id);

        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query(
                'UPDATE product SET product_name = $1, price = $2, description = $3 WHERE id = $4', [updateProduct.name, updateProduct.price, updateProduct.description, productId]);

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

            return await this.getAllProducts()

        }catch(error){
            console.log(error);
        }
    }
}

export default PostgresProductRepository;