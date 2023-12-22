import dataBaseConfiguration from "../../database/dataBaseConfiguration.js";
import Product from "../../../entities/product.js"
import { handleErrorPostgres } from "../postgres/handleErrorPostgres.js";

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

            console.error(`Error when searching all products. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }

    async getProductById(id){
        try {
            const client = await this.dataBaseConnection.pool.connect();

            const result = await client.query('SELECT * FROM product WHERE id = $1', [id]);

            client.release();

            if (result.rows[0] === undefined) return undefined;

            const product = new Product(
                result.rows[0].id, 
                result.rows[0].product_name, 
                parseFloat(result.rows[0].price) , 
                result.rows[0].description
            );

            return product;

        }catch(error){
           
            console.error(`Error when searching product by id. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }

    async getProductByValues(name, price, description){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = 
                await client.query(
                    'SELECT * FROM product WHERE product_name = $1 and price = $2 and description = $3 ',[name, price, description]
                    );

            client.release();

            if (result.rows[0] === undefined) return undefined;

            const product = new Product(
                result.rows[0].id, 
                result.rows[0].product_name, 
                parseFloat(result.rows[0].price) , 
                result.rows[0].description
            );

            return product;

        }catch(error){
            
            console.error(`Error when searching product by values. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }

    async getProductByName(name){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            const result = 
                await client.query('SELECT * FROM product WHERE product_name = $1', [name]);

            client.release();

            if (result.rows[0] === undefined) return undefined;

            const product = new Product(
                result.rows[0].id, 
                result.rows[0].product_name, 
                parseFloat(result.rows[0].price) , 
                result.rows[0].description
            );

            return product;

        }catch(error){
            
            console.error(`Error when searching product by name. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }

    async createProduct(newProduct){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query(
                'INSERT INTO product (product_name, price, description) VALUES ($1, $2, $3)', [newProduct.name, newProduct.price, newProduct.description]
                );

            client.release();

        }catch(error){

            console.error(`Error when creating product. Error: ${error}`)
            return handleErrorPostgres(error); 
        }
    }

    async updateProduct(id, updateProduct){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query(
                'UPDATE product SET product_name = $1, price = $2, description = $3 WHERE id = $4', [updateProduct.name, updateProduct.price, updateProduct.description, id]);

            client.release();

        }catch(error){
            
            console.error(`Error when updating product. Error: ${error}`)
            return handleErrorPostgres(error);
        }

    }

    async deleteProductById(id){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query('DELETE FROM product WHERE id = $1', [id]);

            client.release();

        }catch(error){
            
            console.error(`Error when deleting product. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }

    async deleteProductByName(name){
        try{
            const client = await this.dataBaseConnection.pool.connect();

            await client.query('DELETE FROM product WHERE product_name = $1', [name]);

            client.release();

        }catch(error){
            
            console.error(`Error when deleting product. Error: ${error}`)
            return handleErrorPostgres(error);
        }
    }
}

export default PostgresProductRepository;