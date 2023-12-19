import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert'

import { handleResponse } from '../../../adapters/handleResponse.js'

describe('handleResponse', () => {

    it('Should return the response correctly', () => {

        const response = {
            code: 200,
            message: 'OK'
        }

        const responseResult = {
            code: 200,
            message: '{"code":200,"message":"OK"}'
        }

        const responseReturned = handleResponse(response);

        assert.strictEqual(responseReturned.code, responseResult.code);
        assert.strictEqual(responseReturned.message, responseResult.message);
    });
});

