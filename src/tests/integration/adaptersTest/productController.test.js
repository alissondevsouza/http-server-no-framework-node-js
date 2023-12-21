import { describe, it } from 'node:test'
import assert from 'node:assert'

import  ProductController  from '../../../adapters/productController.js'

describe('ProductController', () => {

    it('should return a list of products', async () => {
        
        const productController = new ProductController();
        const products = await productController.findProducts();
        const objectProduct = JSON.parse(products.message);

        assert.strictEqual(objectProduct.code, 200);
        assert.ok(Array.isArray(objectProduct.products));
        assert.notStrictEqual(objectProduct.products.length, 0);

        objectProduct.products.forEach(product => {
            assert.ok(product.hasOwnProperty('id'));
            assert.ok(product.hasOwnProperty('name'));
            assert.ok(product.hasOwnProperty('price'));
            assert.ok(product.hasOwnProperty('description'));
        });
    });

    it('should return a product', async () => {
        
        const productController = new ProductController();
        const product = await productController.findByIdProduct(42);
        const objectProduct = JSON.parse(product.message);

        assert.strictEqual(objectProduct.code, 200);
        assert.notStrictEqual(objectProduct.product, null);
        
        assert.ok(objectProduct.product.hasOwnProperty('id'));
        assert.ok(objectProduct.product.hasOwnProperty('name'));
        assert.ok(objectProduct.product.hasOwnProperty('price'));
        assert.ok(objectProduct.product.hasOwnProperty('description'));
    
    });

    it('should return a message error', async () => {
        
        const id = 1;

        const productController = new ProductController();
        const product = await productController.findByIdProduct(id);
        const objectProduct = JSON.parse(product.message);

        assert.strictEqual(objectProduct.code, 404);
        assert.strictEqual(objectProduct.message, `Product ID: ${id} not found in the database`);
    
    });

    it('should create a product', async () => {

        const dataBody = {
            name: 'Product Test',
            price: 100,
            description: 'Product Test Description'
        };

        const productController = new ProductController();
        await productController.createProduct(dataBody);
        const product = await productController.findByIdProduct(43);
        const objectProduct = JSON.parse(product.message);
        
    });

    it('should update a product', async () => {

        const dataBody = {
            name: 'Product Test',
            price: 100,
            description: 'Product Test Description'
        };

        const productController = new ProductController();
        await productController.updateProduct(43, dataBody);
        const product = await productController.findByIdProduct(43);

        const objectProduct = JSON.parse(product.message);
        assert.strictEqual(objectProduct.code, 200);
        assert.notStrictEqual(objectProduct.product, null);

    });

    it('should delete a product', async () => {

        const productController = new ProductController();
        await productController.deleteProduct(43);
        const product = await productController.findByIdProduct(43);

        const objectProduct = JSON.parse(product.message);
        assert.strictEqual(objectProduct.code, 404);
        assert.strictEqual(objectProduct.message, `Product ID: 43 not found in the database`);

    });

});