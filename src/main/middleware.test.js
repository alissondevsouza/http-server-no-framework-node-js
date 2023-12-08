import Middleware from './middleware.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';

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

});