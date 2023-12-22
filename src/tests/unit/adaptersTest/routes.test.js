import { describe, it } from 'node:test'
import assert from 'node:assert'

import Routes from '../../../adapters/routes.js'

describe('Routes', () => {

    describe('Routes()', () => {

        it('should return "Running Application" as response from the "run-application" route', async() => {

            const routes = new Routes();
            const keyRouter = '/run-applications:get';

            const responseExpected = {
                code: 200,
                message: 'Running application...'
            }
            
            const responseRoute = await routes.execute(keyRouter);

            assert.strictEqual(responseRoute.code, responseExpected.code);
            assert.strictEqual(responseRoute.message, JSON.stringify(responseExpected));
        });

        it('should return "Not Found" as response from the "not-found" route', async() => {

            const routes = new Routes();
            const keyRouter = '/not-found:get';

            const responseExpected = {
                code: 400,
                message: 'The requested route was not found on the server'
            }
            
            const responseRoute = await routes.execute(keyRouter);

            assert.strictEqual(responseRoute.code, responseExpected.code);
            assert.strictEqual(responseRoute.message, responseExpected.message);
        });
    });
});