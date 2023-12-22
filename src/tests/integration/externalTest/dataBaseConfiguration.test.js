import { describe, it } from 'node:test'
import assert from 'node:assert'

import dataBaseConfiguration from '../../../external/database/dataBaseConfiguration.js'

describe('dataBaseConfiguration', () => {

    it('should return a pool object', () => {

        const dataBase = new dataBaseConfiguration();

        assert.ok(dataBase.pool);
    });
});