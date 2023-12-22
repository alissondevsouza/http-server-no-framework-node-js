import { describe, it } from 'node:test'
import assert from 'node:assert'
import { randomBytes } from 'crypto';

import  ProductController  from '../../../adapters/productController.js'

describe('ProductController', () => {

    it('should return a list of products', async () => {

        let productNameOne = randomBytes(5).toString('hex');
        let productNameTwo = randomBytes(5).toString('hex');
        const productController = new ProductController();

        const productOne = {
            name: productNameOne,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };
        const productTwo = {
            name: productNameTwo,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        await productController.createProduct(productOne);
        await productController.createProduct(productTwo);

        const products = await productController.findProducts();
        const objectProduct = JSON.parse(products.message);

        await productController.deleteProductByName(productNameOne);
        await productController.deleteProductByName(productNameTwo);

        assert.strictEqual(objectProduct.code, 200);
        assert.ok(Array.isArray(objectProduct.products));
        assert.notStrictEqual(objectProduct.products.length, 0);
        assert.notStrictEqual(objectProduct.products.length, 1);

        objectProduct.products.forEach(product => {
            assert.ok(product.hasOwnProperty('id'));
            assert.ok(product.hasOwnProperty('name'));
            assert.ok(product.hasOwnProperty('price'));
            assert.ok(product.hasOwnProperty('description'));
        });
    });
    
    it('should return a product', async () => {
        
        let productName = randomBytes(5).toString('hex');
        const productController = new ProductController();

        const product = {
            name: productName,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        await productController.createProduct(product);
        const resultFindByName = await productController.findByNameProduct(productName);
        const objectResultFindByName = JSON.parse(resultFindByName.message);
        const productId = objectResultFindByName.product.id;

        const productResult = await productController.findByIdProduct(productId);
        const objectProduct = JSON.parse(productResult.message);

        await productController.deleteProductByName(productName);

        assert.strictEqual(objectProduct.code, 200);
        assert.notStrictEqual(objectProduct.product, null);
        assert.ok(objectProduct.product.hasOwnProperty('id'));
        assert.ok(objectProduct.product.hasOwnProperty('name'));
        assert.ok(objectProduct.product.hasOwnProperty('price'));
        assert.ok(objectProduct.product.hasOwnProperty('description'));
    
    });

    it('should create a product', async () => {

        let productName = randomBytes(5).toString('hex');
        const productController = new ProductController();

        const prpductCreate = {
            name: productName,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        await productController.createProduct(prpductCreate);

        const productCreated = await productController.findByNameProduct(productName);
        const objectResultFindByName = JSON.parse(productCreated.message);

        await productController.deleteProductByName(productName);

        assert.strictEqual(objectResultFindByName.code, 200);
        assert.notStrictEqual(objectResultFindByName.product, null);
        assert.strictEqual(objectResultFindByName.product.name, productName);
        assert.strictEqual(objectResultFindByName.product.price, prpductCreate.price);
        assert.strictEqual(objectResultFindByName.product.description, prpductCreate.description);
    });
    
    it('should update a product', async () => {

        let productNameCreate = randomBytes(5).toString('hex');
        let productNameUpdate = randomBytes(5).toString('hex');
        const productController = new ProductController();

        const productCreated = {
            name: productNameCreate,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };
        await productController.createProduct(productCreated);
        const resultProductCreated = await productController.findByNameProduct(productNameCreate);
        const objectResultProductCreated = JSON.parse(resultProductCreated.message);
        const productId = objectResultProductCreated.product.id;

        const productUpdated = {
            name: productNameUpdate,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        await productController.updateProduct(productId, productUpdated);
        const productUpdateResult = await productController.findByIdProduct(productId);
        const objectProductUpdateResult = JSON.parse(productUpdateResult.message);

        await productController.deleteProductById(productId);

        assert.strictEqual(objectProductUpdateResult.code, 200);
        assert.notStrictEqual(objectProductUpdateResult.product, null);
        assert.strictEqual(objectProductUpdateResult.product.name, productUpdated.name);
        assert.strictEqual(objectProductUpdateResult.product.price, productUpdated.price);
        assert.strictEqual(objectProductUpdateResult.product.description, productUpdated.description);
        assert.notStrictEqual(objectProductUpdateResult.product.name, productCreated.name);
    });

    it('should delete a product', async () => {

        
        let productName = randomBytes(5).toString('hex');
        const productController = new ProductController();

        const prpductCreate = {
            name: productName,
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        await productController.createProduct(prpductCreate);
        const productCreated = await productController.findByNameProduct(productName);
        const objectResultFindByName = JSON.parse(productCreated.message);
        const productId = objectResultFindByName.product.id;

        const resultDelete = await productController.deleteProductById(productId);
        const objectResultDelete = JSON.parse(resultDelete.message);

        const productDeleted = await productController.findByIdProduct(productId);
        const objectResultFindById = JSON.parse(productDeleted.message);

        assert.strictEqual(objectResultDelete.code, 200);
        assert.strictEqual(objectResultDelete.product, `Product ID: ${productId} deleted successfully`);
        assert.strictEqual(objectResultFindById.code, 404);
        assert.strictEqual(objectResultFindById.message, `Product ID: ${productId} not found in the database`);
    });
});