import { describe, it } from 'node:test'
import assert from 'node:assert'

import { handleErrorController } from '../../../adapters/errors/handleErrorController.js';

describe('handleErrorController', () => {

    it('Should return the response correctly', () => {

        const error = {
            code: 200,
            message: 'message error controller'
        }

        const responseErrorResult = {
            code: 200,
            message: '{"code":200,"message":"message error controller"}'
        }

        const responseErrorReturned = handleErrorController(error);

        assert.strictEqual(responseErrorReturned.code, responseErrorResult.code);
        assert.strictEqual(responseErrorReturned.message, responseErrorResult.message);
    });
});