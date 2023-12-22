import { describe, it } from 'node:test'
import assert from 'node:assert'

import { handleError } from '../../../main/error/handleError.js';

describe('handleError', () => {

    it('Should return the response correctly', () => {

        const responseErrorResult = {
            code: 400,
            message: 'An internal server error occurred while processing the request'
        }

        const responseErrorReturned = handleError();

        assert.strictEqual(responseErrorReturned.code, responseErrorResult.code);
        assert.strictEqual(responseErrorReturned.message, responseErrorResult.message);
    });
});