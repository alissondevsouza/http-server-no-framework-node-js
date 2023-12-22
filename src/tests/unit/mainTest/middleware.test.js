import Middleware from '../../../main/middleware.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { randomBytes } from 'crypto';


describe('Middleware', () => {
    
    it('should return a function when execute() is called', () => {

        const middleware = new Middleware();
        const result = middleware.execute();
        const expectedTypeResult = 'function';

        assert.strictEqual(typeof result, expectedTypeResult);
    });

    it ('Should build the correct router key when _builderKeyRouter() is called', () => {

            const req = {
                url: '/product',
                method: 'GET'
            }

            const expectedResult = '/product:get';
            
            const middleware = new Middleware();
            const result = middleware._builderKeyRouter(req);
    
            assert.strictEqual(result, expectedResult);
    })

    it ('Should build the correct response when _builderResponseRouter() is called', () => {

        const response = {
            writeHead: (code, header) => {
                return code;
            },
            write: (message) => {
                return message;
            },
            end: () => {
                return true;
            }
        }

        const responseRouter = {
            code: 200,
            message: 'OK'
        }

        const expectedResult = true;
        
        const middleware = new Middleware();
        const result = middleware._builderResponseRouter(response, responseRouter);

        assert.strictEqual(result, expectedResult);
    });
    
    it ('Should build the correct data body when _builderDataBody() is called', async () => {

        const product = {
            name: randomBytes(5).toString('hex'),
            price: parseFloat((Math.random()).toFixed(2)),
            description: randomBytes(10).toString('hex')
        };

        const req = {
            on: (event, callback) => {
                if (event === 'data') callback(JSON.stringify(product));
                if (event === 'end') callback();
            }
        }

        const expectedResult = {
            name: product.name,
            price: product.price,
            description: product.description
        };
        
        const middleware = new Middleware();
        const result = await middleware._builderDataBody(req);

        assert.deepStrictEqual(result, expectedResult);
    });
});