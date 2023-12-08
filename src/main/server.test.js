import { server } from './server.js';
import 'dotenv/config.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';


describe('Server', () => {

        it('Should start the server correctly on port 3000', () => {

            const PORT = 3000;

            assert.strictEqual(server.listening, true);
            assert.equal(server.address().port, PORT);
        });
});