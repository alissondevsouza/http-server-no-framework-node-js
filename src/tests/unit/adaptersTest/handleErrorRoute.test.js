import { describe, it } from 'node:test'
import assert from 'node:assert'

import { handleErrorRoute } from '../../../adapters/errors/handleErrorRoute.js'

describe('handleErrorRoute', () => {

    it('Should return the response correctly', () => {

        const responseResult = {
            code: 400,
            message: 'The requested route was not found on the server'
        }

        const responseReturned = handleErrorRoute();

        assert.strictEqual(responseReturned.code, responseResult.code);
        assert.strictEqual(responseReturned.message, responseResult.message);
    });
});