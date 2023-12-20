import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert'
import  Product  from '../../../entities/product.js'
import { randomBytes, randomUUID } from 'crypto';

const generate = () => {

  return randomBytes(20).toString('hex');
};

describe('Product domain entity', () => {

  let productData;

  beforeEach(() => {
    productData = {id: randomUUID(), name: generate(), price: Math.floor(Math.random() * 1000), description: generate()};
  });
  
  it('Should create a product correctly', () => {

    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    assert.strictEqual(product.name, productData.name);
    assert.strictEqual(product.price, productData.price);
    assert.strictEqual(product.description, productData.description);
  });
  
  it('Should update the product name correctly', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    const newName = generate();
    product.updateName(newName);

    assert.strictEqual(product.name, newName);
  });
  
  it('Should update the product price correctly', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    const newPrice = Math.floor(Math.random() * 1000);
    product.updatePrice(newPrice);

    assert.strictEqual(product.price, newPrice);
  });
  
  it('Should update the product description correctly', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    const newDescription = generate();
    product.updateDescription(newDescription);

    assert.strictEqual(product.description, newDescription);
  });
  
  it('Should return the product data correctly', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    const productDataReturned = product.showProduct();

    assert.strictEqual(productDataReturned.name, productData.name);
    assert.strictEqual(productDataReturned.price, productData.price);
    assert.strictEqual(productDataReturned.description, productData.description);
  });
  
  it('Should throw an error when the name is invalid', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    assert.throws(() => product.updateName('  '), { message: 'The name field must be a non-empty string' });
  });
  
  it('Should throw an error when the price is invalid', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    assert.throws(() => product.updatePrice(generate()), { message: 'The price field must be a positive number' });
  });

  it('Should throw an error when the description is invalid', () => {
    const product = new Product(productData.id, productData.name, productData.price, productData.description);

    assert.throws(() => product.updateDescription('  '), { message: 'The description field must be a non-empty string' });
  });
});

