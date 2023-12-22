import { describe, it } from 'node:test'
import assert from 'node:assert'

import { handleErrorPostgres } from '../../../external/repositories/postgres/handleErrorPostgres.js';

describe('handleErrorPostgres', () => {

    it('Should return the response correctly', () => {

        const error = {
            code: 200,
            message: 'message error postgres'
        }

        const responseErrorResult = {
            code: 200,
            message: '{"code":200,"message":"message error postgres"}'
        }

        const responseErrorReturned = handleErrorPostgres(error);

        assert.strictEqual(responseErrorReturned.code, responseErrorResult.code);
        assert.strictEqual(responseErrorReturned.message, responseErrorResult.message);
    });
});